import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import AuthenticatorPanel from "./AuthenticatorPanel"
import { exec } from "../../actions/FetchRequestAction"
import authenticated from "../actions/HasAccountResponseAction"
  
function mapStateToProps(state : AuthenticatorStore) {
    return {
        authenticatorSettingsLoaded : state.authenticatorSettingsLoaded,
        isLocal : state.isLocal
    }
}

function mapDispatchToProps(dispatch: any) {
    return {

       onAuthenticated: (token, email) : void =>  {
           dispatch(exec("api/account/" + email, authenticated, {
               token: token,
               email: email
           }))
       }
    };
}

const AuthenticatorPanelContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( AuthenticatorPanel )

export default AuthenticatorPanelContainer
