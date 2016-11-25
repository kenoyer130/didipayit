import * as React from "react";

interface IAuthenticatorProps {
    hasAuthToken: boolean
};

interface IAuthenticatorState {};

class Authenticator extends React.Component<IAuthenticatorProps, IAuthenticatorState> {
    public render() { 
        return <div>
                {this.props.hasAuthToken ?
                    <span>{this.props.children}</span> : 
                    <span>Not authenticated fool!</span>
                }</div>
    }
}

export default Authenticator;