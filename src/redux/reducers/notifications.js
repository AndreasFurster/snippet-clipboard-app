import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  activeNotifications: [ 
    {
      'message': 'Example',
      'type': 'info'
    },
    {
      'message': 'Example',
      'type': 'error'
    } 
  ]
};

const pushNotification = (state, action) => {
  let notification = action.payload
  notification.id = generateId()

  return {
    ...state,
    activeNotifications: [...state.activeNotifications, notification]
  }
}

const closeNotification = (state, action) => ({
  ...state,
  activeNotifications: state.activeNotifications.filter(n => n.id !== action.payload)
})

const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export default createReducer(initialState, {
 'PUSH_NOTIFICATION' : pushNotification,
 'CLOSE_NOTIFICATION' : closeNotification,
})

