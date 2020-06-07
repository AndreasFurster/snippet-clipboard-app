import React from "react";
import { Stack, PrimaryButton } from 'office-ui-fabric-react';
import { theme } from '../theme'
import { connect } from "react-redux";
import Searchbar from '../components/index/Searchbar'
import SnippetList from '../components/index/SnippetList'
import { fetchSnippets } from "../redux/actions";

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

class Component extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSnippets())
  }

  render() {
    const { isPending, error, snippets } = this.props

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
          { isPending ? <h2>Loading...</h2> : <SnippetList snippets={snippets} /> }
        </Stack.Item>
      </Stack>
    )
  }
}

const mapStateToProps = (state) => ({ 
  snippets: state.snippets.allItems,
  isPending: state.snippets.isPending,
  error: state.snippets.error,
})

export default connect(mapStateToProps, null)(Component)