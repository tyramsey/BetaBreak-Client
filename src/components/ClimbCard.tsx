import * as React from 'react';
import { ClimbResponse } from "./ClimbInterfaces";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
export interface Props {
    climb: ClimbResponse;
}
 
export interface State {
    
}
 
class ClimbCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( <Card>
            <CardImg
              top
              width="10px"
              src={this.props.climb.image_id}
              alt="Card image cap"
            />
            <CardBody>
              {this.props.climb.routename}
              <CardTitle>{this.props.climb.location}</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card> );
    }
}
 
export default ClimbCard;