import AuthenticatorSettings from "../types/AuthenticatorSettings"

interface IAuthenticatorSettingsResponseAction extends Redux.Action {
    authenticatorSettings : AuthenticatorSettings
}

class AuthenticatorSettingsResponseAction implements IAuthenticatorSettingsResponseAction {
     type = "AUTHENTICATION_SETTINGS_RESPONSE"
     authenticatorSettings:AuthenticatorSettings = null;

     constructor(authenticatorSettings : AuthenticatorSettings) {
         this.authenticatorSettings = authenticatorSettings;
     }
} 

export default AuthenticatorSettingsResponseAction;