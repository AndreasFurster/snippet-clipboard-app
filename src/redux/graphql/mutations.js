import { Client } from './client'

export const createSnippetMutation = () => Client.getInstance().request(`
  mutation {
    createItem { id }
  }
`)

export const updateSnippetMutation = (id, input) => Client.getInstance().request(`
  mutation updateItem($id: String!, $input: SnippetInput!) {
    updateItem(id: $id, input: $input) {
      id
    }
  }
`, { id, input })

export const deleteSnippetMutation = id => Client.getInstance().request(`
  mutation deleteItem($id: String!) {
    deleteItem(id: $id) { 
      id
    }
  }
`, { id })