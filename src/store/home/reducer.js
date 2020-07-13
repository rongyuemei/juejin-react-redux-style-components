import {INITDATA} from "./actionTypes";
import {fromJS} from "immutable";

const defaultStore = fromJS({
    childNavList: [],
    contentList: []
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case INITDATA:
            return state.merge({
                childNavList: fromJS(action.data.childNavList),
                contentList: fromJS(action.data.contentList)
            })
        default:
            return state
    }
}