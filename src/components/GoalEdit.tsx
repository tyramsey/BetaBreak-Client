import { Container } from '@material-ui/core';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
// import {InputLabel} from '@material-ui/core';
// import {FormControl} from '@material-ui/core';
// import Checkbox from '@material-ui/core/Checkbox';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import { FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

import APIURL from '../helpers/environments';
import { GoalObject } from './ClimbInterfaces';

export interface GoalEditProps {
    sessionToken: string;
    // updateOff: Function;
    goalToUpdate: any | null;
    // updateOn: Function;
    goal: GoalObject;
}
 
export interface GoalEditState {
    pitchcount: number;
    tradpitches: number;
    sportpitches: number;
    tradmaxdiff: string;
    sportmaxdiff: string;
    daysclimbed: number;
    duration: number;
    secret: Boolean;
    id: number | null;
    open: any;
}
 
class GoalEdit extends React.Component<GoalEditProps, GoalEditState> {
    constructor(props: GoalEditProps) {
        super(props);
        this.state = { 
            id: this.props.goalToUpdate ? this.props.goalToUpdate.id : null,
            pitchcount: 0,
            tradpitches: 0,
            sportpitches: 0,
            tradmaxdiff: '',
            sportmaxdiff: '',
            daysclimbed: 0,
            duration: 0,
            secret: false,
            open: false
        };
    }
    handleSubmit = (event: any) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
    
