import {INITDATA} from "./actionTypes";

const defaultStore = {
    homeData: {}
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case INITDATA:
            let newState = Object.assign({}, state)
            newState.homeData = action.data
            return newState
        default:
            return state
    }
}