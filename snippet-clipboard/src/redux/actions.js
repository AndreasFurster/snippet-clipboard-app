import { createAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router'
import copy from 'copy-to-clipboard';

const axios = require('axios');

export const SEARCH_SNIPPETS = createAction('SEARCH_SNIPPETS');


export const fetchSnippets = () => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPETS', 
    payload: axios.get('https://jsonplaceholder.typicode.com/posts')
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
  copy(snippet.title)
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


