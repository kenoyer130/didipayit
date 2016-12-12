export const AUTHENTICATION_LOCAL_SAVE_ACTION = "AUTHENTICATION_LOCAL_SAVE_ACTION";

import Account from "../../models/Account"

import * as Cookies from 'js-cookie'

export interface ISaveAuthenticationLocal extends Redux.Action {
    token: string,
    hasAccount: boolean,
    hasAuthToken: boolean,
    account: Account
}

function saveAuthenticationLocal(authToken: string, email: string, family: string) : ISaveAuthenticationLocal {
    Cookies.set("authToken", authToken);
    Cookies.set("email", email);
    Cookies.set("family", family);

    const account : Account = {
        email: email,
        family: family
    };

    return {
        type: AUTHENTICATION_LOCAL_SAVE_ACTION,
        hasAccount: true,
        hasAuthToken: true,
        token: authToken,
        account: account
    }
}

export default saveAuthenticationLocal;