import { ApolloServer } from 'apollo-server-express';
import express, { Express } from 'express';
import logger from 'morgan';

import resolvers from './resolvers';
import typeDefs from './schemas';

const GRAPHQL_ENDPOINT = '/graphql' as const;

class App {
  public app: Express;
  private server: ApolloServer;

  constructor() {
    this.app = express();
    this.server = new ApolloServer({ typeDefs, resolvers });
    this.middlewares();
  }

  private middlewares() {
    this.app.use(logger('dev'));
    this.server.applyMiddleware({ app: this.app, path: GRAPHQL_ENDPOINT });
  }
}

export default new App().app;
