import { client } from './client'

export const querySnippetsForIndex = () =>
  client.request(`
    {
      snippets {
        id, name, preview, keywords
      }
    }
  `)

export const querySnippetForEdit = (id) =>
  client.request(`
    query getSnippet($id: String!) {
      singleSnippet(id: $id) {
        id, name, type, keywords, language, content
      }
    }
  `, { id })