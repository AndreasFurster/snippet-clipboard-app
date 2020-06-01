import React from "react";
import { connect } from "react-redux";
import { Stack } from 'office-ui-fabric-react';
import SnippetListItem from "./SnippetListItem";


const stackTokens = {
  childrenGap: 10,
  padding: 20
}

class Component extends React.Component {
  render() {
      return (
        <Stack tokens={stackTokens}>
          {this.props.snippets.map((snippet) => <SnippetListItem snippet={snippet} key={snippet.id} page={this.props.page}/>)}
        </Stack>
      )
  }
}

const mapStateToProps = (state) => ({ 
  snippets: state.snippets.items
})

export default connect(mapStateToProps, null)(Component)

