import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { OutdoorClimb } from './ClimbInterfaces';

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
        fetch(`http://localhost:3000/outdoor/updateout/${climb.id}`, {
  method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token ? token : ''
      })
    })
    .then(() => this.props.fetchClimbs())
    }

    render() { 
        return (
        
      //   <Card style={{ width: '100%' }}>
      //   <CardActionArea>
      //     <CardMedia
      //       // className={classes.media}
      //       image={this.props.climb.image_id}
      //       title="Contemplative Reptile"
      //     />
      //     <CardContent>
      //       <Typography align='center' gutterBottom variant="h5" component="h2">
      //       {this.props.climb.location}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.routename}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.date} || {this.props.climb.duration}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.type}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.difficulty}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.pitches}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.grade}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.beta}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.style}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">Rarity Rating: {this.props.climb.rating}
      //       </Typography>
      //       <Typography align='center' variant="body2" color="textSecondary" component="p">
      //       {this.props.climb.secret}
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      //   <CardActions style={{justifyContent: 'center'}}>
      //   <Button variant='contained' size='small' onClick={() => {this.props.editUpdateClimb(this.props.climb); this.handleClickOpen() ; this.props.updateOn()}} >Update</Button>
      //   <Button  variant='contained' size='small'  onClick={() => this.deleteClimb(this.props.climb)}>Delete</Button>
      //   </CardActions>
      // </Card>

<TableContainer>
<Table  aria-label="simple table">
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
  <TableBody>
    {this.props.climbs.map((climb) => (
      <TableRow key={this.props.climb.routename}>
        <TableCell component="th" scope="row">
          {this.props.climb.routename}
        </TableCell>
        <TableCell align="right">{this.props.climb.location}</TableCell>
        <TableCell align="right">{this.props.climb.date}</TableCell>
        <TableCell align="right">{this.props.climb.type}</TableCell>
        <TableCell align="right">{this.props.climb.difficulty}</TableCell>
        <TableCell align="right">{this.props.climb.style}</TableCell>
        <TableCell align="right">{this.props.climb.grade}</TableCell>
        <TableCell align="right">{this.props.climb.beta}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
      
      );
    }
}
 
export default OutdoorClimbs;