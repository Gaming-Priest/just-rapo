import React from "react";
import { hot } from 'react-hot-loader/root';
import DocHeader from './components/display/header';
import Layout from './components/Layout'
import MenuBar from './components/display/menu'
import  SideBox from './components/pages/ads'
import Home from './components/pages/home'
import DocSidebar from './components/display/sidebar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {


   return (
      <React.Fragment>
        <Router>
           <DocHeader />
           <DocSidebar>
              <Layout>
                  <Switch>
                     <Route path="/" component={Home} />
                  </Switch>
              </Layout>
              <SideBox />
            </DocSidebar>
           </Router>
        </React.Fragment>
   );
}

export default hot(App);
//