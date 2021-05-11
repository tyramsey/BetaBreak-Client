import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OutdoorClimbs from './OutdoorClimbs';
import { withStyles } from '@material-ui/core/styles';

import CreateTick from './CreateTick';
import Button from '@material-ui/core/Button';

import CreateGoal from './CreateGoal';
import GoalDisplay from './GoalDisplay';

import APIURL from '../helpers/environments';

import { OutdoorClimb } from './ClimbInterfaces';
import { GoalObject } from './ClimbInterfaces';

export interface ClimbDataProps {
    classes: any;
    theme: any;
    sessionToken: string;
    
}
 
export interface ClimbDataState {
    climbs: OutdoorClimb[];
    updateActive: boolean;
    climbToUpdate: {};
    goals: GoalObject[];
    goalToUpdate: {};
}

const styles = (theme:any) => ({
 
  palette: {
    primary: {
      main: '#aecbea',
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
    backgroundColor: '#caff00',
    color: '4f0091',
    height: '40px',
    marginLeft: '38%',
    margin: '10px' 
  }
})


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
              pitchcount: 0,
              tradpitches: 0,
              sportpitches: 0,
              tradmaxdiff: '',
              sportmaxdiff: '',
              daysclimbed: 0,
              duration: 0,
              secret: false,
              id: 0,
              owner_id: 0
            }],
            goalToUpdate: {}
        }
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
      const {classes} = this.props;
        return (
        <Container className={classes.main} style={{backgroundColor: '#4f0091'}} >

        <Grid container xs={12}>
        
           <Grid item sm={4}>
             <CreateTick sessionToken={this.props.sessionToken} />
             {/* fetchClimbs={this.fetchClimbs} */}
           </Grid>
           <Grid item sm={8} xs={12} alignItems="flex-start">
           
           {this.displayGoals()}
           {/* {this.state.updateActive ? <GoalEdit goalToUpdate={this.state.goalToUpdate} updateOn ={this.updateOn} updateOff={this.updateOff} sessionToken={this.props.sessionToken} /> : <></>} */}
           <br/>
           <div style={{alignContent: 'center'}}>
           {localStorage.getItem('role') === '1' ? <CreateGoal sessionToken={this.props.sessionToken} /> : null}
           <Button className={classes.button} onClick={this.fetchGoals.bind(this)}>Fetch Goals Button</Button>
           <Button className={classes.button} onClick={this.fetchClimbs.bind(this)}>Fetch Ticks Button</Button>
           </div>
           <br/>
           
           </Grid>
           </Grid>
          {this.displayTable()}
          {/* {this.state.updateActive ? <ClimbEdit climbToUpdate={this.state.climbToUpdate} sessionToken={this.props.sessionToken} /> : <></>} */}
          
           
   
       </Container>);
    }
}
 
export default withStyles(styles, {withTheme: true}) (ClimbData);