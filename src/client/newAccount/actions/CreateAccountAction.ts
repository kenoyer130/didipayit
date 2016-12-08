export const CREATE_ACCOUNT_ACTION = "CREATE_ACCOUNT_ACTION";

export interface ICreateAccountAction extends Redux.Action {
    familyName: string,
    joinExistingFamily: boolean
}

function createAccount(familyName, joinExistingFamily) : ICreateAccountAction {

    return {
        type : CREATE_ACCOUNT_ACTION,
        familyName: familyName,
        joinExistingFamily: joinExistingFamily
    }
}

export default createAccount;