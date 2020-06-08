import { createReducer } from "@reduxjs/toolkit";
import { ActionType } from 'redux-promise-middleware';

const initialState = {
  allItems: [
    // { id: 10, content: 'Snippet 1' },
    // { id: 20, content: 'Snippet 2\nWith a newline' },
    // { id: 5, content: 'Very long: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fuga nulla necessitatibus quod explicabo odit ipsam labore eligendi minima perferendis dolores libero pariatur nisi, impedit quisquam a dignissimos.' }
  ],
  selectedItem: null,
  originalItems: null,
  isPending: true,
  error: null
};

const fetchSnippetsPending = (state, action) => ({
  ...state,
  error: null,
  isPending: true,
  allItems: null
})

const fetchSnippetsFulfilled = (state, action) => ({
  ...state,
  isPending: false,
  allItems: action.payload.data.snippets
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
  selectedItem: action.payload.data.singleSnippet,
  isPending: false,
})

const fetchSnippetRejected = (state, action) => ({
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

  [`BEFORE_EDIT_SNIPPET`] : beforeEditSnippet
})

