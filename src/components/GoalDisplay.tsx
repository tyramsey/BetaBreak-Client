import * as React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GoalEdit from './GoalEdit';

import {GoalObject} from './ClimbInterfaces';
// import { url } from 'node:inspector';
import APIURL from '../helpers/environments';

export interface GoalDisplayProps {
    sessionToken: string;
    fetchGoals: Function;
    goal: GoalObject;
    goals: GoalObject[];
    editUpdateGoal: Function;
    updateOn: Function;
}
 
export interface GoalDisplayState {
    open: boolean;
}

class GoalDisplay extends React.Component<GoalDisplayProps, GoalDisplayState> {
    constructor(props: GoalDisplayProps) {
        super(props);
        this.state = { open: false  };
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }
    
    handleClickClose = () => {
        this.setState({open: false});
    }
    
    deleteGoal = (goal: any) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
        fetch(`${APIURL}/goal/deletegoal/${this.props.goal.id}`, {
    method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token ? token : ''
      })
    })
    .then(() => 
    this.props.fetchGoals()
    )
    }
    render() { 
        return ( <div style={{width: '100%'}}>
            <TableContainer>
<Table  aria-label="simple table">
<TableHead>
    <TableRow>
    <TableCell align="center">Goal Setter #</TableCell>
      <TableCell align='center'>Goal #</TableCell>
      <TableCell align="center">PitchCount</TableCell>
      <TableCell align="center">TradPitches</TableCell>
      <TableCell align="center">SportPitches</TableCell>
      <TableCell align="center">TradMaxDiff</TableCell>
      <TableCell align="center">SportMaxDiff</TableCell>
      <TableCell align="center">Days Climbed</TableCell>
      <TableCell align="center">Duration</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
    
      <TableRow key={this.props.goal.id}>
        <TableCell align="center" component="th" scope="row">
          {this.props.goal.owner_id}
        </TableCell>
        <TableCell align="center">{this.props.goal.id}</TableCell>
        <TableCell align="center">{this.props.goal.pitchcount}</TableCell>
        <TableCell align="center">{this.props.goal.tradpitches}</TableCell>
        <TableCell align="center">{this.props.goal.sportpitches}</TableCell>
        <TableCell align="center">{this.props.goal.tradmaxdiff}</TableCell>
        <TableCell align="center">{this.props.goal.sportmaxdiff}</TableCell>
        <TableCell align="center">{this.props.goal.daysclimbed}</TableCell>
        <TableCell align="center">{this.props.goal.duration}</TableCell>
        <GoalEdit sessionToken={this.props.sessionToken} goalToUpdate={this.props.editUpdateGoal} goal={this.props.goal}/>
        {/* <Button variant='contained' size='small' onClick={() => {this.props.editUpdateGoal(this.props.goal); this.handleClickOpen() ; this.props.updateOn()}} >Update</Button> */}
  <Button  variant='contained' size='small'  onClick={() => this.deleteGoal(this.props.goal)}>Delete</Button>
      </TableRow>
    
  </TableBody>
  
</Table>
</TableContainer>
</div>
//   <Card style={{ width: '100%' }}>
//         <CardActionArea>
//           {/* <CardMedia
//             // className={classes.media}
//             image={}
//             title="Contemplative Reptile"
//           /> */}
//           <CardContent>
//             <Typography align='center' gutterBottom variant="h5" component="h2">
//             {this.props.goal.pitchcount}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.tradpitches}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.daysclimbed} || {this.props.goal.duration}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.sportpitches}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.tradmaxdiff}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.sportmaxdiff}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.daysclimbed}
//             </Typography>
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.duration}
//             </Typography>
     
//             <Typography align='center' variant="body2" color="textSecondary" component="p">
//             {this.props.goal.secret}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions style={{justifyContent: 'center'}}>
//         <Button variant='contained' size='small' onClick={() => {this.props.editUpdateGoal(this.props.goal); this.handleClickOpen() ; this.props.updateOn()}} >Update</Button>
//   <Button  variant='contained' size='small'  onClick={() => this.deleteGoal(this.props.goal)}>Delete</Button>
//         </CardActions>
//       </Card>
         );
    }
}
 
export default GoalDisplay;