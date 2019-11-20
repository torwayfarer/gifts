import React, { Component} from "react";


import Apply from './components/Apply';
import PostApply from './components/PostApply';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/welcome' component={PostApply}/>
          <Route exact path="/" component={Apply}/>

        </Switch>
      </Router>
    );
  }
}
export default App;
