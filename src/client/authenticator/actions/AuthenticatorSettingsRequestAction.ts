import AuthenticatorSettingsResponseAction from './AuthenticatorSettingsResponseAction'
import { AuthenticatorStore } from '../AuthenticatorStore'
import AuthenticatorSettings from "../types/AuthenticatorSettings"

export function fetchAuthenticatorSettings() {
    return(dispatch : Redux.Dispatch<AuthenticatorStore>, getState : AuthenticatorStore) => {
        const athenticatorSettings : AuthenticatorSettings = {
            githubClientId: "test"
        };

        return dispatch(new AuthenticatorSettingsResponseAction(athenticatorSettings));
    } 
}
