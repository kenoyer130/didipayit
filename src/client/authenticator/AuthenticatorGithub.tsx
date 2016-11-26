import * as React from "react";
import { connect } from "react-redux";

interface IAuthenticatorGithubProps {
    client_id: string
};

interface IAuthenticatorGithubState {};

class AuthenticatorGithub extends React.Component<IAuthenticatorGithubProps, IAuthenticatorGithubState> {
    
    public render() {
        
        const style = {
            height: 24,
            width: 100
        };
        
        return <a target='_github' href="https://github.com/login/oauth/authorize?scope=user:email&client_id={this.props.client_id}">
            <img style={style} src='assets/GitHub_Logo.png' />
        </a>
    }
}

export default connect()(AuthenticatorGithub);
