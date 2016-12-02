export const AUTHENTICATED_ACTION = "AUTHENTICATED_ACTION";

export interface IAuthenticatedAction extends Redux.Action {
    email: string,
    token: string,
    accountExists: boolean
}

function authenticated(email: string, token: string) : IAuthenticatedAction {
    return {
        type : AUTHENTICATED_ACTION,
        email: email,
        token: token,
        accountExists: false
    }
}

export default authenticated;