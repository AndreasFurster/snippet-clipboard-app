import React from "react";
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { connect } from "react-redux";
import { SEARCH_SNIPPETS } from "../../redux/actions";

class Component extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <SearchBox placeholder="Search" 
        onChange={(e) => this.props.searchSnippets(e.currentTarget.value)} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchSnippets: text => dispatch(SEARCH_SNIPPETS(text))
})


export default connect(null, mapDispatchToProps)(Component)
