import { SET_EDIT_SNIPPET } from "../actions"

export const fetchSnippets = ()  => {
  console.log('func 1');
  
  return dispatch => {
    console.log('func 2');
    dispatch(SET_EDIT_SNIPPET, 'snippet')
    return 'okeee roy'
  }
}