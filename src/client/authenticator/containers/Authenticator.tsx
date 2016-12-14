import * as React from "react";
import AuthenticatorPanelContainer from "./AuthenticatorPanelContainer"
import AuthenticatorSettings from "../types/AuthenticatorSettings"
import Page from "../../components/Page"
import Header from "../../components/Header"

export interface IAuthenticatorProps {
    hasAuthToken: boolean
    authenticatorSettingsLoaded: boolean
};

interface IAuthenticatorState { };

class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {

    public render() {
        return (
            <Page>
                <Header HeaderText='Login' />
                <div>
                    {this.props.hasAuthToken ?
                        <span>{this.props.children}</span> :
                        this.props.authenticatorSettingsLoaded ?
                            <span><AuthenticatorPanelContainer /></span> :
                            <span>loading...</span>
                    }
                </div>
            </Page>
        )
    }
}

export default Authenticator;