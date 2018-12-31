import React from "react";
import ReactDOM from "react-dom";

//material-ui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Officer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      validLink: true 
    }
  }

  render(){
    const {validLink} = this.state;
    const {officer, classes, width} = this.props;
    let {name, image, email, bio, position} = officer;

    if(!validLink){
      image = "/static/images/officers/missing_person.jpg"
    }

    return(
      <Grid item xs={6}>
        <Card style={{width: "100%"}}>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <img 
                  src={image} 
                  alt={name} 
                  height={width/5} 
                  width={width/5}
                  onError={() => this.setState({validLink: false})}/>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom variant="subheading">
                  {position}
                </Typography>
                <Typography gutterBottom variant="caption">
                  {name + ": " + email}
                </Typography>
                <Divider variant="middle" />
                <Typography variant="body1"  style={{height: width/5 - 20}}>
                  {bio}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

class Officers extends React.Component {
  render() {
    const {data, width, height} = this.props;
    const {officers} = data;
    return (
      <div>
        <img src="static/images/officers.jpg" alt="" style={{width: "100%"}}/>
        <Grid container spacing={8} style={{marginTop: 4}}>
          {officers.map((officer, i) =>
            <Officer officer={officer} width={width} height={height} key={i} />
          )}
        </Grid>
      </div>
    );
  }
}

export default Officers;
