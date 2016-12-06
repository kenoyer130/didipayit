import { connect } from "react-redux";
import { AuthenticatorStore } from "./authenticator/AuthenticatorStore"

import Root from "./Root"
import {IRootProps, IRootState} from "./Root"

function mapStateToProps(state : AuthenticatorStore) : IRootProps {
    return {
      hasAuthToken : state.hasAuthToken,
      hasAccount : state.hasAccount
    }
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

const RootContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)( Root )

export default RootContainer
