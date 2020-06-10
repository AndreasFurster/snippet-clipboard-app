import { gql } from "apollo-boost";
import { client } from './client'

export const querySnippetsForIndex = () => 
  client.query({
      query: gql`
        {
          snippets {
            id, preview
          }
        }
      `
    })

export const querySnippetForEdit = (id) => 
  client.query({
      query: gql`
        {
          singleSnippet(id: "${id}") {
            id, content
          }
        }
      `
    })