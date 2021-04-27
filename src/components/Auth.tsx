import * as React from 'react';
import Container from '@material-ui/core/Container';
import Signup from './Signup';
import Login from './Login';
import { Jumbotron } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export interface AuthProps {
    
}
 
const Auth: React.SFC<AuthProps> = (props) => {
    return ( <Container className="auth-container">
    <div>
                <Jumbotron  className="w-100" style={{backgroundImage: `url('https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80')` }}>
            <Container>
              <Typography><h1 className="display-3 text-dark"  >Welcome to BetaBreak</h1>
              <h2 className="lead text-dark">The ultimate top out!</h2>
              <hr className="my-2" />
              <br/>
              <p className="text-dark">BetaBreak is the place to record and track all your climbs. Indoor... Outdoor... Sport... Boulder... Trad... <br></br> We've created a zone specifically to enchance your climbing performance through organization and efficiency. <br></br></p>
              <br/>
              <br/>
              <p className="text-dark">Climb. Tick. Send. Tick. So on... The routes are unlimited... <br></br></p>
              
              </Typography>
            </Container>
          </Jumbotron>
        </div>
                    <Grid container> 
                        {/* {showLogin === true ? <Login updateToken={props.updateToken} handleToggle={handleToggle} /> : <Signup updateToken={props.updateToken} handleToggle={handleToggle}/>} */}
                    </Grid>
                    
                    
                    
            </Container>
    )};
export default Auth;