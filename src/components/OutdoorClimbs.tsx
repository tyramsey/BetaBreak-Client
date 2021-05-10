import * as React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ClimbEdit from './ClimbEdit';

import { OutdoorClimb } from './ClimbInterfaces';
import APIURL from '../helpers/environments';

export interface OutdoorClimbProps {
    sessionToken: string;
    fetchClimbs: Function;
    climb: OutdoorClimb;
    climbs: OutdoorClimb[];
    editUpdateClimb: Function;
    updateOn: Function;
    

}
 
export interface OutdoorClimbState {
    open : boolean;
}
 


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
      
        return (<div>
        

<TableContainer>
<Table  aria-label="simple table">
<TableHead>
    <TableRow>
      <TableCell>#</TableCell>
      <TableCell>RouteName</TableCell>
      <TableCell align="right">Location</TableCell>
      <TableCell align="right">Date</TableCell>
      <TableCell align="right">Type</TableCell>
      <TableCell align="right">Difficulty</TableCell>
      <TableCell align="right">Pitches</TableCell>
      <TableCell align="right">Grade</TableCell>
      <TableCell align="right">Style</TableCell>
      <TableCell align="right">Beta</TableCell>
      <TableCell align="right">Duration</TableCell>
      <TableCell align="right">Rating</TableCell>
      <TableCell align="right">Image</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    
      <TableRow key={this.props.climb.id}>
        <TableCell component="th" scope="row">
          {this.props.climb.id}
        </TableCell>
        <TableCell align="right">{this.props.climb.routename} </TableCell>
        <TableCell align="right">{this.props.climb.location} </TableCell>
        <TableCell align="right">{this.props.climb.date}</TableCell>
        <TableCell align="right">{this.props.climb.type}</TableCell>
        <TableCell align="right">{this.props.climb.difficulty}</TableCell>
        <TableCell align="right">{this.props.climb.pitches}</TableCell>
        <TableCell align="right">{this.props.climb.grade}</TableCell>
        <TableCell align="right">{this.props.climb.style}</TableCell>
        <TableCell align="right">{this.props.climb.beta}</TableCell>
        <TableCell align="right">{this.props.climb.duration}</TableCell>
        <TableCell align="right">{this.props.climb.rating}</TableCell>
        <TableCell align="right"><img src={this.props.climb.image_id} alt='' style={{width: '200px'}}/></TableCell>
        <TableCell><ClimbEdit sessionToken={this.props.sessionToken} climbToUpdate={this.props.editUpdateClimb} climb={this.props.climb}/><br/><Button  variant='contained' size='small'  onClick={() => this.deleteClimb(this.props.climb)}>Delete</Button></TableCell>
        {/* <Button variant='contained' size='small' onClick={() => {this.props.editUpdateClimb(this.props.climb); this.handleClickOpen() ; this.props.updateOn()}} >Update</Button> */}
  
      </TableRow>
    
  </TableBody>
  
</Table>
</TableContainer>
      </div>
      );
    }
}
 
export default OutdoorClimbs;