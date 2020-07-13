import {INITDATA, NAVINDEX, MOUSELEAVEX} from "./actionTypes";
import {fromJS} from "immutable";

const defaultStore = fromJS({
    childNavList: [],
    contentList: [],
    hotTags: [],
    recommendedList: [],
    navIndex: ""
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case INITDATA:
            return state.merge({
                childNavList: fromJS(action.data.childNavList),
                contentList: fromJS(action.data.contentList),
                hotTags: fromJS(action.data.hotTags),
                recommendedList: fromJS(action.data.recommendedList)
            })
        case NAVINDEX:
            return state.set("navIndex", action.index)
        case MOUSELEAVEX:
            return state.set("navIndex", "")
        default:
            return state
    }
}