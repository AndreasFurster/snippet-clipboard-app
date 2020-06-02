import { createReducer } from "@reduxjs/toolkit";
import { EDIT_SNIPPET_BY_ID, ADD_SNIPPET, SEARCH_SNIPPETS, COPY_SNIPPET, SET_EDIT_SNIPPET, UPDATE_SNIPPET } from "../actions";
import copy from 'copy-to-clipboard';

const jlog = (val) => console.log(JSON.parse(JSON.stringify(val)))

const initialState = {
  items: [
    { id: 10, content: 'Snippet 1' },
    { id: 20, content: 'Snippet 2\nWith a newline' },
    { id: 5, content: 'Very long: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.' }
  ],
  originalItems: null,

  editingSnippet: null,
  loadingEditSnippetStatus: 'IDLE',
  updateSnippetStatus: 'IDLE',
  updateSnippetError: null,
};

const editById = (state, action) => {
  return { ...state, loadingEditSnippetStatus: 'test4' }
  console.log('test1')
  return (dispatch) => {
    console.log('test2')

    // let index = state.items.findIndex(item => item.id == action.payload)
    // let item = state.items[index]
    // setTimeout(() => {

    //   dispatch(SET_EDIT_SNIPPET(item))

    // }, 2000)
    // return ({
    //   loadingEditSnippetStatus: 'LOADING'
    // })
    return 'test'
  }
}

const setEdit = (state, action) => {
  return {
    loadingEditSnippetStatus: 'LOADED',
    editingSnippet: action.payload
  }
}

const add = (state, action) => {
  state.items = [...state.items, { id: action.id, content: action.content }];
}

const search = (state, action) => {
  if (!state.originalItems) state.originalItems = state.items

  state.items = state.originalItems.filter(item => item.content.toLowerCase().includes(action.payload.toLowerCase()))
}

const copyContent = (state, action) => {
  const snippet = state.items.filter(item => item.id == action.payload)[0]
  copy(snippet.content)
}

const update = (state, action) => {
  const snippet = action.payload
  jlog(snippet)
  let index = state.items.findIndex(item => item.id == snippet.id)
  state.items[index] = snippet
  jlog(state.items)
}

export default createReducer(initialState, {
  [EDIT_SNIPPET_BY_ID]: editById,
  [ADD_SNIPPET]: add,
  [SEARCH_SNIPPETS]: search,
  [COPY_SNIPPET]: copyContent,
  [SET_EDIT_SNIPPET]: setEdit,
  [UPDATE_SNIPPET]: update,
})

