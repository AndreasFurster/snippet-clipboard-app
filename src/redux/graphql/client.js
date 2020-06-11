import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(
  process.env.REACT_APP_API_HOST,
  { }
);