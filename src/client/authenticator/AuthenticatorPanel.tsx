import * as React from "react";
import AuthenticatorGithub from "./AuthenticatorGithub";

interface IAuthenticatorPanelProps {};

interface IAuthenticatorPanelState {};

class AuthenticatorPanel extends React.Component<IAuthenticatorPanelProps, IAuthenticatorPanelState> {
    public render() {
        return <div>
            <AuthenticatorGithub />
        </div>;
    }
}

export default AuthenticatorPanel;
