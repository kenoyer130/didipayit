import * as React from "react";
import * as ReactDOM from "react-dom";
import { AuthenticatorStore } from "./authenticator/AuthenticatorStore";
import { DefaultState } from "./authenticator/AuthenticatorStore";
import { AuthenticatorReducer } from "./authenticator/AuthenticatorReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AuthenticatorContainer from "./authenticator/AuthenticatorContainer"; 

const store = createStore( AuthenticatorReducer, DefaultState);

ReactDOM.render (
    <Provider store={store}>
        <AuthenticatorContainer >
            <div>You are authenticated</div>
        </AuthenticatorContainer>
    </Provider>,
    document.getElementById("root")
);