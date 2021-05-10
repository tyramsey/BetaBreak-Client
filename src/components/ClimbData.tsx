import * as React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import OutdoorClimbs from './OutdoorClimbs';
import ClimbEdit from './ClimbEdit';
import CreateTick from './CreateTick';
// import Button from '@material-ui/core/Button';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import CreateGoal from './CreateGoal';
import GoalDisplay from './GoalDisplay';
import GoalEdit from './GoalEdit';
import APIURL from '../helpers/environments';

import { Container, Row, Col, Button } from "reactstrap";

import { OutdoorClimb } from './ClimbInterfaces';
import { GoalObject } from './ClimbInterfaces';

export interface ClimbDataProps {
    // updateToken: (newToken: string) => void;
    sessionToken: string;
    // fetchClimbs: [];
}
 
export interface ClimbDataState {
    climbs: OutdoorClimb[];
    updateActive: boolean;
    climbToUpdate: {};
    goals: GoalObject[];
    goalToUpdate: {};
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
            climbToUpdate: {},
            goals: [{
              pitchcount: '',
              tradpitches: '',
              sportpitches: '',
              tradmaxdiff: '',
              sportmaxdiff: '',
              daysclimbed: '',
              duration: '',
              secret: false,
              id: 1
            }],
            goalToUpdate: {}
        }

        
        // this.state = {sessionToken: ''};
        // this.state = {climbs: []};
        // this.state = {updateActive: false};
        // this.state = {climbToUpdate: {}}
    }

    fetchGoals() {
      fetch(`${APIURL}/goal/getgoal`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('sessionToken')}`
      })
    })
    .then(response => response.json())
    .then((goalData) => {
      // console.log(climbData)
      this.setState({goals: goalData});
    });
    }
    editUpdateGoal = (goal: number) => {
      this.setState({goalToUpdate: goal});
      console.log(goal);
    }

    displayGoals() {
      return this.state.goals.length > 0 ? this.state.goals.map((goal) => <GoalDisplay goal={goal} goals={this.state.goals} editUpdateGoal={this.editUpdateGoal} updateOn={this.updateOn} fetchGoals={this.fetchGoals.bind(this)} sessionToken={this.props.sessionToken} />) : null;
    }
    fetchClimbs() {
      // let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');

        fetch(`${APIURL}/outdoor/getout`, {
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

  this.fetchGoals();
    this.fetchClimbs();
    console.log(this.state.climbs)
}

displayTable() {
    return this.state.climbs.length > 0 ? this.state.climbs.map((climb) => <OutdoorClimbs climb={climb} climbs={this.state.climbs} editUpdateClimb={this.editUpdateClimb} updateOn={this.updateOn} fetchClimbs={this.fetchClimbs.bind(this)} sessionToken={this.props.sessionToken} />) : null;
}
    render() { 
        return ( <div>
        <Container style={{width: '100%'}}>

        <Row>
        
             <Col md='3'>
             <CreateTick sessionToken={this.props.sessionToken} />
             {/* fetchClimbs={this.fetchClimbs} */}
           </Col>
           <Col md='9'>
           
           {this.displayGoals()}
           <br/>
           <br/>
           <br/>
           <Button center onClick={this.fetchGoals.bind(this)}>Fetch Goals Button</Button>
           </Col>

           </Row>
           
           <Row>
           <Col md='12'>
           
           <br/><br/><br/>
           
          
          {this.displayTable()}
          </Col>
          </Row>
          <br/>
          <br/>
          <br/>
           <Button onClick={this.fetchClimbs.bind(this)}>Fetch Ticks Button</Button>
           <Col center md='4'>
             {localStorage.getItem('role') === '1' ? <CreateGoal sessionToken={this.props.sessionToken} /> : null}
             {/* fetchClimbs={this.fetchClimbs} */}
             </Col>
       </Container>
       </div>);
    }
}
 
export default ClimbData;