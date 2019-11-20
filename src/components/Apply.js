import React, { Component, Div} from "react";
//import { Container} from 'reactstrap';
import{ Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap';
import axios from "axios";
import {Spring} from 'react-spring/renderprops';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PostApply from './PostApply';
import MenuItem from '@material-ui/core/MenuItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect,
} from "react-router-dom";
const sizes = [
  {
    value: '30*30',
    label: '30*30',
  },
  {
    value: '30*40',
    label: '30*40',
  },
  {
    value: '40*40',
    label: '40*40',
  },
  {
    value: '40*50',
    label: '40*50',
  },
    {
    value: '50*50',
    label: '50*50',
  },
    {
    value: '50*60',
    label: '50*60',
  },
    {
    value: '60*60',
    label: '60*60',
  },
    {
    value: '40*60',
    label: '40*60',
  },
  {
    value: '50*70',
    label: '50*70',
  },
];



const useStyles = makeStyles(theme => ({
  '@global': {
  },
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    backgroundColor: '#ffffff'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));


class Apply extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          firstName: '',
          lastName: '',
          telephone: '',
          Collage: false,
          Electronic_design: false,
          DreamArt: false,
          size_of_picture: '30*30',
          Print_no_edit: false,
          redirectWelcome: false,
        };
      }

      handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }


     handleClick = () => {
        this.setState({
          value:'',
        });
      };

      handleChange2 = name =>(event) => {

        const value = event.target.checked;

        this.setState({
          [name]: value
        });
      }

      handleChange3 = name =>(event) => {
        const value = event.target.value;

        this.setState({
          [name]: value
        });
      }


     handleClick = () => {
        this.setState({
          value:'',
        });
      };

    handleSubmit= (event) => {
      event.preventDefault();
      var item = {
        'firstName': this.state.firstName,
        'lastName': this.state.lastName,
        'telephone': this.state.telephone,
        'Collage': this.state.Collage,
        'Electronic_design': this.state.Electronic_design,
        'DreamArt': this.state.DreamArt,
        'Print_no_edit': this.state.Print_no_edit,
        'size_of_picture': this.state.size_of_picture,
        'completed': false,
      }
      if (event.id) {
        console.log('alskdklq' + event.id)
        axios
          .put(`https://gifts-with-love.herokuapp.com/api/forms/${this.state.telephone}/`, item);
        return;
      }
      console.log('alskdklq1111')
      axios
        .post("https://gifts-with-love.herokuapp.com/api/forms/", item)
      this.setState({
        firstName: '',
        lastName: '',
        telephone: '',
        Collage: false,
        Electronic_design: false,
        DreamArt: false,
        Print_no_edit: false,
        redirectWelcome: true,
        size_of_picture: '',
      })
      return;
  }

      render() {
        if (this.state.redirectWelcome === true) {
            var date = new Date()
            console.log('creating date' + date);
            return <Redirect to={{
              pathname: "/welcome",
              state: date
            }} />
        }
        return (
            <div>
              <h1 className="text-white text-uppercase text-center my-4">Выберите подарок</h1>
              <div className="row">
                <div className="col-md-6 col-sm-10 mx-auto p-0">
                  <div className="card p-3 custom1">
                    <Avatar>
                      <LockOutlinedIcon />
                    </Avatar>


                    <form onSubmit={this.handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="Имя"
                            autoFocus
                            onChange={this.handleInputChange}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Фамилия"
                            name="lastName"
                            onChange={this.handleInputChange}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="telephone"
                            label="Номер телефона"
                            onChange={this.handleInputChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormGroup row>
                          <FormLabel component="legend">Какой подарок Вас интересует</FormLabel>
                            <FormControlLabel
                              control={

                                <Checkbox

                                  checked={this.Collage}
                                  onChange={this.handleChange2("Collage")}
                                  value="Collage"
                                />
                              }
                              label="Коллаж, печать на холсте"
                            />
                            <FormControlLabel
                              control={

                                <Checkbox

                                  checked={this.Electronic_design}
                                  onChange={this.handleChange2("Electronic_design")}
                                  value="Electronic_design"
                                />
                              }
                              label="Коллаж в электронном виде"
                            />
                            <FormControlLabel
                              control={

                                <Checkbox

                                  checked={this.DreamArt}
                                  onChange={this.handleChange2("DreamArt")}
                                  value="DreamArt"
                                />
                              }
                              label="Портрет Dream Art на холсте"
                            />
                            <FormControlLabel
                              control={

                                <Checkbox

                                  checked={this.Print_no_edit}
                                  onChange={this.handleChange2("Print_no_edit")}
                                  value="Print_no_edit"
                                />
                              }
                              label="Печать Вашего фото на холсте без обработки"
                            />
                          </FormGroup>
                          <FormLabel component="legend">Выберите размер холста</FormLabel>
                                  <TextField

                                    select
                                    label="Размер"
                                    value={this.size_of_picture}
                                    onChange={this.handleChange3("size_of_picture")}
                                    value={this.size_of_picture}
                                    SelectProps={{
                                      MenuProps: {
                                      },
                                    }}
                                    helperText="Выберите размер холста"
                                    margin="normal"
                                  >
                                    {sizes.map(option => (
                                      <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                      </MenuItem>
                                    ))}
                                </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <FormLabel component="legend">Privacy</FormLabel>
                          <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Я хочу получать новости об актуальных акциях и скидках."
                          />
                        </Grid>
                      </Grid>

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          id='abc'
                        >
                        Отправить заявку
                        </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
      }
    }
export default withRouter(Apply);
