import { createAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router'
import copy from 'copy-to-clipboard';
import { querySnippetsForIndex, querySnippetForEdit } from "./graphql/queries";
import { updateSnippetMutation } from "./graphql/mutations";

const axios = require('axios');

export const SEARCH_SNIPPETS = createAction('SEARCH_SNIPPETS');


export const fetchSnippets = () => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPETS', 
    payload: querySnippetsForIndex()
  })
}

export const addSnippet = () => dispatch => {
  dispatch(push(`/snippets/new`))
}

export const editSnippet = id => dispatch => {
  dispatch({ 'type': 'BEFORE_EDIT_SNIPPET' })
  dispatch(push(`/snippets/${id}/edit`))
}

export const copySnippet = snippet => dispatch => {
  // TODO: Request & copy content instead of preview
  copy(snippet.preview)
}

export const fetchSnippet = id => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPET',
    payload: querySnippetForEdit(id)
  })
}

export const saveEdit = snippet => dispatch => {
  let mutation = updateSnippetMutation
  console.log(mutation);
  
  dispatch({
    'type': 'UPDATE_SNIPPET',
    payload: axios.patch(`https://jsonplaceholder.typicode.com/posts/${snippet.id}`, snippet)
  })
}

export const cancelEdit = () => dispatch => {
  dispatch(push(`/`))
}


