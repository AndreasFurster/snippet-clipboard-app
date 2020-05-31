import React from "react";
import { useHistory } from "react-router-dom";
import { CommandBar } from 'office-ui-fabric-react';
import { theme } from '../../theme'


const commandBarStyles = {
  root: {
    borderBottom: `1px solid ${theme.palette.neutralLight}`
  }
}

export default function () {
  const history = useHistory()
  const items = [
    {
      key: 'home',
      text: 'Home',
      onClick: () => history.push('/home'),
    },
    {
      key: 'manage',
      text: 'Manage',
      onClick: () => history.push('/manage'),
    },
    {
      key: 'index',
      text: 'Index',
      onClick: () => history.push('/index'),
    },
    {
      key: 'github',
      text: 'Github',
      iconProps: { iconName: 'OpenSource' },
      href: 'https://github.com/AndreasFurster/php-library-api-reference',
      target: '_blank'
    },
  ]

  return (
    <CommandBar
      items={items}
      styles={commandBarStyles}
    />
  )
}


// <nav>
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/docs">Docs</Link>
//   </li>
//   <li>
//     <Link to="/users">Users</Link>
//   </li>
// </ul>
// </nav>