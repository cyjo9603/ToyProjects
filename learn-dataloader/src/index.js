const { ApolloServer, gql } = require('apollo-server');
const DataLoader = require('dataloader');

const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  type Comment {
    writer: User
    content: String
  }

  type Count {
    user: Int
    post: Int
  }

  type Post {
    title: String
    content: String
    writer: User
    comments: [Comment]
    count: Count
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

const count = {
  user: 0,
  post: 0,
  init() {
    this.user = 0;
    this.post = 0;
  },
};

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

const batchGetUsers = async (ids) => {
  const users = getUsers(ids);
  return users;
};

const userLoader = new DataLoader(batchGetUsers);

const getPost = (id) => new Promise((res) => res(JSON.parse(JSON.stringify(posts[id]))));

const getUser = (id) => new Promise((res) => res(JSON.parse(JSON.stringify(users[id]))));

const getUsers = (ids) => {
  return new Promise((res) => res(ids.map((id) => JSON.parse(JSON.stringify(users[id])))));
};

const resolvers = {
  Query: {
    hello: () => 'hello apollo',
    post: async (_, { id }) => {
      const post = await getPost(id);
      post.writer = await userLoader.load(post.writer);
      for (let i = 0; i < post.comments.length; i++) {
        post.comments[i].writer = await userLoader.load(post.comments[i].writer);
      }

      const copiedCount = { ...count };
      count.init();

      return { ...post, count: copiedCount };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));
