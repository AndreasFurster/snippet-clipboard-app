import React from "react";
import { Stack, PrimaryButton, TextField, DefaultButton, Dropdown } from 'office-ui-fabric-react';
import { theme } from '../theme'
import MonacoEditor from 'react-monaco-editor'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { fetchSnippets} from '../redux/middleware/api'
import { UPDATE_SNIPPET, EDIT_SNIPPET_BY_ID } from "../redux/actions"

const languages = ['abap', 'apex', 'azcli', 'bat', 'cameligo', 'clojure', 'coffee', 'cpp', 'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go', 'graphql', 'handlebars', 'html', 'ini', 'java', 'javascript', 'json', 'kotlin', 'less', 'lua', 'markdown', 'mips', 'msdax', 'mysql', 'objective-c', 'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'postiats', 'powerquery', 'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift', 'restructuredtext', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell', 'solidity', 'sophia', 'sql', 'st', 'swift', 'tcl', 'twig', 'typescript', 'vb', 'xml', 'yaml']

const titleStyles = {
  root: {
    margin: 20
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

const dropdownStyles = {
  dropdown: { width: 300 }
}

class Component extends React.Component {
  constructor(props) {
    super(props)

    this.id = this.props.match.params.id
  }
  
  componentWillMount() {
    const {fetchSnippets} = this.props;
    let func = fetchSnippets();
    console.log(func);
    
}

  componentDidMount() {
    // this.props.editSnippetById(this.id)
 }

 componentDidUpdate() {
   console.log(this.props);
   
 }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onLanguageChange(value) {
    this.language = value
    this.forceUpdate()
  }

  saveSnippet() {
    const snippet = {
      id: this.id,
      content: this.code,
      language: this.language
    }

    this.props.updateSnippet(snippet)
    this.props.history.push('/')
  }

  render() {
    return (
      <Stack>
        <Stack.Item styles={titleStyles}>
          <h1>Edit snippet</h1>
          <h2>{ this.props.loadingEditSnippetStatus }</h2>
        </Stack.Item>

        { this.props.loadingEditSnippetStatus == 'LOADED' ?
          <> 
            <Stack.Item styles={sectionStyles}>
              <TextField label="Keywords to quickly find a snippet (seperate with a blank line)" multiline autoAdjustHeight/>
            </Stack.Item> 

            <Stack.Item styles={sectionStyles}>
              <Dropdown placeholder="Language"
                label="Select a language"
                styles={dropdownStyles}
                defaultSelectedKey={this.language}
                onChange={(e, val) => this.onLanguageChange(val.key)}
                options={languages.map(lang => ({ key: lang, text: lang}))}
              />
            </Stack.Item>

            <Stack.Item styles={sectionStyles}>
              <p style={{ fontWeight: 600 }}>Snippet</p>
              <MonacoEditor
                height="600"
                language={this.props.editingSnippet.language}
                theme="vs-dark"
                value={this.code}
                options={{ selectOnLineNumbers: true }}
                onChange={(value, e) => this.props.editingSnippet.content = value}
                editorDidMount={this.editorDidMount} />
            </Stack.Item>

            <Stack.Item styles={buttonsStyles}>
              <Stack horizontal tokens={ { childrenGap: 10 } }>
                <PrimaryButton text="Save" onClick={() => this.saveSnippet()} />
                <DefaultButton text="Cancel" onClick={() => this.props.history.push('/')} />
              </Stack>
            </Stack.Item> 
          </> 
        : '' }

      </Stack>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    loadingEditSnippetStatus: state.snippets.loadingEditSnippetStatus,
    editingSnippet: state.snippets.editingItem,
    updateSnippetStatus: state.snippets.updateStatus,
    updateSnippetError: state.snippets.updateError
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSnippets: snippet => fetchSnippets
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Component)