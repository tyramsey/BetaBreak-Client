import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export interface NavbarProps {
    
}
 
export interface NavbarState {
    isOpen: boolean;
}
//  type clearToken = {
//   new (): Location; prototype: Location; 
//  }

class Navbar extends React.Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = {isOpen: true};
    }

    Toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    clearToken = () => {
        localStorage.clear();
        window.location.reload(true);
      }

    render() { 
        return ( <AppBar position="static" style={{backgroundColor: '#aecbea'}} >
        <Toolbar style={{color: '#000000'}}>
        {/* <img src={birdr} alt="logo" className={classes.logo} /> */}
          <Typography variant="h6">
            BetaBreak
          </Typography>
          <Button variant='contained' color='primary' onClick={this.clearToken}>Logout</Button>
        </Toolbar>
      </AppBar> );
    }
}
 
export default Navbar;