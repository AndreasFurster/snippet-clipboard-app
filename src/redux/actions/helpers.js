export const isPending = (name, status) => dispatch => {
  dispatch({
    'type': `${name}_PENDING`,
    payload: status
  })
}