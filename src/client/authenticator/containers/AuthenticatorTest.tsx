import * as React from "react";
import { exec } from "../../actions/FetchRequestAction"

export interface IAuthenticatorTest {
    onAuthenticated: (token: string, email: string) => void;
};

interface IAuthenticatorTestState { };

class AuthenticatorTest extends React.Component<IAuthenticatorTest, IAuthenticatorTestState> {

    _onclick = () => {
        exec("api/public/local_authentication")
            .then(json => {
                this.props.onAuthenticated(json.token, 'test@test.com');
            });
    }

    public render() {

        return (
            <div className="mdl-list__item">
                <a href="#" onClick={this._onclick} >
                    Test Authenticator!
               </a>
            </div>
        );
    }
}

export default AuthenticatorTest;
