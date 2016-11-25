import { connect } from "react-redux";
import { AuthenticatorStore } from "./AuthenticatorStore"
import Authenticator from "./Authenticator"

function mapStateToProps(state : AuthenticatorStore) {
    return {
        hasAuthToken : state.hasAuthToken
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
