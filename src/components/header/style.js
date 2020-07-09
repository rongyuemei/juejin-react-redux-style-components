import styled from "styled-components"
import logoUrl from "../../statics/images/logo.svg"

export const HeaderWrap = styled.div`
    height: 60px;
    color: #909090;
    border-bottom: 1px solid #f1f1f1;
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
                display: inline-block;
                .search{
                    width: 120px;
                    height: 30px;
                    color: #666;
                    outline: none;
                    padding: 0 10px;
                    border: 1px solid #ccc;
                    border-radius: 2px;
                    background: rgba(227,231,236,.2);
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
`