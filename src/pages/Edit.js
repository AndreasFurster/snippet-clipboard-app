import React from "react";
import { Stack, PrimaryButton, TextField, DefaultButton, Dropdown, ChoiceGroup } from 'office-ui-fabric-react';
import { theme } from '../theme'
import MonacoEditor from 'react-monaco-editor'
import { connect } from "react-redux"
import { fetchSnippet, saveEdit, cancelEdit } from "../redux/actions";

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

const snippetTypeOptions = [
  { key: 'text', text: 'Text', iconProps: { iconName: 'InsertTextBox' } },
  { key: 'code', text: 'Code', iconProps: { iconName: 'Code' }, disabled: true },
  { key: 'image', text: 'Image', iconProps: { iconName: 'Photo2' }, disabled: true },
];

class Component extends React.Component {
  constructor(props) {
    super(props)

    this.id = this.props.match.params.id
    this.state = {
      error: false,
      error_messages: [],
      id: this.id,
      name: null,
      type: null,
      keywords: null,
      content: null,
      language: null,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSnippet(this.id))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Don't change anything if ID is not changed
    if (!nextProps.editingSnippet || nextProps.editingSnippet.content === prevState.content) return null;
    
    // Update state to new editingSnippet
    return {
      ...nextProps.editingSnippet,
      textContent: nextProps.editingSnippet.content
    }
  }

  validateRequiredField(name, value) {
    if(!value) {
      return { error: true, error_message: `The field ${name} is required.` }
    }

    return { error: false }
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onLanguageChange(value) {
    this.setState({ language: value })
    this.forceUpdate()
  }

  saveEdit() {
    // Extract from state
    const { id, name, type, keywords, language, textContent } = this.state

    const validateName = this.validateRequiredField('name', name)
    const validateTextContent = this.validateRequiredField('textContent', textContent)

    const error = validateName.error || validateTextContent.error
    
    if(error) {
      this.setState({ error: true, error_messages: {'name': validateName.error_message, 'content': validateTextContent.error_message }})
    }
    else {
      // Create object with same keys
      const snippet = { id, name, type, keywords, language, content: textContent }

      this.props.dispatch(saveEdit(snippet))
    }
  }

  cancelEdit() {
    this.props.dispatch(cancelEdit())
  }

  getTypeSpecificComponents() {
    const { type, content, language, error_messages } = this.state

    switch (type) {
      case 'text':
        return <>
          <Stack.Item styles={sectionStyles}>
            <TextField 
              label="Content" 
              multiline 
              autoAdjustHeight 
              onChange={(e, value) => this.setState({ textContent: value })}
              required
              defaultValue={content}
              errorMessage={error_messages['content']} />
          </Stack.Item>
        </>

      case 'code':
        return <>
          <Stack.Item styles={sectionStyles}>
            <Dropdown placeholder="Language"
              label="Select a language"
              styles={dropdownStyles}
              defaultSelectedKey={language}
              errorMessage={error_messages['language']}
              onChange={(e, val) => console.log({ language: val.key }) }
              options={languages.map(lang => ({ key: lang, text: lang }))}
            />
          </Stack.Item>

          <Stack.Item styles={sectionStyles}>
            <p style={{ fontWeight: 600 }}>Snippet</p>
            <MonacoEditor
              height="600"
              language={language}
              theme="vs-dark"
              defaultValue={content}
              options={{ selectOnLineNumbers: true }}
              onChange={(value, e) => this.setState({ content: value })}
              editorDidMount={this.editorDidMount} 
              required />
          </Stack.Item>
        </>

      case 'image':
        return <></>
    
      default:
        return <></>
    }
  }

  render() {
    const { isPending } = this.props
    const { type, name, error_messages, content, keywords } = this.state
    
    console.log(content);
    

    return (
      <Stack>
        <Stack.Item styles={titleStyles}>
          <h1>Edit snippet</h1>
        </Stack.Item>

        {isPending ? <Stack.Item styles={sectionStyles}><h2>Loading...</h2></Stack.Item> :
          <>
            <Stack.Item styles={sectionStyles}>
              <TextField 
                label="Name" 
                defaultValue={name} 
                errorMessage={error_messages['name']}
                onChange={(e, val) => this.setState({ name: val })} 
                required />
            </Stack.Item>

            <Stack.Item styles={sectionStyles}>
              <TextField 
              label="Keywords (for quick search)" 
              multiline
              defaultValue={keywords}
              errorMessage={error_messages['keywords']}
              onChange={(e, val) => this.setState({ keywords: val })} 
              autoAdjustHeight />
            </Stack.Item>

            <Stack.Item styles={sectionStyles}>
              <ChoiceGroup 
                label="Type" 
                value={type}
                errorMessage={error_messages['type']}
                defaultSelectedKey={type}
                onChange={(e, val) => this.setState({ type: val.key })}
                options={snippetTypeOptions} 
                required />
            </Stack.Item>

            {this.getTypeSpecificComponents()}

            <Stack.Item styles={buttonsStyles}>
              <Stack horizontal tokens={{ childrenGap: 10 }}>
                <PrimaryButton text="Save" onClick={() => this.saveEdit()} />
                <DefaultButton text="Cancel" onClick={() => this.cancelEdit()} />
              </Stack>
            </Stack.Item>
          </>
        }

      </Stack>
    )
  }
}

function mapStateToProps(state) {
  return {
    isPending: state.snippets.isPending,
    error: state.snippets.error,
    editingSnippet: state.snippets.selectedItem,
  }
}


export default connect(mapStateToProps, null)(Component) 