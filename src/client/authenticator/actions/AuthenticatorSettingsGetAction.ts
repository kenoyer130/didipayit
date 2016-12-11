export const AUTHENTICATOR_SETTINGS_GET_ACTION = "AUTHENTICATOR_SETTINGS_GET_ACTION";

import AuthenticatorSettings from "../types/AuthenticatorSettings"
import { exec } from "../../actions/FetchRequestAction"

export interface IAuthenticatorSettingsGetAction extends Redux.Action {
    authenticatorSettings: AuthenticatorSettings
}

function getAuthenticationSettings() {

    return function (dispatch) {
        exec("api/settings").then(json => {

            const authenticatorSettings: AuthenticatorSettings = {
                githubClientId: json['github_client_id']
            };

            dispatch(getAction(authenticatorSettings));
        })
    }
}

function getAction(authenticatorSettings) {
    return {
        type: AUTHENTICATOR_SETTINGS_GET_ACTION,
        authenticatorSettings: authenticatorSettings
    }
}

export default getAuthenticationSettings;