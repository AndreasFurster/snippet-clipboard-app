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
    const { snippets } = this.props
    return (
      <Stack tokens={stackTokens}>
        { snippets.map((snippet) => <SnippetListItem snippet={snippet} key={snippet.id} />) }
      </Stack>
    )
  }
}

export default connect(null, null)(Component)

