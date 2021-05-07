import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

/**
* Do a graph request
* @param {string} url: String Url to do the graph_request
* @param {string} query: String Query to use for the request
*/
export const graph_request = ({ url, query }) => {
  const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache()
  });
  return client.query({
    query: gql(query)
  })
  .then(res => res.data)
}
