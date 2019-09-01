import React from "react";

// material-ui
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



class Officer extends React.Component {

  render() {
    const {name, image, email, bio, position} = this.props;
    console.log(position);
    return(
      <Card style={{width:"49%"}}>
        <CardHeader
          avatar={
            <Avatar src={image} style={{width: 150, height: 150}}/>            
          }
          title={position + ": " + name + "(" + email + ")"}
          subheader={bio}
          />
      </Card>
    );  
  }

}

class Officers extends React.Component {

  render() {
    const {officers} = this.props;
    return (
      <div>
        {officers.map((officer, i) =>
          <Officer {... officer} key={i} />
        )}
      </div>
    )
  }

}

export default Officers;
