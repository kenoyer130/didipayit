export const LOCAL_AUTHENTICATION_ACTION = "LOCAL_AUTHENTICATION_ACTION";

import Account from "../../models/Account"

export interface ILocalAuthenticationAction extends Redux.Action {
    token: string,
    hasAccount: boolean,
    hasAuthToken: boolean,
    account: Account
}

export function authenticateLocally(token: string, email: string, family: string) : ILocalAuthenticationAction {
   
    const account : Account = {
        email: email,
        family: family
    };

    return {
        type: LOCAL_AUTHENTICATION_ACTION,
        token: token,
        hasAccount : true,
        hasAuthToken: true,
        account : account
    }
}