import { client } from './client'

export const createSnippetMutation = () => client.request(`
  mutation {
    createItem { id }
  }
  `)

export const updateSnippetMutation = (id, input) => client.request(`
    mutation updateItem($id: String!, $input: SnippetInput!) {
      updateItem(id: $id, input: $input) {
        id
      }
    }
`, { id, input })

export const deleteSnippetMutation = (id) => client.request(`
mutation deleteItem($id: String!) {
  deleteItem(id: $id) { 
    id
  }
}
`, { id })