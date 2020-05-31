import React from "react";
import { Stack, TextField, PrimaryButton, DefaultButton } from 'office-ui-fabric-react';
import { theme } from '../theme'
import Navigation from '../components/index/Navigation'
// import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

// import Breadcrumb from "../components/index/Breadcrumb";

console.log(theme);

// const outerStackTokens = {
//   padding: 10,
//   childrenGap: 20
// }

const stackTokens = {
  childrenGap: 10
}

const sidebarStyles = {
  root: {
    minWidth: 150,
  }
}

const contentStyles = {
  root: {
    background: theme.palette.neutralLighter
  }
}

const sectionStyles = {
  root: {
    boxShadow: theme.effects.elevation4,
    background: 'white',
    padding: 20,
    margin: 20
  }
}

const buttonsStyles = {
  root: {
    margin: 20
  }
}

export default function () {
  return (

    <Stack horizontal tokens={stackTokens}>
      <Stack.Item grow={1} styles={sidebarStyles}>
        <Navigation />
      </Stack.Item>
      <Stack.Item grow={10} styles={contentStyles}>
        
        <Stack>
          
          <Stack.Item styles={sectionStyles}>
            <TextField label="Standard" />
          </Stack.Item>
          
          <Stack.Item styles={sectionStyles}>
            <TextField label="Field 2" />
          </Stack.Item>

          <Stack.Item styles={buttonsStyles}>
            <Stack horizontal tokens={ { childrenGap: 10 } }>
              <PrimaryButton text="Save" />
              <DefaultButton text="Cancel" />
            </Stack>
          </Stack.Item>

        </Stack>

      </Stack.Item>
      <Stack.Item grow={1} styles={sidebarStyles}>
        <strong>On this page</strong>
      </Stack.Item>
    </Stack>
  )
}