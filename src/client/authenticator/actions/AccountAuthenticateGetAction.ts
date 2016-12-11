export const ACCOUNT_AUTHENTICATE_GET_ACTION = "ACCOUNT_AUTHENTICATE_GET_ACTION";

import { exec } from "../../actions/FetchRequestAction"

export interface IAccountAuthenticationGetAction extends Redux.Action {
    email: string,
    token: string,
    accountExists: boolean
}

function authenticate(token: string, email: string) {

    return (dispatch) => {
        exec("api/account/" + email).then(json => {

            const accountExists = json.accountExists;

            dispatch(getAction(email, token, accountExists));
        });
    }
}

function getAction(email, token, accountExists) {
    return {
        type: ACCOUNT_AUTHENTICATE_GET_ACTION,
        email: email,
        token: token,
        accountExists: accountExists
    }
}

export default authenticate;