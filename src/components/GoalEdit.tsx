import { Container } from '@material-ui/core';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import {InputLabel} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import APIURL from '../helpers/environments';

export interface GoalEditProps {
    sessionToken: string;
    updateOff: Function;
    goalToUpdate: any | null;
    updateOn: Function;
}
 
export interface GoalEditState {
    pitchcount: any;
    tradpitches: any;
    sportpitches: any;
    tradmaxdiff: any;
    sportmaxdiff: any;
    daysclimbed: any;
    duration: any;
    secret: Boolean;
    id: number | null;
}
 
class GoalEdit extends React.Component<GoalEditProps, GoalEditState> {
    constructor(props: GoalEditProps) {
        super(props);
        this.state = { 
            id: this.props.goalToUpdate ? this.props.goalToUpdate.id : null,
            pitchcount: '',
            tradpitches: '',
            sportpitches: '',
            tradmaxdiff: '',
            sportmaxdiff: '',
            daysclimbed: '',
            duration: '',
            secret: false,
        };
    }
    handleSubmit = (event: any) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
    
            event.preventDefault();
            fetch(`${APIURL}/goal/updategoal/${this.props.goalToUpdate.id}`, {
              method: 'PUT',
              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token ? token : ''
              }),
              body: JSON.stringify({ goal: {pitchcount: this.state.pitchcount, tradpitches: this.state.tradpitches, sportpitches: this.state.sportpitches, tradmaxdiff: this.state.tradmaxdiff, sportmaxdiff: this.state.sportmaxdiff, daysclimbed: this.state.daysclimbed, duration: this.state.duration, secret: this.state.secret } })
            })
            .then(response => response.json())
            .then(goalData => {
              console.table(goalData);
              this.setState({ pitchcount: Number('')});
              this.setState({ tradpitches: Number('')});
              this.setState({ sportpitches: Number('')});
              this.setState({ tradmaxdiff: Number('')});
              this.setState({ sportmaxdiff: Number('')});
              this.setState({ daysclimbed: Number('')});
              this.setState({ duration: Number('')});
              this.setState({ secret: true});
              // this.props.fetchClimbs();
            })
            this.props.updateOff();
    }
    render() { 
        return ( 
            <Container>
            <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="pitchcount-native-simple">PitchCount</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'pitchcount', id: 'pitchcount-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="pitchcount"
                        onChange={(e) => this.setState({pitchcount: e.target.value})}
                        value={this.state.pitchcount}
                        label="PitchCount"
                        autoComplete="PitchCount"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="tradpitches-native-simple">Trad Pitches</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'tradpitches', id: 'tradpitches-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="tradpitches"
                        onChange={(e) => this.setState({tradpitches: e.target.value})}
                        value={this.state.tradpitches}
                        label="tradpitches"
                        autoComplete="tradpitches"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="sportpitches-native-simple">Sport Pitches</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'sportpitches', id: 'sportpitches-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="sportpitches"
                        onChange={(e) => this.setState({sportpitches: e.target.value})}
                        value={this.state.sportpitches}
                        label="sportpitches"
                        autoComplete="sportpitches"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="tradmaxdiff-native-simple">Trad Max Difficulty</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'tradmaxdiff', id: 'tradmaxdiff-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="tradmaxdiff"
                        onChange={(e) => this.setState({tradmaxdiff: e.target.value})}
                        value={this.state.tradmaxdiff}
                        label="tradmaxdiff"
                        autoComplete="tradmaxdiff"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="sportmaxdiff-native-simple">Sport Max Difficulty</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'sportmaxdiff', id: 'sportmaxdiff-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="sportmaxdiff"
                        onChange={(e) => this.setState({sportmaxdiff: e.target.value})}
                        value={this.state.sportmaxdiff}
                        label="sportmaxdiff"
                        autoComplete="sportmaxdiff"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="daysclimbed-native-simple">Days Climbed</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'daysclimbed', id: 'daysclimbed-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="daysclimbed"
                        onChange={(e) => this.setState({daysclimbed: e.target.value})}
                        value={this.state.daysclimbed}
                        label="daysclimbed"
                        autoComplete="daysclimbed"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="duration-native-simple">Duration</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'duration', id: 'duration-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="duration"
                        onChange={(e) => this.setState({duration: e.target.value})}
                        value={this.state.duration}
                        label="duration"
                        autoComplete="duration"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        
                        onChange={(e) => console.log(e.target)}
                        value={this.state.secret}
                        label="Would you like this entry to be private?"
                        id="secret"
                        
                        control={<Checkbox value="Yes"/>}
                  />  
                    </Grid>
                    <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    fullWidth
                    variant="contained"
                  >
                    Update Goal!
                  </Button >


        </Container>
         );
    }
}
 
export default GoalEdit;