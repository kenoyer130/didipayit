import { connect } from "react-redux";
import { AuthenticatorStore } from "../authenticator/AuthenticatorStore"
import Main from "./Main"

function mapStateToProps(state: AuthenticatorStore) {
    return {
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

export default MainContainer 
