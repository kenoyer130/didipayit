import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import AuthenticatorSettingsResponseAction from './actions/AuthenticatorSettingsResponseAction'

const INITIAL_STATE = fromJS({
   authenticatorSettings: null,
    hasAuthToken: false
});

function AuthenticatorReducer(state = INITIAL_STATE, action : Redux.Action):AuthenticatorStore {
    switch(action.type) {
        case "AUTHENTICATION_SETTINGS_REQUEST":
            const settingsAction = action as AuthenticatorSettingsResponseAction;
            return state.update(fromJS({
                authenticatorSettings : settingsAction.authenticatorSettings
            }));

        default:
            return state;
    }
}

export default AuthenticatorReducer;