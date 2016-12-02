import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import AuthenticatorGithub from "./AuthenticatorGithub"
import { IAuthenticatorGithubProps } from "./AuthenticatorGithub"
import authenticate  from "../actions/AuthenticatedAction"
function mapStateToProps(state : AuthenticatorStore) {
    return {
        githubClientId : state.authenticatorSettings ?
                            state.authenticatorSettings.githubClientId :
                            null
    }
}

function mapDispatchToProps(dispatch) {
    return {
       onAuthenticated: (email, token) : void => dispatch(authenticate(email, token)) 
    };
}

const AuthenticatorGithubContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( AuthenticatorGithub )

export default AuthenticatorGithubContainer
