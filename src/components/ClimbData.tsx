import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OutdoorClimbs from './OutdoorClimbs';

import CreateTick from './CreateTick';

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
              secret: false

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
      console.log(climbData)
      // this.setState({climbToUpdate: climbData}));
    });
  }
//     editUpdateClimb = (climb: number) => {
//     this.setState({climbToUpdate: climb});
//     console.log(climb);
//   };

//   updateOn = () => this.setState({updateActive: true});
//   updateOff = () => this.setState({updateActive: false});

// componentDidMount = () => {
//     this.fetchClimbs();
// }

// displayCards() {
//     return this.state.climbs.length > 0 ? this.state.climbs.map((climb) => <OutdoorClimbs climb={climb} climbs={this.state.climbs} editUpdateClimb={this.editUpdateClimb} updateOn={this.updateOn} fetchClimbs={this.fetchClimbs} sessionToken={this.props.sessionToken} />) : null;
// }
    render() { 
        return (
        <Container>
        <Grid container xs={12}>
           <Grid>
             <CreateTick fetchClimbs={this.fetchClimbs} sessionToken={this.props.sessionToken} />
           </Grid>
           <Grid container item xs={9} alignItems="flex-start">
          {/* {this.displayCards()} */}
          </Grid>
           </Grid>
   
       </Container>);
    }
}
 
export default ClimbData;