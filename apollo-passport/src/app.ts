import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import logger from 'morgan';

import schema from './schema';

const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public app;
  private apollo;

  constructor() {
    this.app = express();
    this.apollo = new ApolloServer({ schema });
    this.middlewares();
  }

  middlewares() {
    this.app.use(logger('dev'));
    this.apollo.applyMiddleware({
      app: this.app,
      path: GRAPHQL_ENDPOINT,
    });
  }
}

export default new App().app;
