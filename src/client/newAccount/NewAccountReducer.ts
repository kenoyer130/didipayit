import { NewAccountStore } from './NewAccountStore'
import { DefaultNewActionState } from './NewAccountStore'
import { STATE_FORM_VALUE_CHANGED, IStateFormValuedChangeAction } from '../actions/StateFormValuedChangeAction'
import { VIOLATION_ACTION, IViolationAction } from '../actions/ViolationAction'
import { CREATE_ACCOUNT_ACTION, ICreateAccountAction } from '../newAccount/actions/CreateAccountAction'

function NewAccountReducer(state: NewAccountStore = DefaultNewActionState, action: Redux.Action): NewAccountStore {
    switch (action.type) {
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
}

export default NewAccountReducer;