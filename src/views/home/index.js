import React, {PureComponent} from "react";
import {Wrap, HomeWrap, NavWrap} from "./style"
import {connect} from "react-redux"
import {getInitDataAction, navIndexAction, mouseLeavexAction, clickNavItemAction} from "../../store/home/actionCreator"
import adUrl1 from "../../statics/images/ad1.jpg"
import adUrl2 from "../../statics/images/ad2.jpg"
import qecodeUrl from "../../statics/images/qrcode.png"

class Home extends PureComponent{
    render() {
        const {
            childNavList,
            contentList,
            hotTags,
            recommendedList,
            handleHoverNavItem,
            navIndex,
            handleMouseLeave,
            handleClickNavItem,
            clickNavIndex
        } = this.props;
        return(
            <Wrap>
                <NavWrap>
                    <ul className={"nav-child-wrap"}>
                        {
                            childNavList.map((item, index) => {
                                return (
                                    <li
                                        key={item.get("id")}
                                        onMouseEnter={() => handleHoverNavItem(index)}
                                        onMouseLeave={() => handleMouseLeave(navIndex)}
                                        onClick={() => handleClickNavItem(index)}
                                        className={index === clickNavIndex ? "child-item active" :"child-item"}>
                                        {item.get("title")}
                                        <ol className={item.get("children").size && index === navIndex ? "box-wrap" : "box-wrap isShow"}>
                                            {
                                                item.get("children").map((i) => {
                                                    return <li key={i.get("id")} className="box-item">{i.get("name")}</li>
                                                })
                                            }
                                        </ol>
                                    </li>
                                )
                            })
                        }
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
                            {
                                contentList.map((item) => {
                                    return (
                                        <li className={"article-item"} key={item.get("id")}>
                                            <div className={"info-wrap"}>
                                                <span className={"text active"}>{item.get("column")} ·</span>
                                                <span className={"text"}>{item.get("author")} ·</span>
                                                <span className={"text"}>{item.get("createTime")} ·</span>
                                                <span className={"text"}>{item.get("technology")}/{item.get("language")}</span>
                                            </div>
                                            <div className={"title"}>{item.get("title")}</div>
                                            <div className={"operate-wrap"}>
                                                <span className={"operate-item"}>
                                                    <i className={"iconfont"}>&#xe8ad;</i>
                                                    {item.get("goods")}
                                                </span>
                                                <span className={"operate-item"} style={{marginLeft: "-1px"}}>
                                                    <i className={"iconfont"}>&#xe8bd;</i>
                                                    {item.get("comment")}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
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
                                <img className="img" src={adUrl1} alt=""/>
                            </a>
                        </div>
                        <div className="ad-wrap">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://juejin.im/pin/5f0528a66fb9a05a216a27b9">
                                <img className="img" src={adUrl2} alt=""/>
                            </a>
                        </div>
                        <div className="tags-wrap">
                            <div className="title">
                                <span>热门标签</span>
                                <span className="active">查看全部</span>
                            </div>
                            <ul className="tags-list">
                                {
                                    hotTags.map((item) => {
                                        return (
                                            <li className="tags-item" key={item.get("id")}>{item.get("name")}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="qrcode-wrap">
                            <img className="qrcode-img" src={qecodeUrl} alt=""/>
                            <div className="text-wrap">
                                <div className="title">下载掘金客户端</div>
                                <div className="content">提个帮助开发者成长的社区</div>
                            </div>
                        </div>
                        <ul className="recommended-wrap">
                            {
                                recommendedList.map((item) => {
                                    return (
                                        <li key={item.get("id")} className="recommended-item">
                                            <img className="img" src={item.get("imgUrl")} alt=""/>
                                            <span className="title">{item.get("name")}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
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
    childNavList: state.getIn(["homeReducer", "childNavList"]),
    contentList: state.getIn(["homeReducer", "contentList"]),
    hotTags: state.getIn(["homeReducer", "hotTags"]),
    recommendedList: state.getIn(["homeReducer", "recommendedList"]),
    navIndex: state.getIn(["homeReducer", "navIndex"]),
    clickNavIndex: state.getIn(["homeReducer", "clickNavIndex"])
})

const mapDispatchToProps = (dispatch) => ({
    getInitData(){
        dispatch(getInitDataAction());
    },
    handleHoverNavItem(index){
        dispatch(navIndexAction(index))
    },
    handleMouseLeave(){
        dispatch(mouseLeavexAction())
    },
    handleClickNavItem(index){
        dispatch(clickNavItemAction(index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);