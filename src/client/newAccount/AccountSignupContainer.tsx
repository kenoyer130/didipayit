import { connect } from "react-redux";
import { AuthenticatorStore } from "../authenticator/AuthenticatorStore"
import stateFormValueChanged  from "../actions/StateFormValuedChangeAction"
import onViolation from "../actions/ViolationAction" 
import AccountSignup from "./AccountSignup"
import {IAccountSignupProps, IAccountSignupState} from "./AccountSignup"
import createAccount from "./actions/CreateAccountAction"

function mapStateToProps(state : AuthenticatorStore) {
    return {
       email : state.account != null ? state.account.email : null,
       joinExistingFamily : state.joinExistingFamily,
       familyName: state.account != null ? state.account.family : null
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
         onFamilyNameChange: (value) : void =>  {
             dispatch(stateFormValueChanged("account.family", value))
         },
         onJoinFamilyChange: (value) : void =>  {
             dispatch(stateFormValueChanged("joinExistingFamily", value))
         },
         onSave: (email, familyName, joinExistingFamily) : void => {
             if(familyName === undefined || familyName === null) {
                 dispatch(onViolation("Family Name is required!"))
             } else {
                 dispatch(createAccount(email,familyName, joinExistingFamily))
             }
         }
    }
}

const AccountSignupContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( AccountSignup )

export default AccountSignupContainer
