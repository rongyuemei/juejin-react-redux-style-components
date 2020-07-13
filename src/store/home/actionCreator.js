import axios from "axios"
import {INITDATA} from "./actionTypes";

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
