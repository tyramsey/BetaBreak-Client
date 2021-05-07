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
import './Styles.css';

export interface CreateGoalProps {
    sessionToken: string
}
 
export interface CreateGoalState {
    pitchcount: any;
    tradpitches: any;
    sportpitches: any;
    tradmaxdiff: any;
    sportmaxdiff: any;
    daysclimbed: any;
    duration: any;
    secret: Boolean;
}
 
class CreateGoal extends React.Component<CreateGoalProps, CreateGoalState> {
    constructor(props: CreateGoalProps) {
        super(props);
        this.state = { 
            pitchcount:0,
            tradpitches: 0,
            sportpitches: 0,
            tradmaxdiff: ['5.10', '5.9', '5.8'],
            sportmaxdiff: [],
            daysclimbed: 0,
            duration: 0,
            secret: false
          };
    }

    handleSubmit = (event: any) => {
        let token = this.props.sessionToken ? this.props.sessionToken: localStorage.getItem('sessionToken');
    
            event.preventDefault();
            fetch('http://localhost:3000/goal/creategoal', {
              method: 'POST',
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
    }
    render() { 
        return ( <div className='createGoalForm'>
        <Container >
            <Grid item xs={4}>
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
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="tradmaxdiff-native-simple">Trad Max Difficulty</InputLabel>
                    <Select
                        
                        variant="outlined"
                        required
                        fullWidth
                        name="tradmaxdiff"
                        onChange={(e) => this.setState({tradmaxdiff: e.target.value})}
                        value={this.state.tradmaxdiff}
                        label="tradmaxdiff"
                        autoComplete="tradmaxdiff"
                        >
                          <MenuItem value={1}>5.5</MenuItem>
                          <MenuItem value={2}>5.6</MenuItem>
                          <MenuItem value={3}>5.7</MenuItem>
                          <MenuItem value={4}>5.8</MenuItem>
                          <MenuItem value={5}>5.9</MenuItem>
                          <MenuItem value={6}>5.10a</MenuItem>
                          <MenuItem value={7}>5.10b</MenuItem>
                          <MenuItem value={8}>5.10c</MenuItem>
                          <MenuItem value={9}>5.10d</MenuItem>
                          <MenuItem value={10}>5.11a</MenuItem>
                          <MenuItem value={11}>5.11b</MenuItem>
                          <MenuItem value={12}>5.11c</MenuItem>
                          <MenuItem value={13}>5.11d</MenuItem>
                          <MenuItem value={14}>5.12a</MenuItem>
                          <MenuItem value={15}>5.12b</MenuItem>
                          <MenuItem value={16}>5.12c</MenuItem>
                          <MenuItem value={17}>5.12d</MenuItem>
                          <MenuItem value={18}>5.13a</MenuItem>
                          <MenuItem value={19}>5.13b</MenuItem>
                          <MenuItem value={20}>5.13c</MenuItem>
                          <MenuItem value={21}>5.13d</MenuItem>
                          <MenuItem value={22}>5.14a</MenuItem>
                          <MenuItem value={23}>5.14b</MenuItem>
                          <MenuItem value={24}>5.14c</MenuItem>
                          <MenuItem value={25}>5.14d</MenuItem>
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
                          <option value={1}>5.5</option>
                          <option value={2}>5.6</option>
                          <option value={3}>5.7</option>
                          <option value={4}>5.8</option>
                          <option value={5}>5.9</option>
                          <option value={6}>5.10a</option>
                          <option value={7}>5.10b</option>
                          <option value={8}>5.10c</option>
                          <option value={9}>5.10d</option>
                          <option value={10}>5.11a</option>
                          <option value={11}>5.11b</option>
                          <option value={12}>5.11c</option>
                          <option value={13}>5.11d</option>
                          <option value={14}>5.12a</option>
                          <option value={15}>5.12b</option>
                          <option value={16}>5.12c</option>
                          <option value={17}>5.12d</option>
                          <option value={18}>5.13a</option>
                          <option value={19}>5.13b</option>
                          <option value={20}>5.13c</option>
                          <option value={21}>5.13d</option>
                          <option value={22}>5.14a</option>
                          <option value={23}>5.14b</option>
                          <option value={24}>5.14c</option>
                          <option value={25}>5.14d</option>
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
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                    <InputLabel htmlFor="duration-native-simple">Duration</InputLabel>
                    <Select className='input-style'
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
                         <option value={1}>15</option>
                          <option value={2}>30</option>
                          <option value={3}>45</option>
                          <option value={4}>60</option>
                          <option value={5}>75</option>
                          <option value={6}>90</option>
                          <option value={7}>105</option>
                          <option value={8}>120</option>
                          <option value={9}>135</option>
                          <option value={10}>150</option>
                          <option value={11}>165</option>
                          <option value={12}>180</option>ß
                          <option value={13}>195</option>
                          <option value={14}>210</option>
                          <option value={15}>225</option>
                          <option value={16}>240</option>
                          <option value={17}>255</option>
                          <option value={18}>270</option>
                          <option value={19}>285</option>
                          <option value={20}>300</option>
                          <option value={21}>315</option>
                          <option value={22}>330</option>
                          <option value={23}>345</option>
                          <option value={24}>360</option>
                          <option value={25}>375</option>
                          <option value={26}>390</option>
                          <option value={27}>405</option>
                          <option value={28}>420</option>
                          <option value={29}>435</option>
                          <option value={30}>450</option>
                          <option value={31}>465</option>
                          <option value={32}>480</option>
                          <option value={33}>495</option>
                          <option value={34}>510</option>
                          <option value={35}>525</option>
                          <option value={36}>540</option>
                          <option value={37}>555</option>
                          <option value={38}>570</option>
                          <option value={39}>585</option>
                          <option value={40}>600</option>
                          <option value={41}>615</option>
                          
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
                    Create Goal!
                  </Button >


        </Container> 
        </div>);
    }
}
 
export default CreateGoal;