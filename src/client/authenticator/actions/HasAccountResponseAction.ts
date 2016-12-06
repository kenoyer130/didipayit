export const HAS_ACCOUNT_ACTION_RESPONSE = "HAS_ACCOUNT_ACTION_RESPONSE";

export interface IHasAccountActionResponse extends Redux.Action {
    email: string,
    token: string,
    accountExists: boolean
}

function authenticated(token : string, email: string, accountExists: boolean) : IHasAccountActionResponse {
    return {
        type : HAS_ACCOUNT_ACTION_RESPONSE,
        email: email,
        token: token,
        accountExists: accountExists
    }
}

export default authenticated;