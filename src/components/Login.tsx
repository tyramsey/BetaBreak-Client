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

interface LoginProps {
  name?: string;
  value?: string;
  updateToken: (newToken: string) => void
  handleToggle: () => void;
}
interface LoginState {
  username: string;
  email: string;
  password: string;
  errors: {
    username: string;
    email: string;
    password: string;
  };
}
const Regex = RegExp(
  /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

export default class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        const initialState = {
          username: "",
          email: "",
          password: "",
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
      fetch('http://localhost:3000/user/login', {
         method: 'POST',
         body: JSON.stringify({user: {username: this.state.username, password: this.state.password}}),
         headers: new Headers({
             'Content-Type': 'application/json'
         })
      }).then(
          (response) => response.json()
      ).then((data) => {
        this.props.updateToken(data.sessionToken)
        console.log(data.sessionToken)
      })
  };

  
  render() {
    console.log(this.props);
    const { errors } = this.state;
    return (
      <Container>
        <CssBaseline />
          <Typography>Login</Typography>
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
            
              <Button
              type="submit"
              onClick={this.handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              >Login</Button>
            <Grid item>
              <Button 
              onClick={this.props.handleToggle}
              >
                New to the App? Register Here! 
                
              </Button>
            </Grid>
            </Grid>
          </form>
      </Container>
    );
  }
}
