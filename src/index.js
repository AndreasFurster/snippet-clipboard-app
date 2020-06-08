import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { mergeStyles } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';
import { Customizations } from 'office-ui-fabric-react';
import { theme } from './theme'
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from "./redux/store";

Customizations.applySettings({ theme })
initializeIcons();

console.log(process.env.REACT_APP_API_HOST);

mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
