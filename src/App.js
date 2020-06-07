import React from "react";
import Routes from './Routes'
import { Stack } from 'office-ui-fabric-react';

export default class Component extends React.Component {
  render() {
    return (
      <Stack>
        {/* <Navigation /> */}
        <Routes />
      </Stack>
    )
  }
}
