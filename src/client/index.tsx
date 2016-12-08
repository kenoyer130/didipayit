import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { AuthenticatorStore } from "./authenticator/AuthenticatorStore";
import { DefaultState } from "./authenticator/AuthenticatorStore";
import AuthenticatorReducer from "./authenticator/AuthenticatorReducer";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer"; 
import createLogger = require("redux-logger");
import {Router, Route, hashHistory} from 'react-router'
import RootContainer from './RootContainer'

import authenticationSettingsResponse from './authenticator/actions/AuthenticatorSettingsResponseAction'
import AuthenticatorSettings from "./authenticator/types/AuthenticatorSettings"
import {exec} from './actions/FetchRequestAction'

let loggerMiddleware = createLogger()

const store = createStore( AuthenticatorReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

ReactDOM.render (
    <Provider store={store}>
        <RootContainer />
    </Provider>,
    document.getElementById("root")
);

store.dispatch(exec("api/settings",authenticationSettingsResponse));