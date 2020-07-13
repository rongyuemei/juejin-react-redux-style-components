import styled from "styled-components";

export const Wrap = styled.div`
    background: #f4f5f5;
`
export const NavWrap = styled.div`
    color: #333;
    font-size: 14px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    .nav-child-wrap{
        width: 960px;
        margin: 0 auto;
        .child-item{
            height: 40px;
            cursor: pointer;
            line-height: 40px;
            display: inline-block;
            padding-right: 10px;
            margin-right: 10px;
        }
    }
`
export const HomeWrap = styled.div`
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: #f4f5f5;
    .left-wrap{
        width: 698px;
        margin-right: 20px;
        background: #f4f5f5;
        .header-list{
            color: #333;
            display: flex;
            height: 40px;
            margin-top: 20px;
            background: #fff;
            border-bottom: 1px solid #f1f1f1;
            .header-item{
                font-size: 14px;
                display: flex;
                align-items: center;
                .item-text{
                    padding: 0 20px;
                    display: inline-block;
                    border-right: 1px solid #f1f1f1;
                }
                .not-border{
                    border-right: none;
                }
            }
        } 
        .article-list{
            background: #fff;
            .article-item{
                padding: 20px;
                border-bottom: 1px solid #f1f1f1;
            }
            .text{
                color: #333;
                font-size: 12px;
                padding-right: 10px;
            }
            .title{
                padding: 10px 0;
                font-size: 16px;
            }
            .operate-wrap{
                padding: 10px 0 0 0;
                .operate-item{
                    width: 50px;
                    color: #b2bac2;
                    font-size: 13px;
                    font-weight: 700;
                    text-align: center;
                    display: inline-block;
                    padding: 5px 10px;
                    border: 1px solid #f1f1f1;
                    .iconfont{
                        font-size: 14px;
                        margin-right: 4px;
                    }
                }
            }
        } 
    }
    .right-wrap{
        width: 240px;
        margin-top: 20px;
        background: #f4f5f5;
        .login-wrap{
            color: #333;
            font-size: 14px;
            padding: 16px;
            background: #fff;
            margin-bottom: 20px;
            .title{
                font-weight: 700;
                margin-bottom: 10px;
            }
            .content{
                margin-bottom: 10px;
            }
            .form-ipt{
                width: 100%;
                height: 38px;
                padding: 0 10px;
                box-sizing: border-box;
                margin-bottom: 10px;
                outline: none;
                border: 1px solid #f1f1f1;
                background-color: #fbfbfb;
            }
            .register-btn{
                width: 100%;
                color: #fff;
                text-align: center;
                margin-bottom: 20px;
                background-color: #0371df;
                padding: 8px 0;
                cursor: pointer;
                outline: none;
                border: none;
            }
            .tips{
                margin-bottom: 10px;
            }
            .deal{
                color: #007fff;
                cursor: pointer;
            }
        }
        .ad-wrap{
            height: 200px;
            margin-bottom: 20px;
            .img{
                width: 100%;
            }
        }
        .tags-wrap{
            background: #fff;
            margin-bottom: 20px;
            .title{
                font-size: 14px;
                padding: 20px 14px;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid #f1f1f1;
                .active{
                    color: #007fff;
                    font-size: 12px;
                    cursor: pointer;
                }
            }
            .tags-list{
                padding: 20px 14px;
                .tags-item{
                    color: #333;
                    display: inline-block;
                    font-size: 12px;
                    cursor: pointer;
                    padding: 10px 20px;
                    margin: 0 10px 10px 0;
                    border-radius: 40px;
                    background: #f3f6f3;
                    &:hover{
                        color: #fff;
                        background-color: #0c0;
                    }
                }
            }
        }
        .qrcode-wrap{
            padding: 14px;
            margin-bottom: 20px;
            background: #fff;
            .qrcode-img{
                width: 50px;
                height: 50px;
            }
            .text-wrap{
                display: inline-block;
                cursor: pointer;
                margin-left: 8px;
                vertical-align: top;
                .title{
                    font-size: 14px;
                    font-weight: 700;
                    padding: 6px 0 10px 0;
                }
                .content{
                    color: #909090;
                    font-size: 12px;
                }
            }
        }
        .recommended-wrap{
            background: #fff;
            .recommended-item{
                padding: 14px;
                line-height: 1;
                cursor: pointer;
                .img{
                    width: 36px;
                    height: 36px;
                }
                .title{
                    line-height: 36px;
                    color: #333;
                    display: inline-block;
                    vertical-align: top;
                    font-size: 14px;
                    margin-left: 8px;
                }
                &:hover{
                    background-color: hsla(0,0%,84.7%,.1);
                }
            }
        }
    }
`