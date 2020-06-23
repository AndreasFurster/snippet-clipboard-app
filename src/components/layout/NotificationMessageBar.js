import React from "react";
import { connect } from "react-redux";
import { MessageBar } from 'office-ui-fabric-react';

const messageBarTypes = {
  'info': 0,
  'error': 1,
  'blocked': 2,
  'severeWarning': 3,
  'success': 4,
  'warning': 5,
}

class Component extends React.Component {
  render() {
    const { notification } = this.props

    const messageBarType = messageBarTypes[notification.type] 
    if(typeof messageBarType === 'undefined') throw new Error(`Notification type unknown: ${notification.type}`)

    return <MessageBar
      messageBarType={ messageBarType }
      dismissButtonAriaLabel="Close"
      onDismiss={console.log}> {notification.message} </MessageBar>

  }
}

export default connect(null, null)(Component)

