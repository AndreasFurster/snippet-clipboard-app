import { SET_EDIT_SNIPPET } from "../actions"

export default function fetchSnippets() {
  return dispatch => {
    dispatch(SET_EDIT_SNIPPET, 'snippet')
    return 'okeee roy'
  }
}