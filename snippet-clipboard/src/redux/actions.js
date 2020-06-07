import { createAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router'

const axios = require('axios');

export const EDIT_SNIPPET_BY_ID = createAction('EDIT_SNIPPET_BY_ID');
export const ADD_SNIPPET = createAction('ADD_SNIPPET');
export const COPY_SNIPPET = createAction('COPY_SNIPPET');
export const SEARCH_SNIPPETS = createAction('SEARCH_SNIPPETS');
export const SET_EDIT_SNIPPET = createAction('SET_EDIT_SNIPPET');
export const UPDATE_SNIPPET = createAction('UPDATE_SNIPPET');

export const fetchSnippets = () => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPETS', 
    payload: axios.get('https://jsonplaceholder.typicode.com/posts')
  })
}

export const editSnippet = id => dispatch => {
  dispatch({ 'type': 'BEFORE_EDIT_SNIPPET' })
  dispatch(push(`/snippets/${id}/edit`))
}

export const fetchSnippet = id => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPET',
    payload: axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  })
}

export const saveEdit = snippet => dispatch => {
  dispatch({
    'type': 'UPDATE_SNIPPET',
    payload: axios.patch(`https://jsonplaceholder.typicode.com/posts/${snippet.id}`, snippet)
  })
}

export const cancelEdit = () => dispatch => {
  dispatch(push(`/`))
}


