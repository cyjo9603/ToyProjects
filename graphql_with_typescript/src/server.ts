import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';

import schema from './schema';
import { sequelize } from './sequelize/models';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
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

app.use(cors({ origin: true, credentials: true }));
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

app.listen(app.get('port'), () => console.log(`server is running on ${app.get('port')}`));
