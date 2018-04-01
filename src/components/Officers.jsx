import React from "react";
import ReactDOM from "react-dom";

import Subheader from "material-ui/Subheader";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";

class Officer extends React.Component {
  render(){
    const {officer} = this.props;
    const {name, image, email, bio, position} = officer
    return(
      <Card>
        <CardHeader title={position} subtitle={name + ": " + email} avatar={image}/>
        <CardText> {bio} </CardText>
      </Card>
    );
  }
}



class Officers extends React.Component {
  render() {
    const {officers} = this.props.data;
    return (
      <div>
        <img src="static/images/officers.jpg" alt="" style={{width: "100%"}}/>
        {officers.map((officer, i) =>
          <Officer officer={officer} key={i} />
        )}
      </div>
    );
  }
}

export default Officers;
