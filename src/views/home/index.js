import React, {Component} from "react";
import {Wrap, HomeWrap, NavWrap} from "./style"

class Home extends Component{
    render() {
        return(
            <Wrap>
                <NavWrap>
                    <ul className={"nav-child-wrap"}>
                        <li className={"child-item"}>推荐</li>
                        <li className={"child-item"}>后端</li>
                        <li className={"child-item"}>前端</li>
                        <li className={"child-item"}>Android</li>
                        <li className={"child-item"}>iOS</li>
                        <li className={"child-item"}>人工智能</li>
                        <li className={"child-item"}>开发工具</li>
                        <li className={"child-item"}>代码人生</li>
                        <li className={"child-item"}>阅读</li>
                    </ul>
                </NavWrap>
                <HomeWrap>
                    <div className={"left-wrap"}>
                        <header>
                            <ul className={"header-list"}>
                                <li className={"header-item"}>
                                    <span className={"item-text"}>热门</span>
                                </li>
                                <li className={"header-item"}>
                                    <span className={"item-text"}>最新</span>
                                </li>
                                <li className={"header-item"}>
                                    <span className={"item-text not-border"}>热榜</span>
                                </li>
                            </ul>
                        </header>
                        <ul className={"article-list"}>
                            <li className={"article-item"}>
                                <div className={"info-wrap"}>
                                    <span className={"text active"}>专栏 ·</span>
                                    <span className={"text"}>shanyue ·</span>
                                    <span className={"text"}>1小时前 ·</span>
                                    <span className={"text"}>前端/HTTPS</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={"right-wrap"}>
                        2354235
                    </div>
                </HomeWrap>
            </Wrap>
        )
    }
}

export default Home;