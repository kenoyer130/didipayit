import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { AuthenticatorStore } from "./authenticator/AuthenticatorStore";
import { DefaultState } from "./authenticator/AuthenticatorStore";
import AuthenticatorReducer from "./authenticator/AuthenticatorReducer";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {fetchAuthenticatorSettings} from './authenticator/actions/AuthenticatorSettingsRequestAction'
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer"; 

const store = createStore( AuthenticatorReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render (
    <Provider store={store}>
        <AuthenticatorContainer >
            <div>You are authenticated</div>
        </AuthenticatorContainer>
    </Provider>,
    document.getElementById("root")
);

store.dispatch(fetchAuthenticatorSettings);