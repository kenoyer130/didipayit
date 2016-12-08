import { connect } from "react-redux";
import { AuthenticatorStore } from "../authenticator/AuthenticatorStore"
import ValidationPanel from "./ValidationPanel"

function mapStateToProps(state : AuthenticatorStore) {
    return {
       violation: state.violation
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
    }
}

const ValidationPanelContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( ValidationPanel )

export default ValidationPanelContainer
