import { createReducer } from "@reduxjs/toolkit";
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  allItems: [ ],
  selectedItem: null,
  originalItems: null,
  isPending: true,
  error: null
};

const addSnippetPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  allItems: null
})

const addSnippetFulfilled = (state, action) => {
  const id = action.payload.createItem.id
  window.location = (`/snippets/${id}/edit`)
}

const addSnippetRejected = (state, action) => ({
  ...state,
  isPending: false,
  error: action.payload,
  allItems: []
})

const fetchSnippetsPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  allItems: null
})

const fetchSnippetsFulfilled = (state, action) => ({
  ...state,
  isPending: false,
  allItems: action.payload.snippets
})

const fetchSnippetsRejected = (state, action) => ({
  ...state,
  isPending: false,
  error: action.payload,
  allItems: []
})

const beforeEditSnippet = (state, action) => ({
  ...state,
  isPending: true,
  selectedItem: null,
  error: null
})

const fetchSnippetPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  selectedItem: null
})

const fetchSnippetFulfilled = (state, action) => ({
  ...state,
  selectedItem: action.payload.singleSnippet,
  isPending: false,
})

const fetchSnippetRejected = (state, action) => ({
  ...state,
  isPending: false,
  error: action.payload,
  selectedItem: null
})

const updateSnippetPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  selectedItem: null
})

const updateSnippetFulfilled = (state, action) => {
  window.location = (`/snippets`)
}

const updateSnippetRejected = (state, action) => ({
  ...state,
  isPending: false,
  error: action.payload,
  selectedItem: null
})

const deleteSnippetPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  selectedItem: null
})

const deleteSnippetFulfilled = (state, action) => {
  const id = action.payload.deleteItem.id
  const items = state.allItems.filter(i => i.id !== id)
  
  return {
    ...state,
    isPending: false,
    error: null,
    allItems: items
  }
}

const deleteSnippetRejected = (state, action) => ({
  ...state,
  isPending: false,
  error: action.payload,
  selectedItem: null
})

export default createReducer(initialState, {
  [`FETCH_SNIPPETS_${ActionType.Pending}`] : fetchSnippetsPending,
  [`FETCH_SNIPPETS_${ActionType.Fulfilled}`] : fetchSnippetsFulfilled,
  [`FETCH_SNIPPETS_${ActionType.Rejected}`] : fetchSnippetsRejected,

  [`FETCH_SNIPPET_${ActionType.Pending}`] : fetchSnippetPending,
  [`FETCH_SNIPPET_${ActionType.Fulfilled}`] : fetchSnippetFulfilled,
  [`FETCH_SNIPPET_${ActionType.Rejected}`] : fetchSnippetRejected,

  [`ADD_SNIPPET_${ActionType.Pending}`] : addSnippetPending,
  [`ADD_SNIPPET_${ActionType.Fulfilled}`] : addSnippetFulfilled,
  [`ADD_SNIPPET_${ActionType.Rejected}`] : addSnippetRejected,

  [`UPDATE_SNIPPET_${ActionType.Pending}`] : updateSnippetPending,
  [`UPDATE_SNIPPET_${ActionType.Fulfilled}`] : updateSnippetFulfilled,
  [`UPDATE_SNIPPET_${ActionType.Rejected}`] : updateSnippetRejected,

  [`DELETE_SNIPPET_${ActionType.Pending}`] : deleteSnippetPending,
  [`DELETE_SNIPPET_${ActionType.Fulfilled}`] : deleteSnippetFulfilled,
  [`DELETE_SNIPPET_${ActionType.Rejected}`] : deleteSnippetRejected,

  [`BEFORE_EDIT_SNIPPET`] : beforeEditSnippet
})

