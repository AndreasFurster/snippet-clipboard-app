import { createReducer } from "@reduxjs/toolkit";
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  allItems: null,
  selectedItem: null,
  originalItems: null,
  isPending: true,
};

const snippetsPending = (state, action) => ({
  ...state,
  isPending: action.payload,
})

const addSnippetFulfilled = (state, action) => {
  const id = action.payload.createItem.id
  window.location = (`/snippets/${id}/edit`)
}

const fetchSnippetsFulfilled = (state, action) => {
  return {
    ...state,
    allItems: action.payload
  }
}

const beforeEditSnippet = (state, action) => ({
  ...state,
  isPending: action.payload,
})

const fetchSnippetFulfilled = (state, action) => ({
  ...state,
  selectedItem: action.payload.singleSnippet,
})

const updateSnippetFulfilled = (state, action) => {
  window.location = (`/snippets`)
}

const deleteSnippetFulfilled = (state, action) => {
  const id = action.payload.deleteItem.id
  const items = state.allItems.filter(i => i.id !== id)

  return {
    ...state,

    error: null,
    allItems: items
  }
}


export default createReducer(initialState, {
  [`SNIPPETS_${ActionType.Pending}`]: snippetsPending,

  [`FETCH_SNIPPETS_${ActionType.Fulfilled}`]: fetchSnippetsFulfilled,
  [`FETCH_SNIPPET_${ActionType.Fulfilled}`]: fetchSnippetFulfilled,
  [`ADD_SNIPPET_${ActionType.Fulfilled}`]: addSnippetFulfilled,
  [`UPDATE_SNIPPET_${ActionType.Fulfilled}`]: updateSnippetFulfilled,
  [`DELETE_SNIPPET_${ActionType.Fulfilled}`]: deleteSnippetFulfilled,

  [`BEFORE_EDIT_SNIPPET`]: beforeEditSnippet
})

