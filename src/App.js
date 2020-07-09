import React, {Component, Fragment} from 'react';
import {GlobalStyle} from "./globalStyle"
import {iconfontStyle} from "./statics/iconfont/iconfont"
import Header from "./components/header"

class App extends Component{
  render() {
      return (
          <Fragment>
              <GlobalStyle/>
              <iconfontStyle/>
              <Header></Header>
          </Fragment>
      )
  }
}

export default App;
