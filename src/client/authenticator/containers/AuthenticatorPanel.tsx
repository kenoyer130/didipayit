import * as React from "react";
import AuthenticatorTest from "./AuthenticatorTest"
import AuthenticatorGithub from "./AuthenticatorGithub";

interface IAuthenticatorPanelProps {
    isLocal: boolean,
    githubClientId: string,
    onAuthenticated: (token: string, email: string) => void
};

interface IAuthenticatorPanelState { };

class AuthenticatorPanel extends React.Component<IAuthenticatorPanelProps, IAuthenticatorPanelState> {
    public render() {
        return (
            <div className='mdl-list'>
                {this.props.isLocal ?
                    <AuthenticatorTest
                        onAuthenticated={this.props.onAuthenticated} />
                    : ''}
                <AuthenticatorGithub
                    githubClientId={this.props.githubClientId}
                    onAuthenticated={this.props.onAuthenticated} />
            </div>);
    }
}

export default AuthenticatorPanel;
