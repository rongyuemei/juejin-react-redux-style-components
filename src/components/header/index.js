import React, {Component} from "react";
import {HeaderWrap} from "./style"

class Header extends Component{
    render() {
        return(
            <HeaderWrap>
                <div className={"nav-wrap"}>
                    <div className={"header-inner-wrap"}>
                        <a href="/" className={"logo"}> </a>
                        <ul className={"nav-left"}>
                            <li className={"nav-item active"}>首页</li>
                            <li className={"nav-item"}>沸点</li>
                            <li className={"nav-item"}>话题</li>
                            <li className={"nav-item"}>小册</li>
                            <li className={"nav-item"}>活动</li>
                        </ul>
                        <div className={"nav-right"}>
                            <div className={"search-wrap"}>
                                <input
                                    type="text"
                                    className={"search"}
                                    placeholder={"搜索掘金"}/>
                                <i className={"iconfont search-icon"}>&#xe63c;</i>
                            </div>
                            <div className={"nav-item active"}>
                                <i className={"iconfont"}>&#xe63a;</i>
                                写文章
                            </div>
                            <div className={"nav-item active"}>注册</div>
                            <div className={"nav-item active"}>登陆</div>
                        </div>
                    </div>
                </div>
            </HeaderWrap>
        )
    }
}

export default Header;