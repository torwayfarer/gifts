
import React, { Component, Button, Div} from "react";
import { Container} from 'reactstrap';
import{ Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import axios from "axios";
import {Spring} from 'react-spring/renderprops';
import Apply from './Apply';
import Countdown from './Countdown';
import PostApply from './PostApply';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        firstName: "",
        lastName: "",
        telephone: "",
        completed: false
      },
      formList: []
    };
  }
    componentDidMount() {
    this.refreshList();
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/forms/")
      .then(res => this.setState({ formList: res.data }))
      .catch(err => console.log(err));
  };
  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

    render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <Router>
          <Switch>
          <Route path='/welcome' component={PostApply}/>
          <Route path="/" component={Apply}/>
          </Switch>
      </Router>
      )
    }
  }
  export default App;