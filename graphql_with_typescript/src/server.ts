import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import schema from './schema';
import { sequelize } from './sequelize/models';

dotenv.config();

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: async ({ req }) => {
    const token = req.headers.authorization;
    if (token) {
      const { id }: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
      return { id };
    }
  },
});

app.set('port', 8000);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db connect success');
  })
  .catch((err: Error) => {
    console.error(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

app.listen(app.get('port'), () => console.log(`server is running on ${app.get('port')}`));