            event.preventDefault();
            fetch(`${APIURL}/goal/updategoal/${this.props.goal.id}`, {
              method: 'PUT',
              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': token ? token : ''
              }),
              body: JSON.stringify({ goal: {pitchcount: this.state.pitchcount,
                tradpitches: this.state.tradpitches,
                sportpitches: this.state.sportpitches,
                tradmaxdiff: this.state.tradmaxdiff,
                sportmaxdiff: this.state.sportmaxdiff,
                daysclimbed: this.state.daysclimbed,
                duration: this.state.duration,
                secret: this.state.secret } })
            })
            .then(response => response.json())
            .then(goalData => {
              console.table(goalData);
              this.setState({ pitchcount: 0});
              this.setState({ tradpitches: 0});
              this.setState({ sportpitches: 0});
              this.setState({ tradmaxdiff: ''});
              this.setState({ sportmaxdiff: ''});
              this.setState({ daysclimbed: 0});
              this.setState({ duration: 0});
              this.setState({ secret: true});
              // this.props.fetchClimbs();
            })
            // this.props.updateOff();
    }

    handleClickOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
     this.setState({open:false});
    };

    render() { 
        return ( <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Update
          </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            // PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
              Update
            </DialogTitle>
            <DialogContent>
              
            <Container>
            <Grid item xs={12}>
                    
<Form>
          <FormGroup>
            <Label for="pitchCount">Create Goal</Label>
            {/* <Input plaintext value="Let's goal!" /> */}
          </FormGroup>
          <FormGroup>
            <Label for="pitchCount">PitchCount</Label>
            <Input
              type="select"
              name="pitchcount"
              id="pitchcount"
              placeholder="PitchCount"
              onChange={(e) => this.setState({ pitchcount: Number(e.target.value) })}
              value={this.state.pitchcount}
              label="PitchCount"
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
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
              <option value={44}>44</option>
              <option value={45}>45</option>
              <option value={46}>46</option>
              <option value={47}>47</option>
              <option value={48}>48</option>
              <option value={49}>49</option>
              <option value={50}>50</option>
              <option value={51}>51</option>
              <option value={52}>52</option>
              <option value={53}>53</option>
              <option value={54}>54</option>
              <option value={55}>55</option>
              <option value={56}>56</option>
              <option value={57}>57</option>
              <option value={58}>58</option>
              <option value={59}>59</option>
              <option value={60}>60</option>
              <option value={61}>61</option>
              <option value={62}>62</option>
              <option value={63}>63</option>
              <option value={64}>64</option>
              <option value={65}>65</option>
              <option value={66}>66</option>
              <option value={67}>67</option>
              <option value={68}>68</option>
              <option value={69}>69</option>
              <option value={70}>70</option>
              <option value={71}>71</option>
              <option value={72}>72</option>
              <option value={73}>73</option>
              <option value={74}>74</option>
              <option value={75}>75</option>
              <option value={76}>76</option>
              <option value={77}>77</option>
              <option value={78}>78</option>
              <option value={79}>79</option>
              <option value={80}>80</option>
              <option value={81}>81</option>
              <option value={82}>82</option>
              <option value={83}>83</option>
              <option value={84}>84</option>
              <option value={85}>85</option>
              <option value={86}>86</option>
              <option value={87}>87</option>
              <option value={88}>88</option>
              <option value={89}>89</option>
              <option value={90}>90</option>
              <option value={91}>91</option>
              <option value={92}>92</option>
              <option value={93}>93</option>
              <option value={94}>94</option>
              <option value={95}>95</option>
              <option value={96}>96</option>
              <option value={97}>97</option>
              <option value={98}>98</option>
              <option value={99}>99</option>
              <option value={100}>100</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="tradpitches">Trad Pitches</Label>
            <Input
              type="select"
              name="tradpitches"
              id="tradpitches"
              placeholder="Trad Pitches"
              onChange={(e) => this.setState({ tradpitches: Number(e.target.value) })}
              value={this.state.tradpitches}
              label="TradPitches"
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
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
              <option value={44}>44</option>
              <option value={45}>45</option>
              <option value={46}>46</option>
              <option value={47}>47</option>
              <option value={48}>48</option>
              <option value={49}>49</option>
              <option value={50}>50</option>
              <option value={51}>51</option>
              <option value={52}>52</option>
              <option value={53}>53</option>
              <option value={54}>54</option>
              <option value={55}>55</option>
              <option value={56}>56</option>
              <option value={57}>57</option>
              <option value={58}>58</option>
              <option value={59}>59</option>
              <option value={60}>60</option>
              <option value={61}>61</option>
              <option value={62}>62</option>
              <option value={63}>63</option>
              <option value={64}>64</option>
              <option value={65}>65</option>
              <option value={66}>66</option>
              <option value={67}>67</option>
              <option value={68}>68</option>
              <option value={69}>69</option>
              <option value={70}>70</option>
              <option value={71}>71</option>
              <option value={72}>72</option>
              <option value={73}>73</option>
              <option value={74}>74</option>
              <option value={75}>75</option>
              <option value={76}>76</option>
              <option value={77}>77</option>
              <option value={78}>78</option>
              <option value={79}>79</option>
              <option value={80}>80</option>
              <option value={81}>81</option>
              <option value={82}>82</option>
              <option value={83}>83</option>
              <option value={84}>84</option>
              <option value={85}>85</option>
              <option value={86}>86</option>
              <option value={87}>87</option>
              <option value={88}>88</option>
              <option value={89}>89</option>
              <option value={90}>90</option>
              <option value={91}>91</option>
              <option value={92}>92</option>
              <option value={93}>93</option>
              <option value={94}>94</option>
              <option value={95}>95</option>
              <option value={96}>96</option>
              <option value={97}>97</option>
              <option value={98}>98</option>
              <option value={99}>99</option>
              <option value={100}>100</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="sportpitches">Sport Pitches</Label>
            <Input
              type="select"
              name="sportpitches"
              id="sportpitches"
              placeholder="SportPitches"
              onChange={(e) => this.setState({ sportpitches: Number(e.target.value) })}
              value={this.state.sportpitches}
              label="SportPitches"
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
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
              <option value={44}>44</option>
              <option value={45}>45</option>
              <option value={46}>46</option>
              <option value={47}>47</option>
              <option value={48}>48</option>
              <option value={49}>49</option>
              <option value={50}>50</option>
              <option value={51}>51</option>
              <option value={52}>52</option>
              <option value={53}>53</option>
              <option value={54}>54</option>
              <option value={55}>55</option>
              <option value={56}>56</option>
              <option value={57}>57</option>
              <option value={58}>58</option>
              <option value={59}>59</option>
              <option value={60}>60</option>
              <option value={61}>61</option>
              <option value={62}>62</option>
              <option value={63}>63</option>
              <option value={64}>64</option>
              <option value={65}>65</option>
              <option value={66}>66</option>
              <option value={67}>67</option>
              <option value={68}>68</option>
              <option value={69}>69</option>
              <option value={70}>70</option>
              <option value={71}>71</option>
              <option value={72}>72</option>
              <option value={73}>73</option>
              <option value={74}>74</option>
              <option value={75}>75</option>
              <option value={76}>76</option>
              <option value={77}>77</option>
              <option value={78}>78</option>
              <option value={79}>79</option>
              <option value={80}>80</option>
              <option value={81}>81</option>
              <option value={82}>82</option>
              <option value={83}>83</option>
              <option value={84}>84</option>
              <option value={85}>85</option>
              <option value={86}>86</option>
              <option value={87}>87</option>
              <option value={88}>88</option>
              <option value={89}>89</option>
              <option value={90}>90</option>
              <option value={91}>91</option>
              <option value={92}>92</option>
              <option value={93}>93</option>
              <option value={94}>94</option>
              <option value={95}>95</option>
              <option value={96}>96</option>
              <option value={97}>97</option>
              <option value={98}>98</option>
              <option value={99}>99</option>
              <option value={100}>100</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="tradmaxdiff">Trad Max Difficulty</Label>
            <Input
              type="select"
              name="tradmaxdiff"
              id="tradmaxdiff"
              placeholder="TradMaxDiff"
              onChange={(e) => this.setState({ tradmaxdiff: e.target.value })}
              value={this.state.tradmaxdiff}
              label="TradMaxDiff"
            >
              <option value="5.5">5.5</option>
              <option value="5.6">5.6</option>
              <option value="5.7">5.7</option>
              <option value="5.8">5.8</option>
              <option value="5.9">5.9</option>
              <option value="5.10a">5.10a</option>
              <option value="5.10b">5.10b</option>
              <option value="5.10c">5.10c</option>
              <option value="510d">5.10d</option>
              <option value="5.11a">5.11a</option>
              <option value="5.11b">5.11b</option>
              <option value="5.11c">5.11c</option>
              <option value="5.11d">5.11d</option>
              <option value="5.12a">5.12a</option>
              <option value="5.12b">5.12b</option>
              <option value="5.12c">5.12c</option>
              <option value="5.12d">5.12d</option>
              <option value="5.13a">5.13a</option>
              <option value="5.13b">5.13b</option>
              <option value="5.13c">5.13c</option>
              <option value="5.13d">5.13d</option>
              <option value="5.14a">5.14a</option>
              <option value="5.14b">5.14b</option>
              <option value="5.14c">5.14c</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="sportmaxdiff">Trad Max Difficulty</Label>
            <Input
              type="select"
              name="sportmaxdiff"
              id="sportmaxdiff"
              placeholder="SportMaxDiff"
              onChange={(e) => this.setState({ sportmaxdiff: e.target.value })}
              value={this.state.sportmaxdiff}
              label="SportMaxDiff"
            >
              <option value="5.5">5.5</option>
              <option value="5.6">5.6</option>
              <option value="5.7">5.7</option>
              <option value="5.8">5.8</option>
              <option value="5.9">5.9</option>
              <option value="5.10a">5.10a</option>
              <option value="5.10b">5.10b</option>
              <option value="5.10c">5.10c</option>
              <option value="510d">5.10d</option>
              <option value="5.11a">5.11a</option>
              <option value="5.11b">5.11b</option>
              <option value="5.11c">5.11c</option>
              <option value="5.11d">5.11d</option>
              <option value="5.12a">5.12a</option>
              <option value="5.12b">5.12b</option>
              <option value="5.12c">5.12c</option>
              <option value="5.12d">5.12d</option>
              <option value="5.13a">5.13a</option>
              <option value="5.13b">5.13b</option>
              <option value="5.13c">5.13c</option>
              <option value="5.13d">5.13d</option>
              <option value="5.14a">5.14a</option>
              <option value="5.14b">5.14b</option>
              <option value="5.14c">5.14c</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="daysclimbed">Days Climbed (Monthly)</Label>
            <Input
              type="select"
              name="daysclimbed"
              id="daysclimbed"
              placeholder="DaysClimbed"
              onChange={(e) => this.setState({ daysclimbed: Number(e.target.value) })}
              value={this.state.daysclimbed}
              label="DaysClimbed"
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
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="duration">Duration (Hours) </Label>
            <Input
              type="select"
              name="duration"
              id="duration"
              placeholder="Duration"
              onChange={(e) => this.setState({ duration: Number(e.target.value) })}
              value={this.state.duration}
              label="Duration"
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
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
              <option value={44}>44</option>
              <option value={45}>45</option>
              <option value={46}>46</option>
              <option value={47}>47</option>
              <option value={48}>48</option>
              <option value={49}>49</option>
              <option value={50}>50</option>
              <option value={51}>51</option>
              <option value={52}>52</option>
              <option value={53}>53</option>
              <option value={54}>54</option>
              <option value={55}>55</option>
              <option value={56}>56</option>
              <option value={57}>57</option>
              <option value={58}>58</option>
              <option value={59}>59</option>
              <option value={60}>60</option>
              <option value={61}>61</option>
              <option value={62}>62</option>
              <option value={63}>63</option>
              <option value={64}>64</option>
              <option value={65}>65</option>
              <option value={66}>66</option>
              <option value={67}>67</option>
              <option value={68}>68</option>
              <option value={69}>69</option>
              <option value={70}>70</option>
              <option value={71}>71</option>
              <option value={72}>72</option>
              <option value={73}>73</option>
              <option value={74}>74</option>
              <option value={75}>75</option>
              <option value={76}>76</option>
              <option value={77}>77</option>
              <option value={78}>78</option>
              <option value={79}>79</option>
              <option value={80}>80</option>
              <option value={81}>81</option>
              <option value={82}>82</option>
              <option value={83}>83</option>
              <option value={84}>84</option>
              <option value={85}>85</option>
              <option value={86}>86</option>
              <option value={87}>87</option>
              <option value={88}>88</option>
              <option value={89}>89</option>
              <option value={90}>90</option>
              <option value={91}>91</option>
              <option value={92}>92</option>
              <option value={93}>93</option>
              <option value={94}>94</option>
              <option value={95}>95</option>
              <option value={96}>96</option>
              <option value={97}>97</option>
              <option value={98}>98</option>
              <option value={99}>99</option>
              <option value={100}>100</option>
            </Input>
          </FormGroup>

          <Button
            type="submit"
            onClick={this.handleSubmit}
            fullWidth
            variant="contained"
          >
            Create Goal!
          </Button>
        </Form>

</Grid>
        </Container>
        </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Send!
              </Button>
            </DialogActions>
          </Dialog>
          </div>
         );
    }
}
 
export default GoalEdit;