export const AUTHENTICATOR_SETTINGS_GET_ACTION = "AUTHENTICATOR_SETTINGS_GET_ACTION";

import AuthenticatorSettings from "../types/AuthenticatorSettings"
import { exec } from "../../actions/FetchRequestAction"
import { authenticateLocally } from "../actions/LocalAuthenticationAction"
import * as Cookies from 'js-cookie'

export interface IAuthenticatorSettingsGetAction extends Redux.Action {
    authenticatorSettings: AuthenticatorSettings
}

function getAuthenticationSettings() {

    return function (dispatch) {

        // do we have the proper cookies?
        const authToken = Cookies.get("authToken");
        const emailLocal = Cookies.get("email");
        const familyLocal = Cookies.get("family");

        if(authToken && emailLocal && familyLocal) {
            dispatch(authenticateLocally(authToken, emailLocal, familyLocal));
            return;
        }

        exec("api/public/settings").then(json => {

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