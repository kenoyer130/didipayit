import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import { DefaultState } from './AuthenticatorStore'
import { IAuthenticatorSettingsGetAction, AUTHENTICATOR_SETTINGS_GET_ACTION } from './actions/AuthenticatorSettingsGetAction'
import { ACCOUNT_AUTHENTICATE_GET_ACTION, IAccountAuthenticationGetAction } from './actions/AccountAuthenticateGetAction'
import { STATE_FORM_VALUE_CHANGED, IStateFormValuedChangeAction } from '../actions/StateFormValuedChangeAction'
import { VIOLATION_ACTION, IViolationAction } from '../actions/ViolationAction'
import { CREATE_ACCOUNT_ACTION, ICreateAccountAction } from '../newAccount/actions/CreateAccountAction'
import { LOCAL_AUTHENTICATION_ACTION, ILocalAuthenticationAction } from './actions/LocalAuthenticationAction'
import { AUTHENTICATION_LOCAL_SAVE_ACTION, ISaveAuthenticationLocal } from './actions/AuthenticationLocalSaveAction'

function AuthenticatorReducer(state: AuthenticatorStore = DefaultState, action: Redux.Action): AuthenticatorStore {
    switch (action.type) {
        case AUTHENTICATOR_SETTINGS_GET_ACTION:
            const settingsAction = action as IAuthenticatorSettingsGetAction;

            return Object.assign({}, state, {
                authenticatorSettingsLoaded: true,
                authenticatorSettings: settingsAction.authenticatorSettings
            });

        case AUTHENTICATION_LOCAL_SAVE_ACTION:
            const saveLocalAuthenticationAction = action as ISaveAuthenticationLocal;

            return Object.assign({}, state, {
                hasAuthToken: saveLocalAuthenticationAction.hasAuthToken,
                hasAccount: saveLocalAuthenticationAction.hasAccount,
                account: saveLocalAuthenticationAction.account,
                authToken: saveLocalAuthenticationAction.token,
                authenticatorSettingsLoaded: true
            });

        case LOCAL_AUTHENTICATION_ACTION:
            const localAuthenticationAction = action as ILocalAuthenticationAction;

            return Object.assign({}, state, {
                hasAuthToken: localAuthenticationAction.hasAuthToken,
                hasAccount: localAuthenticationAction.hasAccount,
                account: localAuthenticationAction.account,
                authToken: localAuthenticationAction.token,
                authenticatorSettingsLoaded: true
            });

        case ACCOUNT_AUTHENTICATE_GET_ACTION:
            const authenticatedAction = action as IAccountAuthenticationGetAction;

            return Object.assign({}, state, {
                hasAuthToken: authenticatedAction.token != null,
                authToken: authenticatedAction.token,
                hasAccount: authenticatedAction.hasAccount,
                account: authenticatedAction.account
            });

        case CREATE_ACCOUNT_ACTION:
            const createAccountAction = action as ICreateAccountAction;

            return Object.assign({}, state, {
                hasAccount: createAccountAction.hasAccount,
            });

        case STATE_FORM_VALUE_CHANGED:
            const stateFormValuedChangeAction = action as IStateFormValuedChangeAction;

            const newState = Object.assign({}, state);

            setState(newState, stateFormValuedChangeAction.key, stateFormValuedChangeAction.value);

            return newState;

        case VIOLATION_ACTION:
            const violationAction = action as IViolationAction;
            return Object.assign({}, state, {
                valid: violationAction.valid,
                violation: violationAction.violation
            });

        default:
            return state;
    }
}

function setState(state, path, value) {
    if (path.indexOf(".") != -1) {
        const obj = path.substring(0, path.indexOf("."));
        if (state[obj] === null) {
            state[obj] = {};
        }

        const trimmedPath = path.substring(path.indexOf(".") + 1);
        setState(state[obj], trimmedPath, value);
    } else {
        state[path] = value;
    }
}

export default AuthenticatorReducer;