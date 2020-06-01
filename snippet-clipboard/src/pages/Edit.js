import React from "react";
import { Stack, PrimaryButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { theme } from '../theme'


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

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
  }
  
  render() {
    return (
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
            <DefaultButton text="Cancel" onClick={() => this.props.history.push('/')} />
          </Stack>
        </Stack.Item>

      </Stack>
    )
  }
}