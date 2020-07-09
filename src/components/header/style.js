import styled from "styled-components"
import logoUrl from "../../statics/images/logo.svg"

export const HeaderWrap = styled.div`
    color: #909090;
    .nav-wrap{
        height: 60px;
        border-bottom: 1px solid #f1f1f1;
    }
    .header-inner-wrap{
        height: 60px;
        max-width: 960px;
        margin: 0 auto;
        .logo{
            width: 98px;
            height: 38px;
            float: left;
            // display: inline-block;
            margin-top: 11px;
            margin-right: 20px;
            background: url(${logoUrl});
            background-size: cover;
        }
        .nav-left{
            float: left;
        }
        .nav-right{
            float: right;
            .search-wrap{
                position: relative;
                margin-right: 20px;
                display: inline-block;
                .search{
                    width: 120px;
                    height: 30px;
                    color: #666;
                    outline: none;
                    padding: 0 26px 0 10px;;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    background: rgba(227,231,236,.2);
                }
                .search-icon{
                    position: absolute;
                    top: 8px;
                    right: 8px;              
                }
            }
        }
        .nav-item{
            line-height: 60px;
            padding: 0 10px;
            cursor: pointer;
            display: inline-block;
            &.active{
                color: #007fff;
            }
            &:hover{
                color: #007fff;
            }
        }
    }
    .nav-child-wrap{
        width: 960px;
        margin: 0 auto;
        .child-item{
            height: 40px;
            cursor: pointer;
            line-height: 40px;
            display: inline-block;
            padding: 0 10px;
            margin-right: 10px;
        }
    }
`