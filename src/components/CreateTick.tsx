import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel} from '@material-ui/core';
import {FormControl} from '@material-ui/core';

export interface CreateTickProps {
    
    sessionToken: string;
    // fetchClimbs: (updateActive: boolean) => void;
    // fetchClimbs: Function;
}
 
export interface CreateTickState {
    location: string;
    routename: string;
    date: string;
    type: string;
    difficulty: string;
    pitches: string;
    grade: string;
    beta: string;
    style: any;
    duration: string;
    rating: any;
    image_url: string;
    secret: boolean;
}
 
type uploadImage = {
    e: any;
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  BirdrIcon: {
    margin: theme.spacing(1),
    backgroundColor: '#c2b092',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#eae3cb',
  },
  checkbox: {
    backgroundColor: '#b65f50',
  },
})

class CreateTick extends React.Component<CreateTickProps, CreateTickState> {
    constructor(props: CreateTickProps) {
        super(props);
        this.state = {
            location: '',
            routename: '',
            date: '',
            type: '',
            difficulty: '',
            pitches: '',
            grade: '',
            beta: '',
            style: [],
            duration: '',
            rating: [],
            image_url: '',
            secret: false
        }

        // this.state = initialState;
        // this.state = { location: '' };
        // this.state = { routename: ''};
        // this.state = { date: ''};
        // this.state = { type: ''};
        // this.state = { difficulty: ''};
        // this.state = { pitches: ''};
        // this.state = { grade: ''};
        // this.state = { beta: ''};
        // this.state = { style: ''};
        // this.state = { duration: ''};
        // this.state = { rating: []};
        // this.state = { image_url: ''};
        // this.state = { secret: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // uploadImage = async e => {
    //     const files = e.target.files
    //     const data = new FormData()
    //     data.append('file', files[0])
    //     data.append('upload_preset', 'cloudinary-betabreak')
    //     console.log(data)
    //     const res = await fetch('https://api.cloudinary.com/v1_1/betabreak/image/upload', {
    //         method: 'POST',
    //         body: data
    //     })
    //     const file = await res.json()
    
    //     const image_url=file.secure_url
    //     console.log(image_url)
    //     this.setState({image_url : file.secure_url})
    //     }

    uploadImage() {
        alert('hello');
    }

        handleSubmit = (event: any) => {
          let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
    
            event.preventDefault();
            fetch('http://localhost:3000/outdoor/createout', {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token ? token : ''
              }),
              body: JSON.stringify({ outdoor: { location: this.state.location, routename: this.state.routename, date: this.state.date, type: this.state.type, difficulty: this.state.difficulty, pitches: this.state.pitches, grade: this.state.grade, beta: this.state.beta, style: this.state.style, duration: this.state.duration, rating: this.state.rating, image_url: this.state.image_url, secret: this.state.secret } })
            })
            .then(response => response.json())
            .then(climbData => {
              console.table(climbData);
              this.setState({ location: ''});
              this.setState({ routename: ''});
              this.setState({ date: ''});
              this.setState({ type: ''});
              this.setState({ difficulty: ''});
              this.setState({ pitches: ''});
              this.setState({ grade: ''});
              this.setState({ beta: ''});
              this.setState({ style: ''});
              this.setState({ duration: ''});
              this.setState({ rating: Number('')});
              this.setState({ image_url: ''});
              this.setState({ secret: true});
              // this.props.fetchClimbs();
            })
          }

    render() { 
      console.log(this.props.sessionToken)
        return ( 
            <Container>
            <br/>
            <br/>
            <br/>
            <h3>Create an Climb!</h3>
            <br/>
            <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="Location"
                        name="location"
                        variant="outlined"
                        required
                        fullWidth
                        
                        onChange={(e) => this.setState({location: e.target.value})}
                        value={this.state.location}
                        id="location"
                        label="Location"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="routename"
                        label="Route Name"
                        onChange={(e) => this.setState({routename: e.target.value})}
                        value={this.state.routename}
                        name="routename"
                        autoComplete="routename"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="date"
                        label="Date"
                        onChange={(e) => this.setState({date: e.target.value})}
                        value={this.state.date}
                        name="date"
                        autoComplete="Date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="type"
                        label="Type"
                        onChange={(e) => this.setState({type: e.target.value})}
                        value={this.state.type}
                        name="type"
                        autoComplete="type"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="difficulty"
                        label="Difficulty"
                        onChange={(e) => this.setState({difficulty: e.target.value})}
                        value={this.state.difficulty}
                        name="difficulty"
                        autoComplete="difficulty"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="pitches"
                        label="Pitches"
                        onChange={(e) => this.setState({pitches: e.target.value})}
                        value={this.state.pitches}
                        name="pitches"
                        autoComplete="pitches"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="grade"
                        label="Grade"
                        onChange={(e) => this.setState({grade: e.target.value})}
                        value={this.state.grade}
                        name="grade"
                        autoComplete="grade"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="beta"
                        label="Beta"
                        onChange={(e) => this.setState({beta: e.target.value})}
                        value={this.state.beta}
                        name="beta"
                        autoComplete="beta"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <InputLabel>Style</InputLabel>
                      <Select
                        variant="outlined"
                        required
                        fullWidth
                        id="style"
                        label="Style"
                        onChange={(e) => this.setState({style: e.target.value})}
                        value={this.state.style}
                        name="style"
                        autoComplete="Style"
                      >
                      <MenuItem value={1}>TopRope</MenuItem>
                          <MenuItem value={2}>Preplaced Gear</MenuItem>
                          <MenuItem value={3}>Redpoint</MenuItem>
                          <MenuItem value={4}>Flash</MenuItem>
                          <MenuItem value={5}>Onsight</MenuItem>
                      </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="duration"
                        label="Duration"
                        onChange={(e) => this.setState({duration: e.target.value})}
                        value={this.state.duration}
                        name="duration"
                        autoComplete="duration"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="rating-native-simple">Rating</InputLabel>
                    <Select
                        native
                        inputProps={{name: 'rating', id: 'rating-native-simple',}}
                        variant="outlined"
                        required
                        fullWidth
                        name="rating"
                        onChange={(e) => this.setState({rating: e.target.value})}
                        value={this.state.rating}
                        label="Rating"
                        autoComplete="Rating"
                        >
                          <option value={1}>Choss</option>
                          <option value={2}>Awkward</option>
                          <option value={3}>Interesting</option>
                          <option value={4}>Classic</option>
                          <option value={5}>TestPiece</option>
                        </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="upload-photo"
                        type="file"
                        onChange={this.uploadImage}
                        //onChange={(e) => setImage_url(e.target.value)}
                        
                        // label="Image"
                        id="image"
                        autoComplete="image"
                      />
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
                    
                  </Grid>
                  <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    fullWidth
                    variant="contained"
                  >
                    Create Outdoor Tick!
                  </Button >
            </Container>
         );
    }
}
 
export default CreateTick;