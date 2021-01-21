import { ApolloProvider } from '@apollo/client';

import client from './apollo';

const App = () => <ApolloProvider client={client}>Init</ApolloProvider>;

export default App;
