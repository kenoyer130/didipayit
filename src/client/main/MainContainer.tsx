import { connect } from "react-redux";
import { Store } from "../Store"
import Main from "./Main"

function mapStateToProps(state: Store) {
    return {
        selectedDate: state.main.selectedDate,
        selectedView: state.main.selectedView,
        billInstances: state.main.billInstances
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
