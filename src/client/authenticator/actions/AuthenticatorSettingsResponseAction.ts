import AuthenticatorSettings from "../types/AuthenticatorSettings"

export const AUTHENTICATION_SETTINGS_RESPONSE = "AUTHENTICATION_SETTINGS_RESPONSE";

export interface IAuthenticatorSettingsResponseAction extends Redux.Action {
    authenticatorSettings : AuthenticatorSettings
}

function authenticationSettingsResponse(response :any) : IAuthenticatorSettingsResponseAction {

    const authenticatorSettings : AuthenticatorSettings =  {
        githubClientId : response['github_client_id']
    };

    return {
        type : AUTHENTICATION_SETTINGS_RESPONSE,
        authenticatorSettings: authenticatorSettings
    }
}

export default authenticationSettingsResponse;