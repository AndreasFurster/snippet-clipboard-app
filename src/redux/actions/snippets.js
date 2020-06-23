import { createAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router'
import copy from 'copy-to-clipboard';
import { querySnippetsForIndex, querySnippetForEdit, querySnippetForCopy } from "../graphql/queries";
import { updateSnippetMutation, createSnippetMutation, deleteSnippetMutation } from "../graphql/mutations";
import { createErrorNotification } from "./notifications";
import { isPending } from './helpers'

export const SEARCH_SNIPPETS = createAction('SEARCH_SNIPPETS');

export const fetchSnippets = () => dispatch => {
  dispatch(isPending('SNIPPETS', true))

  querySnippetsForIndex().then(result => {
    dispatch({
      'type': 'FETCH_SNIPPETS_FULFILLED', 
      payload: result.snippets,
    })
  }).catch(error => {
    dispatch(createErrorNotification(error))
  }).finally(() => {
    dispatch(isPending('SNIPPETS', false))
  })
}

export const addSnippet = () => dispatch => {
  dispatch({
    'type': 'ADD_SNIPPET',
    payload: createSnippetMutation()
  })
}

export const editSnippet = id => dispatch => {
  dispatch({ 'type': 'BEFORE_EDIT_SNIPPET' })
  dispatch(push(`/snippets/${id}/edit`))
}

export const copySnippet = snippet => dispatch => {
  querySnippetForCopy(snippet.id).then(result => {
    copy(result.singleSnippet.content)
  })
}

export const fetchSnippet = id => dispatch => {
  dispatch({
    'type': 'FETCH_SNIPPET',
    payload: querySnippetForEdit(id)
  })
}

export const deleteSnippet = id => dispatch => {
  dispatch({
    'type': 'DELETE_SNIPPET',
    payload: deleteSnippetMutation(id)
  })
}

export const saveEdit = snippet => dispatch => {
  const { id, ...variables } = snippet

  dispatch({
    'type': 'UPDATE_SNIPPET',
    payload: updateSnippetMutation(id, variables)
  })
}

export const cancelEdit = () => dispatch => {
  dispatch(push(`/`))
}


