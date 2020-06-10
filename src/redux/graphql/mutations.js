import { gql } from "apollo-boost";


export const updateSnippetMutation = gql`
    mutation updateItem($id: String!, $input: SnippetInput) {
      updateItem(id: $id, input: $input) {
      name, content, id
    }
  }
`