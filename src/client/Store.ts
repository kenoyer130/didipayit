import { combineReducers } from 'redux'
import { MainStore } from "./main/MainStore"
import newAccount from "./newAccount/NewAccountReducer";
import authenticator from "./authenticator/AuthenticatorReducer";
import main from "./main/MainStoreReducer";
import { AuthenticatorStore } from "./authenticator/AuthenticatorStore";
import { NewAccountStore } from "./newAccount/NewAccountStore"

export interface Store {
    authenticator: AuthenticatorStore,
    newAccount: NewAccountStore,
    main: MainStore
}

export function getCombinedStore() {
    return combineReducers({
        authenticator,
        newAccount,
        main
    });
}