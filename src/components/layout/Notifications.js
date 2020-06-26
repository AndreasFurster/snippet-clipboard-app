import React from "react";
import { connect } from "react-redux";
import { Stack, MessageBar } from 'office-ui-fabric-react';
import NotificationMessageBar from "./NotificationMessageBar";

const stackTokens = {
  childrenGap: 10,
  padding: 20,
  position: 'fixed',
}

class Component extends React.Component {
  render() {
    const { notifications } = this.props
    return (
      <Stack tokens={stackTokens}>
        { notifications.map((notification) => <NotificationMessageBar notification={notification} />) }
      </Stack>
    )
  }
}

const mapStateToProps = (state) => ({ 
  notifications: state.notifications.activeNotifications
})

export default connect(mapStateToProps, null)(Component)

