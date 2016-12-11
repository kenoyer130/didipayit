export const VIOLATION_ACTION = "VIOLATION_ACTION";

export interface IViolationAction extends Redux.Action {
    violation: string,
    valid: boolean
}

function onViolation(violation) : IViolationAction {

    return {
        type : VIOLATION_ACTION,
        violation: violation,
        valid: violation === null || violation === ''
    }
}

export default onViolation;