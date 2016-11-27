import * as React from "react";
import AuthenticatorPanel from "./AuthenticatorPanel"
import AuthenticatorSettings from "../types/AuthenticatorSettings"

interface IAuthenticatorProps {
    hasAuthToken: boolean
    authenticatorSettings: AuthenticatorSettings
};

interface IAuthenticatorState {};

class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {
    public render() { 
        return <div>
                {this.props.hasAuthToken ?
                    <span>{this.props.children}</span> : 
                    this.props.authenticatorSettings ?
                        <span><AuthenticatorPanel /></span> :
                        <span>loading...</span>
                }</div>
    }
}

export default Authenticator;