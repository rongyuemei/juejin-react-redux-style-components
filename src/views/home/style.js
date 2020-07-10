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
    background: #f4f5f5;
    .left-wrap{
        width: 698px;
        margin-right: 20px;
        display: inline-block;
        background: #fff;
        .header-list{
            color: #333;
            display: flex;
            height: 40px;
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
            padding: 20px;
            .article-item{
                padding: 20px 0;
            }
            .text{
                color: #333;
                font-size: 14px;
                padding-right: 10px;
            }
        } 
    }
    .right-wrap{
        width: 240px;
        background: #fff;
        display: inline-block;
    }
`