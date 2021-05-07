import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import betabreak from '../assets/betabreaklogo.png'

export interface NavbarProps {
    classes: any;
    theme: any;

}
 
export interface NavbarState {
    isOpen: boolean;
}
//  type clearToken = {
//   new (): Location; prototype: Location; 
//  }

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
      const {classes} = this.props;
      
        return ( <AppBar position="static" style={{backgroundColor: '#caff00'}} >
        <Toolbar style={{color: '#000000'}}>
        <img src={betabreak} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            BetaBreak
          </Typography>
          <Button className={classes.menuButton} variant='contained' color='primary' style={{backgroundColor: '#ff00ff'}} onClick={this.clearToken}>Logout</Button>
        </Toolbar>
      </AppBar> );
    }
}
 
export default withStyles(styles, {withTheme: true}) (Navbar);