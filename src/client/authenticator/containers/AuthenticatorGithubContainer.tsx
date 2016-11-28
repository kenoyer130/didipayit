import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import AuthenticatorGithub from "./AuthenticatorGithub"
import { IAuthenticatorGithubProps } from "./AuthenticatorGithub"

function mapStateToProps(state : AuthenticatorStore) : IAuthenticatorGithubProps {
    return {
        githubClientId : state.authenticatorSettings ?
                            state.authenticatorSettings.githubClientId :
                            null
    }
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

const AuthenticatorGithubContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( AuthenticatorGithub )

export default AuthenticatorGithubContainer
