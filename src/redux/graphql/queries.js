import { Client } from './client'

export const querySnippetsForIndex = () => Client.getInstance().request(`
    {
      snippets {
        id, name, preview, keywords
      }
    }
  `)

export const querySnippetForCopy = id => Client.getInstance().request(`
  query getSnippet($id: String!) {
    singleSnippet(id: $id) {
      content
    }
  }
`, { id })

export const querySnippetForEdit = id => Client.getInstance().request(`
  query getSnippet($id: String!) {
    singleSnippet(id: $id) {
      id, name, type, keywords, language, content
    }
  }
`, { id })