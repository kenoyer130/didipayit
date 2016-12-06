import * as React from "react";

export interface IAuthenticatorTest {
    onAuthenticated: (token: string, email: string) => void;
};

interface IAuthenticatorTestState {};

class AuthenticatorTest extends React.Component<IAuthenticatorTest, IAuthenticatorTestState> {

    _onclick = () => {
        this.props.onAuthenticated(Math.random() + "", 'test@test.com');        
    }    

    public render() {

        return <a href="#" onClick={this._onclick} >
                Test Authenticator!
               </a>
    }
}

export default AuthenticatorTest;
