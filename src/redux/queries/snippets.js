import { gql } from "apollo-boost";
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_HOST,
});

export const getSnippetsForIndex = () => 
  client.query({
      query: gql`
        {
          snippets {
            id, preview
          }
        }
      `
    })

export const getSnippetForEdit = (id) => 
  client.query({
      query: gql`
        {
          singleSnippet(id: "${id}") {
            id, content
          }
        }
      `
    })