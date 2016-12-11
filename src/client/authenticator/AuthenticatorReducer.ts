import { fromJS } from 'immutable';
import { AuthenticatorStore } from './AuthenticatorStore'
import { DefaultState } from './AuthenticatorStore'
import { IAuthenticatorSettingsGetAction, AUTHENTICATOR_SETTINGS_GET_ACTION  } from './actions/AuthenticatorSettingsGetAction'
import { ACCOUNT_AUTHENTICATE_GET_ACTION , IAccountAuthenticationGetAction} from './actions/AccountAuthenticateGetAction'
import { STATE_FORM_VALUE_CHANGED, IStateFormValuedChangeAction } from '../actions/StateFormValuedChangeAction'
import { VIOLATION_ACTION, IViolationAction} from '../actions/ViolationAction'
import { CREATE_ACCOUNT_ACTION, ICreateAccountAction} from '../newAccount/actions/CreateAccountAction'

function AuthenticatorReducer(state : AuthenticatorStore = DefaultState, action : Redux.Action):AuthenticatorStore {
    switch(action.type) {
        case AUTHENTICATOR_SETTINGS_GET_ACTION:
            const settingsAction = action as IAuthenticatorSettingsGetAction;
            
            return Object.assign({}, state, {
                authenticatorSettingsLoaded: true,
                authenticatorSettings: settingsAction.authenticatorSettings });
         
         case ACCOUNT_AUTHENTICATE_GET_ACTION:
            const authenticatedAction = action as IAccountAuthenticationGetAction;
            
            return Object.assign({}, state, { 
                hasAuthToken: authenticatedAction.token != null,
                authToken: authenticatedAction.token, 
                hasAccount: authenticatedAction.accountExists, 
                accountEmail: authenticatedAction.email});
         
         case CREATE_ACCOUNT_ACTION:
            const createAccountAction = action as ICreateAccountAction;

            return Object.assign({}, state, {
                hasAccount: createAccountAction.hasAccount,
                familyName: createAccountAction.familyName,
                accountEmail: createAccountAction.accountEmail
            });      

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