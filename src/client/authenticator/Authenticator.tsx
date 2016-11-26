import * as React from "react";
import AuthenticatorPanel from "./AuthenticatorPanel"

interface IAuthenticatorProps {
    hasAuthToken: boolean
};

interface IAuthenticatorState {};

class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {
    public render() { 
        return <div>
                {this.props.hasAuthToken ?
                    <span>{this.props.children}</span> : 
                    <span><AuthenticatorPanel /></span>
                }</div>
    }
}

export default Authenticator;