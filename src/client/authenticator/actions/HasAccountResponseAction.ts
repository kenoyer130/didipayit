export const HAS_ACCOUNT_ACTION_RESPONSE = "HAS_ACCOUNT_ACTION_RESPONSE";

export interface IHasAccountActionResponse extends Redux.Action {
    email: string,
    token: string,
    accountExists: boolean
}

function authenticated(json, props) : IHasAccountActionResponse {
    return {
        type : HAS_ACCOUNT_ACTION_RESPONSE,
        email: props.email,
        token: props.token,
        accountExists: json.length > 0
    }
}

export default authenticated;