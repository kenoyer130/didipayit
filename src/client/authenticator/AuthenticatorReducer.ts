import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import { DefaultState } from './AuthenticatorStore'
import { IAuthenticatorSettingsResponseAction } from './actions/AuthenticatorSettingsResponseAction'
import { AUTHENTICATION_SETTINGS_RESPONSE } from './actions/AuthenticatorSettingsResponseAction'
import { HAS_ACCOUNT_ACTION_RESPONSE } from './actions/HasAccountResponseAction'
import { IHasAccountActionResponse } from './actions/HasAccountResponseAction'

function AuthenticatorReducer(state : AuthenticatorStore = DefaultState, action : Redux.Action):AuthenticatorStore {
    switch(action.type) {
        case AUTHENTICATION_SETTINGS_RESPONSE:
            const settingsAction = action as IAuthenticatorSettingsResponseAction;
           // state.update('authenticatorSettingsLoaded', authenticatorSettingsLoaded => settingsAction.authenticatorSettings != null);
           // state.update('authenticatorSettings', authenticatorSettings => settingsAction.authenticatorSettings);
            let test: AuthenticatorStore = {
                isLocal: state.isLocal,
                hasAuthToken: false,
                authenticatorSettingsLoaded: true,
                authenticatorSettings: settingsAction.authenticatorSettings,
                authToken: null,
                hasAccount: false,
                accountEmail: null
            }; 
            return test;

         case HAS_ACCOUNT_ACTION_RESPONSE:
            const authenticatedAction = action as IHasAccountActionResponse;

            let d: AuthenticatorStore = {
                isLocal: state.isLocal,
                hasAuthToken: true,
                authToken: authenticatedAction.token,
                authenticatorSettingsLoaded: state.authenticatorSettingsLoaded,
                hasAccount: authenticatedAction.accountExists,
                accountEmail: authenticatedAction.email
            } 

            return d;
        default:
            return state;
    }
}

export default AuthenticatorReducer;