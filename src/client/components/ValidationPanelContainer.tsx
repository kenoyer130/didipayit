import { connect } from "react-redux";
import { Store } from "../Store"
import ValidationPanel from "./ValidationPanel"

function mapStateToProps(state : Store) {
    return {
       violation: state.newAccount.violation
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
