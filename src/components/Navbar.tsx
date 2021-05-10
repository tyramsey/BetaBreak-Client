import * as React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import betabreak from '../assets/betaTransparent.png';

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
        main: '#5352a1',
      },
      secondary: {
        main: '#5352a1',
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
      
        return (
           <AppBar position="static" style={{backgroundColor: '#A0A152'}} >
        <Toolbar style={{color: '#5352A1'}}>
        <img src={betabreak} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            BetaBreak
          </Typography>
          <Button className={classes.menuButton} variant='contained' color='primary' style={{backgroundColor: '#5352a1'}} onClick={this.clearToken}>Logout</Button>
        </Toolbar>
      </AppBar> );
    }
}
 
export default withStyles(styles, {withTheme: true}) (Navbar);