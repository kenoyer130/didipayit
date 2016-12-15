import { connect } from "react-redux";
import { Store } from "./Store"

import Root from "./Root"
import {IRootProps, IRootState} from "./Root"

function mapStateToProps(state : Store) : IRootProps {
    return {
      hasAuthToken : state.authenticator.hasAuthToken,
      hasAccount : state.authenticator.hasAccount
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
