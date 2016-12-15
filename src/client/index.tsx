import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer";
import createLogger = require("redux-logger");
import { Router, Route, hashHistory } from 'react-router'
import RootContainer from './RootContainer'
import getAuthenticationSettings from './authenticator/actions/AuthenticatorSettingsGetAction'
import { getCombinedStore } from './Store'

let loggerMiddleware = createLogger()

const store = createStore(getCombinedStore(), applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById("root")
);

store.dispatch(getAuthenticationSettings());