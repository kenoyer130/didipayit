import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import AuthenticatorPanel from "./AuthenticatorPanel"
import { exec } from "../../actions/FetchRequestAction"
import authenticate from "../actions/AccountAuthenticateGetAction"

function mapStateToProps(state: AuthenticatorStore) {
    return {
        authenticatorSettingsLoaded: state.authenticatorSettingsLoaded,
        isLocal: state.isLocal
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onAuthenticated: (token, email): void => {
            dispatch(authenticate(token, email))
        }
    }
}

const AuthenticatorPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticatorPanel)

export default AuthenticatorPanelContainer
