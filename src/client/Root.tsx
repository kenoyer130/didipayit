import * as React from "react";
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer"
import AccountSignupContainer from "./newAccount/AccountSignupContainer"
import MainContainer from "./main/MainContainer"

export interface IRootProps {
    hasAuthToken: boolean,
    hasAccount: boolean
};

export interface IRootState { };

class Root extends React.Component<IRootProps, IRootState> {

    routes: any;

    constructor(props) {
        super(props);

        this.routes = <Route path="/" >
            <Route path="/login" component={AuthenticatorContainer} />
            <Route path="/account/new" component={AccountSignupContainer} />
            <Route path="/main" component={MainContainer} />
        </Route>;
    }

    componentDidMount() {
        this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps: IRootProps) {
        this.checkAuth(nextProps);
    }

    checkAuth = (props) => {
        const currentPath = hashHistory.getCurrentLocation().pathname;

        // if we have no auth token reroute to the login page
        if (!props.hasAuthToken && currentPath !== 'login') {
            hashHistory.push("login");
            return;
        }

        // if we have a token but no account reroute to new account sign up
        if (!props.hasAccount && currentPath !== 'account/new') {
            hashHistory.push("account/new");
            return;
        }

        // if we have a token and an account on root or new account page reroute to main
        if (currentPath === "/" || currentPath === '/account/new') {
            hashHistory.push("/main");
        }

    };

    render() {
        return <Router history={hashHistory}>{this.routes}</Router>;
    }
}

export default Root;
