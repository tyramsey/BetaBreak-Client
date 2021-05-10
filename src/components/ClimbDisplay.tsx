import * as React from 'react';
import { CardColumns } from 'reactstrap';
import { ClimbResponse } from './ClimbInterfaces';
import APIURL from '../helpers/environments';
import ClimbCard from './ClimbCard';

export interface ClimbDisplayProps {
    sessionToken: string;
}
 
export interface ClimbDisplayState {
    climbInformation: ClimbResponse[];
}
 
class ClimbDisplay extends React.Component<ClimbDisplayProps, ClimbDisplayState> {
    constructor(props: ClimbDisplayProps) {
        super(props);
        this.state = {climbInformation: []}
    }

    componentDidMount() {
        fetch(`${APIURL}/outdoor/getout`, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': `${localStorage.getItem('sessionToken')}`
            })
          })
          .then(response => response.json())
          .then((json: ClimbResponse[]) => {
            // console.log(climbData)
            this.setState({climbInformation: json});
          });
    }
    render() { 
        return ( 
            <CardColumns>
                {this.state.climbInformation.length > 0 ? (
                    this.state.climbInformation.map(
                        (climb: ClimbResponse, index: number) => (
                            <ClimbCard climb={climb} key={index} />
                        )
                    )
                ) : (<></>)
            }

            </CardColumns>
         );
    }
}
 
export default ClimbDisplay;