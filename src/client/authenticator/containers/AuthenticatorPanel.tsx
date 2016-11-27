import * as React from "react";
import AuthenticatorGithubContainer from "./AuthenticatorGithubContainer";

interface IAuthenticatorPanelProps {};

interface IAuthenticatorPanelState {};

class AuthenticatorPanel extends React.Component<IAuthenticatorPanelProps, IAuthenticatorPanelState> {
    public render() {
        return <div>
            <AuthenticatorGithubContainer />
        </div>;
    } 
}

export default AuthenticatorPanel;
