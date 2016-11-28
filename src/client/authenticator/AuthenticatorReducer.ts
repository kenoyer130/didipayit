import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import { IAuthenticatorSettingsResponseAction } from './actions/AuthenticatorSettingsResponseAction'
import { AUTHENTICATION_SETTINGS_RESPONSE } from './actions/AuthenticatorSettingsResponseAction'

const INITIAL_STATE = fromJS({
   authenticatorSettings: null,
   hasAuthToken: false,
   authenticatorSettingsLoaded: false
});

function AuthenticatorReducer(state = INITIAL_STATE, action : Redux.Action):AuthenticatorStore {
    switch(action.type) {
        case AUTHENTICATION_SETTINGS_RESPONSE:
            const settingsAction = action as IAuthenticatorSettingsResponseAction;
           // state.update('authenticatorSettingsLoaded', authenticatorSettingsLoaded => settingsAction.authenticatorSettings != null);
           // state.update('authenticatorSettings', authenticatorSettings => settingsAction.authenticatorSettings);
            let test: AuthenticatorStore = {
                hasAuthToken: false,
                authenticatorSettingsLoaded: true,
                authenticatorSettings: settingsAction.authenticatorSettings
            }; 
            return test;
        default:
            return state;
    }
}

export default AuthenticatorReducer;