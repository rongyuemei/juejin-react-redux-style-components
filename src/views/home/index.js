import React, {Component} from "react";
import {HomeWrap} from "./style"

class Home extends Component{
    render() {
        return(
            <HomeWrap>
                <div className={"left-wrap"}>
                    <header>
                        <ul>
                            <li>热门</li>
                            <li>最新</li>
                            <li>热榜</li>
                        </ul>
                    </header>
                </div>
                <div className={"right-wrap"}>

                </div>
            </HomeWrap>
        )
    }
}

export default Home;