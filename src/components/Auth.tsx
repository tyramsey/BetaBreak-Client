import * as React from 'react';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import Login from './Login';
import { Jumbotron } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './styles.css';

const styles = (theme:any) => ({
 
    palette: {
      primary: {
        main: '#aecbea',
      },
      secondary: {
        main: '#c2b092',
      },
    },    
    root: {
      flexGrow: 1, 
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 40,
      marginRight: '20px'
    
  }
})

export interface AuthProps {
    updateToken: (newToken: string) => void; 
    updateRole: Function;
}
 
export interface AuthState {
    showLogin: boolean;
}
 
class Auth extends React.Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = { showLogin: false };
    }

    handleToggle = () => {if(this.state.showLogin === true){
        this.setState({ showLogin: false })
    } else {
        this.setState({showLogin: true })
    }}

    render() { 
        return ( <Container className="auth-container">
        <div>
                    <Jumbotron  className="w-100" style={{backgroundImage: `url('https://images.unsplash.com/photo-1579411289916-1cc31988d330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')` }}>
                <Container>
                  <Typography><h1 className="display-3 text-light" >Welcome to BetaBreak</h1>
                  <h2 className="lead text-light">Manage you ticklist</h2>
                  <hr className="my-2" />
                  <br/>
                  <p className="text-light">BetaBreak is a super simple way to track your progress through guide certifications. <br></br></p>
                  <br/>
                  <br/>
                  <p className="text-light">Climb. Send. Tick. Cert. Guide. <br></br></p>
                  
                  </Typography>
                </Container>
              </Jumbotron>
            </div>
                        <Grid container> 
                            {this.state.showLogin === true ? <Login updateToken={this.props.updateToken} updateRole={this.props.updateRole} handleToggle={this.handleToggle} /> : <Signup updateToken={this.props.updateToken} updateRole={this.props.updateRole} handleToggle={this.handleToggle}/>}
                        </Grid>
                        
                        
                        
                </Container>
        );
    }}
 
export default Auth;