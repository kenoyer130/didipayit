import * as React from "react";
import { connect } from "react-redux";

export interface IAuthenticatorGithubProps {
    githubClientId: string,
    onAuthenticated: (token: string, email: string) => void;
};

interface IAuthenticatorGithubState { };

class AuthenticatorGithub extends React.Component<IAuthenticatorGithubProps, IAuthenticatorGithubState> {

    public constructor(props: IAuthenticatorGithubProps) {
        super(props);
        this._onclick = this._onclick.bind(this);
    }

    _onclick() {

        window.addEventListener("message", (msg) => {
            if (!msg.data.action || msg.data.action !== 'github_authenticated') {
                return;
            }

            this.props.onAuthenticated(msg.data.email, msg.data.access_token);
        }, false);

        const URL = "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + this.props.githubClientId;
        window.open(URL, "_github", "height:150px, width:400px");
    }

    public render() {

        const imgStyle = {
            height: '34',
            width: '34'
        }

        return (

            <div className="mdl-list__item">
                <a href="#" onClick={this._onclick} >
                    <span className='mdl-list__item-primary-content'>
                        <img style={imgStyle} className="material-icons mdl-list__item-avatar" src='assets/GitHub_Logo.png' />
                        GitHub
                    </span>
                </a>
            </div >
        );
    }
}

export default AuthenticatorGithub;
