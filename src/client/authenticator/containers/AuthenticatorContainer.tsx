import { connect } from "react-redux";
import { Store } from "../../Store"
import Authenticator from "./Authenticator"
import {IAuthenticatorProps} from "./Authenticator"

function mapStateToProps(state : Store) : IAuthenticatorProps {
    return {
       hasAuthToken: state.authenticator.hasAuthToken,
       authenticatorSettingsLoaded : state.authenticator.authenticatorSettingsLoaded
    }
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

const AuthenticatorContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( Authenticator )

export default AuthenticatorContainer
