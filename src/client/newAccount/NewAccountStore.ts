import Account from "../models/Account"

export interface NewAccountStore {
    joinExistingFamily: boolean,
    valid: boolean,
    violation?: string,
    account: Account
}

export const DefaultNewActionState : NewAccountStore = {
    joinExistingFamily: false,
    valid: true,
    violation: null,
    account: null
}