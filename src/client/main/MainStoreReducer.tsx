import { MainStore, DefaultMainState } from "./MainStore"

function MainReducer(state: MainStore = DefaultMainState, action: Redux.Action): MainStore {
    switch (action.type) {
        default:
            return state;
    }
}

export default MainReducer;
