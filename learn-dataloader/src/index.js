const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Comment {
    writer: User
    content: String
  }

  type Post {
    title: String
    content: String
    writer: User
    comments: [Comment]
    postCount: Int
    userCount: Int
  }

  type Query {
    hello: String
    post(id: Int!): Post
  }
`;

const _users = [
  {
    name: 'cho',
    age: 20,
  },
  {
    name: 'chan',
    age: 20,
  },
  {
    name: 'yeong',
    age: 20,
  },
];

const _posts = [
  {
    title: 'post1',
    content: 'post content1',
    writer: 0,
    comments: [
      {
        writer: 1,
        content: 'comment 1',
      },
      {
        writer: 0,
        content: 'comment 2',
      },
    ],
  },
  {
    title: 'post2',
    content: 'post content2',
    writer: 1,
    comments: [
      {
        writer: 2,
        content: 'comment 1',
      },
      {
        writer: 0,
        content: 'comment 2',
      },
    ],
  },
];

const _count = {
  user: 0,
  post: 0,
};

const count = new Proxy(_count, {
  get: (target, name) => {
    const storedTarget = target[name];
    target[name] = 0;
    return storedTarget;
  },
});

const users = new Proxy(_users, {
  get: (target, name) => {
    count.user++;
    return target[name];
  },
});

const posts = new Proxy(_posts, {
  get: (target, name) => {
    count.post++;
    return target[name];
  },
});

const getPost = (id) => new Promise((res) => res(JSON.parse(JSON.stringify(posts[id]))));

const getUser = (id) => new Promise((res) => res(JSON.parse(JSON.stringify(users[id]))));

const getUsers = (ids) =>
  new Promise((res) => res(ids.map((id) => JSON.parse(JSON.stringify(users[id])))));

const resolvers = {
  Query: {
    hello: () => 'hello apollo',
    post: async (_, { id }) => {
      const post = await getPost(id);
      post.writer = await getUser(post.writer);
      post.comments = await post.comments.map(async (comment) => ({
        ...comment,
        writer: await getUser(comment.writer),
      }));

      return { ...post, userCount: count.user, postCount: count.post };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
