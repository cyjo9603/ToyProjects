import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import logger from 'morgan';

import passportInit from '@auth/passport';
import schema from './schema';

const GRAPHQL_ENDPOINT = '/graphql';

class App {
  public app;
  private apollo;

  constructor() {
    this.app = express();
    this.apollo = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
    });
    this.middlewares();
  }

  middlewares() {
    this.app.use(logger('dev'));
    passportInit();
    this.apollo.applyMiddleware({
      app: this.app,
      path: GRAPHQL_ENDPOINT,
    });
  }
}

export default new App().app;
