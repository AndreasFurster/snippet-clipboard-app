import React from "react";
import { Stack, PrimaryButton } from 'office-ui-fabric-react';
import { theme } from '../theme'
import Searchbar from '../components/index/Searchbar'
import SnippetList from '../components/index/SnippetList'

const stackTokens = {
  childrenGap: 10
}

const contentStyles = {
  root: {
    margin: 20
  }
}

const fullWidthContentStyles = {
  root: {
    background: theme.palette.neutralLighterAlt
  }
}

const addIcon = { iconName: 'Add' };

export default class Component extends React.Component {
  render() {
    return (
      <Stack tokens={stackTokens}>
        <Stack.Item styles={contentStyles}>
          <Stack horizontal>
            <Stack.Item grow>
              <h1>Snippet Clipboard</h1>
            </Stack.Item>
            <Stack.Item align="center">
              <PrimaryButton iconProps={addIcon} text="Add" onClick={() => this.props.history.push(`/snippets/add`)} />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item styles={contentStyles}>
          <Searchbar/>
        </Stack.Item>
        <Stack.Item grow styles={fullWidthContentStyles}>
          <SnippetList page={this} />
        </Stack.Item>
      </Stack>
    )
  }
}