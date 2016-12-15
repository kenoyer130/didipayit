import { connect } from "react-redux";
import { Store } from "../../Store"
import AuthenticatorPanel from "./AuthenticatorPanel"
import { exec } from "../../actions/FetchRequestAction"
import authenticate from "../actions/AccountAuthenticateGetAction"

function mapStateToProps(state: Store) {
    return {
        authenticatorSettingsLoaded: state.authenticator.authenticatorSettingsLoaded,
        isLocal: state.authenticator.isLocal
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
