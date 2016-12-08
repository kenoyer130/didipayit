import * as React from "react";
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import AuthenticatorContainer from "./authenticator/containers/AuthenticatorContainer"
import AccountSignupContainer from "./newAccount/AccountSignupContainer"

export interface IRootProps {
    hasAuthToken : boolean,
    hasAccount: boolean
};

export interface IRootState {};

class Root extends React.Component<IRootProps, IRootState> {

   routes: any;

    constructor(props) {
        super(props);

        this.routes = <Route path="/" >
                        <Route path="/login" component={AuthenticatorContainer} />
                        <Route path="/account/new" component={AccountSignupContainer} />
                     </Route>;
    }

    componentDidMount() {
        this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps:IRootProps) {
        this.checkAuth(nextProps);
    }
   
    checkAuth = (props) => {
         if(!props.hasAuthToken && hashHistory.getCurrentLocation().pathname !== 'login') {
            hashHistory.push("login");            
            return;
        }
 
        if(!props.hasAccount && hashHistory.getCurrentLocation().pathname !== 'account/new') {
            hashHistory.push("account/new");            
            return;
        }
    };

    render() {
       return  <Router history={hashHistory}>{this.routes}</Router>;
    }
}

export default Root;
