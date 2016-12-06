import * as React from "react";
import AuthenticatorPanelContainer from "./AuthenticatorPanelContainer"
import AuthenticatorSettings from "../types/AuthenticatorSettings"

export interface IAuthenticatorProps {
    hasAuthToken: boolean
    authenticatorSettingsLoaded : boolean
};

interface IAuthenticatorState {};

class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {

    public render() { 
        return <div>
                {this.props.hasAuthToken ?
                    <span>{this.props.children}</span> : 
                    this.props.authenticatorSettingsLoaded ?
                        <span><AuthenticatorPanelContainer /></span> :
                        <span>loading...</span>
                }</div>
    }
}

export default Authenticator;