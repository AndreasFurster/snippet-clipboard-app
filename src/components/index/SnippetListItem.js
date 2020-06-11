import React from "react"
import { connect } from "react-redux"
import { Stack, IconButton } from 'office-ui-fabric-react'
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu'
import { editSnippet, copySnippet, deleteSnippet } from "../../redux/actions"
import { theme } from '../../theme'

const snippetStyles = {
  root: {
    background: 'white',
    minHeight: 50,
    maxHeight: 100,
    whiteSpace: 'pre-line',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}

const snippetHoverStyles = {
  root: {
    outline: `2px solid ${theme.palette.neutralTertiary}`
  }
}

const snippetActiveStyles = {
  root: {
    outline: `2px solid ${theme.palette.themePrimary}`
  }
}

const contentStyles = {
  root: {
    padding: 10
  }
}

const menuIcon = { iconName: 'More', color: 'blue' };

const buildMenuProps = (dispatch, id) => ({
  items: [
    {
      key: 'edit',
      text: 'Edit',
      onClick: () => dispatch(editSnippet(id)),
      iconProps: {
        iconName: 'Edit',
      }
    },
    {
      key: 'pin',
      text: 'Pin',
      onClick: (x) => console.log('Pin', x),
      iconProps: {
        iconName: 'Pin',
      }
    },
    {
      key: 'divider_1',
      itemType: ContextualMenuItemType.Divider,
    },
    {
      key: 'delete',
      text: 'Delete',
      onClick: () => dispatch(deleteSnippet(id)),
      iconProps: {
        iconName: 'Delete',
      }
    }
  ]
});


class Component extends React.Component {
  constructor(props) {
    super(props)
    const { dispatch } = this.props

    this.snippetStyles = snippetStyles
    this.menuProps = buildMenuProps(dispatch, this.props.snippet.id)
  }

  openMenu(e) {
    e.preventDefault()
    
    // Manually click the menu button, since there is no prop to control the open state
    e.currentTarget
      .parentElement
      .parentElement
      .getElementsByClassName('menu-button')[0]
      .click()
  }
  
  setHover(hover) {
    if (hover) {
      this.snippetStyles = { root: { ...snippetStyles.root, ...snippetHoverStyles.root } }
    }
    else {
      this.snippetStyles = snippetStyles
    }

    this.forceUpdate();
  }

  setActive(active) {
    if (active) {
      this.snippetStyles = { root: { ...snippetStyles.root, ...snippetActiveStyles.root } }
    }
    else {
      this.snippetStyles = { root: { ...snippetStyles.root, ...snippetHoverStyles.root } }
    }

    this.forceUpdate();
  }

  render() {
    const { snippet, dispatch } = this.props
    return (
      <Stack.Item styles={this.snippetStyles}>
        <Stack horizontal>
          <Stack.Item grow styles={contentStyles}>
            <div
              onClick={() => dispatch(copySnippet(snippet))}
              onContextMenu={this.openMenu}
              onMouseDown={() => this.setActive(true)}
              onMouseUp={() => this.setActive(false)}
              onMouseEnter={() => this.setHover(true)}
              onMouseLeave={() => this.setHover(false)} >

              {snippet.preview}
            </div>
          </Stack.Item>
          <Stack.Item>
            <IconButton className="menu-button" menuIconProps={menuIcon} title="menu" ariaLabel="menu" menuProps={this.menuProps}/>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    )
  }
}

export default connect(null, null)(Component)