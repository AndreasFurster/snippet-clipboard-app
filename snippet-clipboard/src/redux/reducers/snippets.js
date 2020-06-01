import { createReducer } from "@reduxjs/toolkit";
import { ADD_SNIPPET, SEARCH_SNIPPETS, CLICK_SNIPPET } from "../actions";
import copy from 'copy-to-clipboard';

const initialState = {
  items: [
    { id: 10, content: 'Snippet 1'},
    { id: 20, content: 'Snippet 2\nWith a newline'},
    { id: 5, content: 'Very long: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.'}
  ],
  originalItems: null
};

const addSnippet = (state, action) => {
  state.items = [ ...state.items, { id: action.id, content: action.content }];
}

const searchSnippets = (state, action) => {
  if(!state.originalItems) state.originalItems = state.items

  state.items = state.originalItems.filter(item => item.content.toLowerCase().includes(action.payload.toLowerCase()))
}

const clickSnippet = (state, action) => {
  const snippet = state.items.filter(item => item.id == action.payload)[0]
  copy(snippet.content)
}

export default createReducer(initialState, {
  [ADD_SNIPPET]: addSnippet,
  [SEARCH_SNIPPETS]: searchSnippets,
  [CLICK_SNIPPET]: clickSnippet,
})

