import React, {Component, Fragment} from 'react';
import {GlobalStyle} from "./globalStyle"
import {IconfontStyle} from "./statics/iconfont/iconfont"
import Header from "./components/header"
import {HashRouter, Route} from 'react-router-dom';
import Home from "./views/home"

class App extends Component{
  render() {
      return (
          <Fragment>
              <GlobalStyle/>
              <IconfontStyle/>
              <Header></Header>
              <HashRouter>
                  <Route exact path="/" component={Home}/>
              </HashRouter>
          </Fragment>
      )
  }
}

export default App;
