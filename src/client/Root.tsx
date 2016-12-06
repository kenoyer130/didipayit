import * as React from "react";
import {Router, Route, hashHistory} from 'react-router'
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer"

export interface IRootProps {
    hasAuthToken : boolean,
    hasAccount: boolean
};

export interface IRootState {};

class Root extends React.Component<IRootProps, IRootState> {

    onEnter = (nextState, replace, callback) => {
        if(!this.props.hasAuthToken) {
            replace('/login');
        } else if(!this.props.hasAccount) {
            replace('/account/new')
        }

        callback();
    }

    render() {
       return <Router history={hashHistory}>
            <Route path="/" onEnter={this.onEnter} >
                <Route path="/login" component={AuthenticatorContainer} />
            </Route>
        </Router>
    }
}

export default Root;
