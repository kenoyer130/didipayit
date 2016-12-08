import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import { DefaultState } from './AuthenticatorStore'
import { IAuthenticatorSettingsResponseAction } from './actions/AuthenticatorSettingsResponseAction'
import { AUTHENTICATION_SETTINGS_RESPONSE } from './actions/AuthenticatorSettingsResponseAction'
import { HAS_ACCOUNT_ACTION_RESPONSE , IHasAccountActionResponse} from './actions/HasAccountResponseAction'
import { STATE_FORM_VALUE_CHANGED, IStateFormValuedChangeAction } from '../actions/StateFormValuedChangeAction'
import { VIOLATION_ACTION, IViolationAction} from '../actions/ViolationAction'
import { CREATE_ACCOUNT_ACTION, ICreateAccountAction} from '../newAccount/actions/CreateAccountAction'

function AuthenticatorReducer(state : AuthenticatorStore = DefaultState, action : Redux.Action):AuthenticatorStore {
    switch(action.type) {
        case AUTHENTICATION_SETTINGS_RESPONSE:
            const settingsAction = action as IAuthenticatorSettingsResponseAction;
            
            return Object.assign({}, state, {
                authenticatorSettingsLoaded: true,
                authenticatorSettings: settingsAction.authenticatorSettings });
         
         case HAS_ACCOUNT_ACTION_RESPONSE:
            const authenticatedAction = action as IHasAccountActionResponse;
            
            return Object.assign({}, state, { 
                hasAuthToken: authenticatedAction.token != null,
                authToken: authenticatedAction.token, 
                hasAccount: authenticatedAction.accountExists, 
                accountEmail: authenticatedAction.email});
         
         case STATE_FORM_VALUE_CHANGED:
            const stateFormValuedChangeAction = action as IStateFormValuedChangeAction;
            
            let newState = Object.assign({}, state);
            newState[stateFormValuedChangeAction.key] = stateFormValuedChangeAction.value
            
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

export default AuthenticatorReducer;