import React from "react";
import { Stack, PrimaryButton, TextField, DefaultButton } from 'office-ui-fabric-react';
import { theme } from '../theme'
import MonacoEditor from 'react-monaco-editor';

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

export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.id = this.props.match.params.id
    this.state = {
      code: '// type your code...',
    }
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };

    return (
      <Stack>
        <Stack.Item styles={titleStyles}>
          <h1>Edit snippet</h1>
        </Stack.Item>

        <Stack.Item styles={sectionStyles}>
          <TextField label="Keywords to quickly find a snippet (seperate with a blank line)" multiline autoAdjustHeight/>
        </Stack.Item>
        
        <Stack.Item styles={sectionStyles}>
          {/* <TextField label="Snippet content" multiline autoAdjustHeight/> */}
          <MonacoEditor
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
                      
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