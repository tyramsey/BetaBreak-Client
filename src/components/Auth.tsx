import * as React from 'react';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import Login from './Login';
import { Jumbotron } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


export interface AuthProps {
    updateToken: (newToken: string) => void; 
    updateRole: Function;
    classes: any;
    theme: any;
}
 
export interface AuthState {
    showLogin: boolean;
}
const styles = (theme:any) => ({
 
    palette: {
      primary: {
        main: '#aecbea',
      },
      secondary: {
        main: '#c2b092',
      },
    },
    table: {
      minWidth: 650,
    },
    main: {
      margin: 0,
    },
    button: {
      backgroundColor: '#caff00',
      color: '4f0091',
      height: '40px',
      width: '100px',
    },
    auth: {
        backgroundColor: '#00000',
        },
    text: {
        fontFamily: 'Impact'
    }
  })
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
        const {classes} = this.props;
        return ( <Container className={classes.auth}>
        <div>
                    <Jumbotron  className="w-100" style={{backgroundImage: `url('https://images.unsplash.com/photo-1579411289916-1cc31988d330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')` }}>
                <Container>
                  <Typography className={classes.text}><h1 className="display-3 text-light"  >Welcome to BetaBreak</h1>
                  <h2 className="lead text-light">The ultimate top out!</h2>
                  <hr className="my-2" />
                  <br/>
                  <p className="text-light">BetaBreak is the place to record and track all your climbs. Indoor... Outdoor... Sport... Boulder... Trad... <br></br> We've created a zone specifically to enchance your climbing performance through organization and efficiency. <br></br></p>
                  <br/>
                  <br/>
                  <p className="text-light">Climb. Tick. Send. Tick. So on... The routes are unlimited... <br></br></p>
                  
                  </Typography>
                </Container>
              </Jumbotron>
            </div>
                        <Grid container> 
                            {this.state.showLogin === true ? <Login updateToken={this.props.updateToken} updateRole={this.props.updateRole}handleToggle={this.handleToggle} /> : <Signup updateToken={this.props.updateToken} updateRole={this.props.updateRole}handleToggle={this.handleToggle}/>}
                        </Grid>
                        
                        
                        
                </Container>
        );
    }}
 
export default withStyles(styles, {withTheme: true}) (Auth);