import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Auth from './components/Auth';
import { render } from '@testing-library/react';
import ClimbData from './components/ClimbData';
import Navbar from './components/Navbar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        BETABREAK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

type UpdateToken = {
  
  sessionToken: string
}


class App extends React.Component<{}, UpdateToken> {

  constructor(props: string){
    super(props);
    let sessionToken = localStorage.getItem('sessionToken')
    this.state = {sessionToken: sessionToken ? sessionToken : ''}
  }

  // componentDidMount(){
  //   if (localStorage.getItem('token')){
  //     // this.state.sessionToken(localStorage.getItem('token'));
  //      const localStoredToken = localStorage.getItem('token')
  //      console.log(localStoredToken.sessionToken)
  //     this.setState({sessionToken: localStoredToken.sessionToken})
  //   }
  // }

  updateToken = (newToken: string) => {
    localStorage.setItem('sessionToken', newToken);
    console.log(newToken);
    this.setState({
      sessionToken: newToken
      });
    
  }

  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({
  //     sessionToken: ''
  //   });
  // }

  protectedViews = () => {
    return ( this.state.sessionToken === localStorage.getItem('token') ? <ClimbData updateToken={this.updateToken} sessionToken={this.state.sessionToken}/>
    : <Auth updateToken={this.updateToken}/>)
  }

  render(){
  return (
    <div>
      <Navbar />
      {this.protectedViews()}
      {/* <Auth updateToken={this.updateToken}/> */}
      {/* <Signup updateToken={this.updateToken}/>
      <Login updateToken={this.updateToken}/> */}
  <br/>
  <br/>
      <Copyright/>
    </div>
  );
}
}
export default App;
