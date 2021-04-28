import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import CreateTick from './CreateTick';

export interface ClimbDataProps {
    updateToken: (newToken: string) => void;
    sessionToken: string;
    // fetchClimbs: [];
}
 
export interface ClimbDataState {
    climbs: [];
    updateActive: boolean;
    climbToUpdate: {};
}



class ClimbData extends React.Component<ClimbDataProps, ClimbDataState> {
    constructor(props: ClimbDataProps) {
        super(props);
        this.state = { 
            climbs: [],
            updateActive: false,
            climbToUpdate: {}
        }

        
        // this.state = {sessionToken: ''};
        // this.state = {climbs: []};
        // this.state = {updateActive: false};
        // this.state = {climbToUpdate: {}}
    }

    fetchClimbs() {
        fetch('http://localhost:3000/outdoor/getout', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.sessionToken
      })
    })
    .then(response => response.json())
    .then(climbData => this.setState({updateActive: climbData}));
  };

    editUpdateClimb = (climb: number) => {
    this.setState({climbToUpdate: climb});
    console.log(climb);
  };

  updateOn = () => this.setState({updateActive: true});
  updateOff = () => this.setState({updateActive: false});

componentDidMount = () => {
    this.fetchClimbs();
}

    render() { 
        return (
        <Container>
        <Grid container xs={12}>
           <Grid>
             <CreateTick updateToken={this.props.updateToken} fetchClimbs={this.fetchClimbs} sessionToken={this.props.sessionToken} />
           </Grid>
           
           </Grid>
   
       </Container>);
    }
}
 
export default ClimbData;