import React from "react";
import { Stack, PrimaryButton, SearchBox } from 'office-ui-fabric-react';
import { theme } from '../theme'
import { connect } from "react-redux";
import SnippetList from '../components/index/SnippetList'
import { fetchSnippets, addSnippet } from "../redux/actions";

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
  constructor(props) {
    super(props)

    this.state = {
      filteredSnippets: null
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSnippets())
  }

  filterSnippets(query) {
    this.setState({
      filteredSnippets: !this.props.snippets ? null : this.props.snippets.filter(s => {
        if(s.name && s.name.includes(query)) return true;
        if(s.preview && s.preview.includes(query)) return true;
        if(s.keywords && s.keywords.includes(query)) return true;

        return false
      })
    })
  }

  render() {
    const { isPending, snippets, dispatch } = this.props
    const filteredSnippets = this.state.filteredSnippets ?? snippets

    return (
      <Stack tokens={stackTokens}>
        <Stack.Item styles={contentStyles}>
          <Stack horizontal>
            <Stack.Item grow>
              <h1>Snippet Clipboard</h1>
            </Stack.Item>
            <Stack.Item align="center">
              <PrimaryButton iconProps={addIcon} text="Add" onClick={() => dispatch(addSnippet())} />
            </Stack.Item>
          </Stack>
        </Stack.Item>
        <Stack.Item styles={contentStyles}>
          <SearchBox placeholder="Search" onChange={(e) => this.filterSnippets(e.currentTarget.value)} />
        </Stack.Item>
        <Stack.Item grow styles={fullWidthContentStyles}>
          { isPending ? <h2 style={ { marginLeft: 15 } }>Loading...</h2> : <SnippetList snippets={filteredSnippets} /> }
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