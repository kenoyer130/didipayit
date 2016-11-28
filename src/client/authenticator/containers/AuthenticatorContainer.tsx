import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import Authenticator from "./Authenticator"
import {IAuthenticatorProps} from "./Authenticator"

function mapStateToProps(state : AuthenticatorStore) : IAuthenticatorProps {
    return {
       hasAuthToken: state.hasAuthToken,
       authenticatorSettingsLoaded : state.authenticatorSettingsLoaded
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
