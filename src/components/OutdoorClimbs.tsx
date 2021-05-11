import * as React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClimbEdit from './ClimbEdit';
import { withStyles } from '@material-ui/core/styles';


import { OutdoorClimb } from './ClimbInterfaces';
import APIURL from '../helpers/environments';

export interface OutdoorClimbProps {
    sessionToken: string;
    fetchClimbs: Function;
    climb: OutdoorClimb;
    climbs: OutdoorClimb[];
    editUpdateClimb: Function;
    updateOn: Function;
    classes: any;
    theme: any;
    

}
 
export interface OutdoorClimbState {
    open : boolean;
}
 

const styles = (theme:any) => ({
 
  palette: {
    primary: {
      main: '#ff00ff',
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
    backgroundColor: '#910600',
    color: 'white',
    height: '40px',
    width: '100px'
  },
  heading: {
    color: 'white'
  },
  ticks: {
    color: '#ff00ff'
  }
})

class OutdoorClimbs extends React.Component<OutdoorClimbProps, OutdoorClimbState> {
    constructor(props: OutdoorClimbProps) {
        super(props);
        this.state = { open : false };
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClickClose = () => {
        this.setState({open: false});
    }

    deleteClimb = (climb: any) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
        fetch(`${APIURL}/outdoor/deleteout/${this.props.climb.id}`, {
  method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token ? token : ''
      })
    })
    .then(() => this.props.fetchClimbs())
    }

    render() { 
      const {classes} = this.props;
        return (<div>
        

<TableContainer>
<Table  aria-label="simple table">
<TableHead className={classes.heading}>
    <TableRow>
    <TableCell className={classes.heading} align="center">Image</TableCell>
      <TableCell className={classes.heading}>#</TableCell>
      <TableCell className={classes.heading}>RouteName</TableCell>
      <TableCell align="center" className={classes.heading}>Location</TableCell>
      <TableCell align="center" className={classes.heading}>Date</TableCell>
      <TableCell align="center" className={classes.heading}>Type</TableCell>
      <TableCell align="center" className={classes.heading}>Difficulty</TableCell>
      <TableCell align="center" className={classes.heading}>Pitches</TableCell>
      <TableCell align="center" className={classes.heading}>Grade</TableCell>
      <TableCell align="center" className={classes.heading}>Style</TableCell>
      <TableCell align="center" className={classes.heading}>Beta</TableCell>
      <TableCell align="center" className={classes.heading}>Duration</TableCell>
      <TableCell align="center" className={classes.heading}>Rating</TableCell>
      <TableCell align="center" className={classes.heading}>Actions</TableCell>
      
      
    </TableRow>
  </TableHead>
  <TableBody>
    
      <TableRow key={this.props.climb.id}>
      <TableCell align="center"><img src={this.props.climb.image_id} alt='' style={{width: '200px'}}/></TableCell>
        <TableCell component="th" scope="row" className={classes.ticks}>
          {this.props.climb.id}
        </TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.routename} </TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.location} </TableCell>
        
        <TableCell align="center" className={classes.ticks}>{this.props.climb.date}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.type}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.difficulty}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.pitches}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.grade}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.style}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.beta}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.duration}</TableCell>
        <TableCell align="center" className={classes.ticks}>{this.props.climb.rating}</TableCell>
        
        <TableCell ><ClimbEdit sessionToken={this.props.sessionToken} climbToUpdate={this.props.editUpdateClimb} climb={this.props.climb}/><br/><Button className={classes.button} onClick={() => this.deleteClimb(this.props.climb)}>Delete</Button></TableCell>
        {/* <Button variant='contained' size='small' onClick={() => {this.props.editUpdateClimb(this.props.climb); this.handleClickOpen() ; this.props.updateOn()}} >Update</Button> */}
  
      </TableRow>
    
  </TableBody>
  
</Table>
</TableContainer>
      </div>
      );
    }
}
 
export default withStyles(styles, {withTheme: true}) (OutdoorClimbs);