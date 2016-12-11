export const CREATE_ACCOUNT_ACTION = "CREATE_ACCOUNT_ACTION";

import { AuthenticatorStore } from '../../authenticator/AuthenticatorStore'
import { exec } from "../../actions/FetchRequestAction"
import onViolation from "../../actions/ViolationAction"

export interface ICreateAccountAction extends Redux.Action {
    hasAccount: boolean,
    accountEmail: string,
    familyName: string
}

function createAccount(accountEmail, familyName, joinExistingFamily) {

    return function (dispatch) {
        exec("api/account", 'POST', {
            family: familyName,
            joinExistingFamily: joinExistingFamily,
            accountEmail: accountEmail
        }).then(json => {
            dispatch(onViolation(null));
            dispatch(getAction(familyName, accountEmail));
        }).catch((error) => {

            const msg = error.status_code === 409 
                ? "An account with that family or email already exists!" 
                : error.message;

            dispatch(onViolation(msg));
        });
    }
}

function getAction(familyName, accountEmail): ICreateAccountAction {
    return {
        type: CREATE_ACCOUNT_ACTION,
        hasAccount: true,
        accountEmail: accountEmail,
        familyName: familyName
    }
}

export default createAccount;