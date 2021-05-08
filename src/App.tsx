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
import {Route, Switch, Redirect} from 'react-router-dom'
import OutdoorClimbs from './components/OutdoorClimbs';
import GoalDisplay from './components/GoalDisplay';

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

export interface AppProps{

}
export interface AppState {
  sessionToken: string,
  role: string,
  json: string,
  results: []

}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props);

    this.state = {sessionToken: '', role: '', json: '', results: []}
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

  updateRole = (newRole: string) => {
    localStorage.setItem('role', newRole);
    console.log(newRole);
    this.setState({
      role: newRole
    })
  }
  // clearToken = () => {
  //   localStorage.clear();
  //   this.setState({
  //     sessionToken: ''
  //   });
  // }

  protectedViews = () => {
    return ( localStorage.getItem('sessionToken') ? <ClimbData sessionToken={this.state.sessionToken}/>
    : <Auth updateToken={this.updateToken} updateRole={this.updateRole}/>)
  }

  componentDidMount(){
    let sessionToken = localStorage.getItem('sessionToken')
    let role = localStorage.getItem('role')

    if (sessionToken){
      this.setState({sessionToken: sessionToken})
    }
    if (role){
      this.setState({
        role: role
      })
    }
  }

  render(){
  return (
    <div className='App'>
      
      <Navbar />
      <Switch>
      <Route exact path='/'>{this.protectedViews()}</Route>
      <Route exact path='/climbs' component={OutdoorClimbs}/>
      <Route exact path='/goals' component={GoalDisplay}/>
      
      
      {/* <Auth updateToken={this.updateToken}/> */}
      {/* <Signup updateToken={this.updateToken}/>
      <Login updateToken={this.updateToken}/> */}
  <br/>
  <br/>
      <Copyright/>
      </Switch>
    </div>
  );
}
}
export default App;
