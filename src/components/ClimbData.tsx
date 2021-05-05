import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OutdoorClimbs from './OutdoorClimbs';
import ClimbEdit from './ClimbEdit';
import CreateTick from './CreateTick';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import { OutdoorClimb } from './ClimbInterfaces';

export interface ClimbDataProps {
    // updateToken: (newToken: string) => void;
    sessionToken: string;
    // fetchClimbs: [];
}
 
export interface ClimbDataState {
    climbs: OutdoorClimb[];
    updateActive: boolean;
    climbToUpdate: {};
}



class ClimbData extends React.Component<ClimbDataProps, ClimbDataState> {
    constructor(props: ClimbDataProps) {
        super(props);
        this.state = { 
            climbs: [{
              location: '',
              routename: '',
              date: '',
              type: '',
              difficulty: '',
              pitches: 1,
              grade: 0,
              beta: '',
              style: '',
              duration: 0,
              rating: 1, 
              image_id: '',
              secret: false,
              id: 1

            }],
            updateActive: false,
            climbToUpdate: {}
        }

        
        // this.state = {sessionToken: ''};
        // this.state = {climbs: []};
        // this.state = {updateActive: false};
        // this.state = {climbToUpdate: {}}
    }

    fetchClimbs() {
      // let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');

        fetch('http://localhost:3000/outdoor/getout', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('sessionToken')}`
      })
    })
    .then(response => response.json())
    .then((climbData) => {
      // console.log(climbData)
      this.setState({climbs: climbData});
    });
    // this.displayTable = this.displayTable.bind(this)
  }
    editUpdateClimb = (climb: number) => {
    this.setState({climbToUpdate: climb});
    console.log(climb);
  };

  updateOn = () => this.setState({updateActive: true});
  updateOff = () => this.setState({updateActive: false});

componentDidMount = () => {
    this.fetchClimbs();
    console.log(this.state.climbs)
}

displayTable() {
    return this.state.climbs.length > 0 ? this.state.climbs.map((climb) => <OutdoorClimbs climb={climb} climbs={this.state.climbs} editUpdateClimb={this.editUpdateClimb} updateOn={this.updateOn} fetchClimbs={this.fetchClimbs.bind(this)} sessionToken={this.props.sessionToken} />) : null;
}
    render() { 
        return (
        <Container>
        <Grid container xs={12}>
           <Grid>
             <CreateTick sessionToken={this.props.sessionToken} />
             {/* fetchClimbs={this.fetchClimbs} */}
           </Grid>
           <Grid container item xs={9} alignItems="flex-start">
           <TableHead>
    <TableRow>
      <TableCell>Route Name</TableCell>
      <TableCell align="right">Location</TableCell>
      <TableCell align="right">Date</TableCell>
      <TableCell align="right">Type</TableCell>
      <TableCell align="right">Difficulty</TableCell>
      <TableCell align="right">Style</TableCell>
      <TableCell align="right">Grade</TableCell>
      <TableCell align="right">Beta</TableCell>
      
    </TableRow>
  </TableHead>
          {this.displayTable()}
          {this.state.updateActive ? <ClimbEdit climbToUpdate={this.state.climbToUpdate} updateOn ={this.updateOn} updateOff={this.updateOff} sessionToken={this.props.sessionToken} /> : <></>}
          </Grid>
           </Grid>
           <Button onClick={this.fetchClimbs.bind(this)}>Fetch Button</Button>
   
       </Container>);
    }
}
 
export default ClimbData;