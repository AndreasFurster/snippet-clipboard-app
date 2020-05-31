import React from "react";
import Navigation from './Navigation'
import Routes from './Routes'

import { Stack } from 'office-ui-fabric-react';


export default function () {
  
  return (
    <Stack>
      <Navigation />
      <Routes />
    </Stack>
  )
}