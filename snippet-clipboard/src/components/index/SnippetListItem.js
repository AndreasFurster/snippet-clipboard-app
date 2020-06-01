import React from "react";
import { connect } from "react-redux";
import { Stack, IconButton } from 'office-ui-fabric-react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { CLICK_SNIPPET } from "../../redux/actions";
import { theme } from '../../theme';

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

const buildMenuProps = (history, id) => ({
  items: [
    {
      key: 'edit',
      text: 'Edit',
      onClick: () => history.push(`/snippets/${id}/edit`),
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
      onClick: () => console.log('Delete'),
      iconProps: {
        iconName: 'Delete',
      }
    }
  ]
});


class Component extends React.Component {
  constructor(props) {
    super(props)
    this.snippetStyles = snippetStyles
    this.menuProps = buildMenuProps(this.props.page.props.history, this.props.snippet.id)
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
    return (
      <Stack.Item styles={this.snippetStyles}>
        <Stack horizontal>
          <Stack.Item grow styles={contentStyles}>
            <div
              onClick={() => this.props.clickSnippet(this.props.snippet.id)}
              onMouseDown={() => this.setActive(true)}
              onMouseUp={() => this.setActive(false)}
              onMouseEnter={() => this.setHover(true)}
              onMouseLeave={() => this.setHover(false)} >

              {this.props.snippet.content}
            </div>
          </Stack.Item>
          <Stack.Item>
            <IconButton menuIconProps={menuIcon} title="menu" ariaLabel="menu" menuProps={this.menuProps} />
          </Stack.Item>
        </Stack>
      </Stack.Item>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  clickSnippet: id => dispatch(CLICK_SNIPPET(id))
})


export default connect(null, mapDispatchToProps)(Component)