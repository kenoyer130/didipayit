export const ACCOUNT_AUTHENTICATE_GET_ACTION = "ACCOUNT_AUTHENTICATE_GET_ACTION";

import Account from "../../models/Account"

import { exec } from "../../actions/FetchRequestAction"

export interface IAccountAuthenticationGetAction extends Redux.Action {
    token: string,
    hasAccount: boolean,
    account: Account
}

function authenticate(token: string, email: string) {

    return (dispatch) => {
        exec("api/account/" + email).then(json => {

            const hasAccount = json.email ? true : false; 

            const account : Account = hasAccount ? json : { email: email}; 

            dispatch(getAction(token, account, hasAccount));
        });
    }
}

function getAction(token: string, account: Account, hasAccount: boolean) : IAccountAuthenticationGetAction {
    return {
        type: ACCOUNT_AUTHENTICATE_GET_ACTION,
        token: token,
        hasAccount : hasAccount,
        account : account
    }
}

export default authenticate;