import { connect } from "react-redux";
import { AuthenticatorStore } from "../AuthenticatorStore"
import AuthenticatorPanel from "./AuthenticatorPanel"

function mapStateToProps(state : AuthenticatorStore) {
    return {
        authenticatorSettingsLoaded : state.authenticatorSettingsLoaded
    }
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

const AuthenticatorPanelContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( AuthenticatorPanel )

export default AuthenticatorPanelContainer
