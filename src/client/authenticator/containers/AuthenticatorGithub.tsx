import * as React from "react";
import { connect } from "react-redux";

export interface IAuthenticatorGithubProps {
    githubClientId: string
};

interface IAuthenticatorGithubState {};

class AuthenticatorGithub extends React.Component<IAuthenticatorGithubProps, IAuthenticatorGithubState> {

    public constructor(props : IAuthenticatorGithubProps) {
        super(props);
        this._onclick = this._onclick.bind(this);
    }

    _onclick() {
        const URL = "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + this.props.githubClientId;
        window.open(URL, "_github", "hieght:150, width:400");        
    }    

    public render() {

        const style = {
            height: 24,
            width: 100
        };
        
        return <a href="#" onClick={this._onclick} >
                <img style={style} src='assets/GitHub_Logo.png' />
            </a>
    }
}

export default AuthenticatorGithub;
