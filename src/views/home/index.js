import React, {Component} from "react";
import {Wrap, HomeWrap, NavWrap} from "./style"
import {connect} from "react-redux"
import {getInitDataAction} from "../../store/home/actionCreator"

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
                                <div className={"title"}>我在项目中是这样配置Vue的</div>
                                <div className={"operate-wrap"}>
                                    <span className={"operate-item"}>
                                        <i className={"iconfont"}>&#xe8ad;</i>
                                        150
                                    </span>
                                    <span className={"operate-item"} style={{marginLeft: "-1px"}}>
                                        <i className={"iconfont"}>&#xe8bd;</i>
                                        20
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={"right-wrap"}>
                        <div className="login-wrap">
                            <div className="title">掘金 - juejin.im</div>
                            <div className="content">一个帮助开发者成长的社区</div>
                            <input className="form-ipt" type="text" placeholder={"用户名"}/>
                            <input className="form-ipt" type="text" placeholder={"手机号"}/>
                            <input className="form-ipt" type="text" placeholder={"密码（不少于6位）"}/>
                            <button className="register-btn" type="button">立即注册</button>
                            <div className="tips">注册登录即表示</div>
                            <div>
                                同意<span className="deal">用户协议</span>、<span className="deal">隐私政策</span>
                            </div>
                        </div>
                        <div className="ad-wrap">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://www.huodongxing.com/event/4551176078822?qd=juejin">
                                <img className="img" src="https://user-gold-cdn.xitu.io/1594377453587c4390402e8298c807884a951d008670c.jpg?imageView2/1/q/85/format/webp/interlace/1" alt=""/>
                            </a>
                        </div>
                        <div className="ad-wrap">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://juejin.im/pin/5f0528a66fb9a05a216a27b9">
                                <img className="img" src="https://user-gold-cdn.xitu.io/1594173791152fe8ef31723f2a425a9b6c090ac10af3f.jpg?imageView2/1/q/85/format/webp/interlace/1" alt=""/>
                            </a>
                        </div>
                    </div>
                </HomeWrap>
            </Wrap>
        )
    }

    componentDidMount() {
        this.props.getInitData()
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    getInitData(){
        dispatch(getInitDataAction());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);