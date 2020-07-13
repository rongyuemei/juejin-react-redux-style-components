import axios from "axios"
import {INITDATA, NAVINDEX, MOUSELEAVEX} from "./actionTypes";

const getHomeData = (data) => ({
    data:data,
    type: INITDATA
})

export const getInitDataAction = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            dispatch(getHomeData(res.data.data));
        })
    }
}

export const navIndexAction = (index) => ({
    type: NAVINDEX,
    index
})

export const mouseLeavexAction = () => ({
    type: MOUSELEAVEX
})