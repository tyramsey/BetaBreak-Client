import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import APIURL from '../helpers/environments';
import { Select } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';


interface SignUpProps {
  name?: any;
  value?: any;
  updateToken: (newToken: string) => void;
  handleToggle: () => void;
  updateRole: Function;
}
interface SignUpState {
  username: string;
  email: string;
  password: string;
  role: any;
  errors: {
    username: string;
    email: string;
    password: string;
  };
}
const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

export default class SignUp extends React.Component<SignUpProps, SignUpState> {

    constructor(props: SignUpProps) {
        super(props);
        const initialState = {
          username: "",
          email: "",
          password: "",
          role: "",
          errors: {
            username: "",
            email: "",
            password: "",
          },
        };
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
      }

  handleChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Username must be 5 characters long!" : "";
        break;
      case "email":
        errors.email = Regex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be eight characters long!" : "";
        break;
      default:
        break;
    }
    this.setState(Object.assign(this.state, { errors, [name]: value }));
    console.log(this.state.errors);
  };
  handleSubmit = (event: any) => {
      event.preventDefault();
      fetch(`${APIURL}/user/register`, {
         method: 'POST',
         body: JSON.stringify({user: {username: this.state.username, email: this.state.email, password: this.state.password, role: this.state.role}}),
         headers: new Headers({
             'Content-Type': 'application/json'
         })
      }).then(
          (response) => response.json()
      ).then((data) => {
          console.log(data.sessionToken)
          this.props.updateToken(data.sessionToken)
          this.props.updateRole(data.role)
      })
  };

  
  render() {
    const { errors } = this.state;
    return (
      <Container>
        <CssBaseline />
          <Typography>Sign Up</Typography>
          <br/>
          <form onSubmit={this.handleSubmit} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={this.handleChange}
              />
              {errors.username.length > 0 && (
                <span style={{ color: "red" }}>{errors.username}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                autoFocus
                onChange={this.handleChange}
              />
              {errors.email.length > 0 && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="password"
                name="password"
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                autoFocus
                onChange={this.handleChange}
              />
              {errors.password.length > 5 && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </Grid>
            <Grid>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                variant="outlined"
                required
                fullWidth
                name="role"
                onChange={(e) => this.setState({role: e.target.value})}
                value={this.state.role}
                label="Role"
              >
                <MenuItem value='1'>Guide</MenuItem>
                <MenuItem value='2'>Aspirant</MenuItem>
              </Select>
            </Grid>
            
              <Button
              type="submit"
              onClick={this.handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              >Register Me</Button>
            <Grid item>
              <Button 
              onClick={this.props.handleToggle}
              >
                Already a member? Login 
                
              </Button>
            </Grid>
            </Grid>
          </form>
      </Container>
    );
  }
}
