export const STATE_FORM_VALUE_CHANGED = "STATE_FORM_VALUE_CHANGED";

export interface IStateFormValuedChangeAction extends Redux.Action {
    key: string,
    value: any
}

function stateFormValueChanged(key, value) : IStateFormValuedChangeAction {

    return {
        type : STATE_FORM_VALUE_CHANGED,
        key: key,
        value: value
    }
}

export default stateFormValueChanged;