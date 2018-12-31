import React from "react";
import PropTypes from "prop-types";

//material-ui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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
    const {
      officer, 
      classes, 
      levelOneWidth, 
      levelTwoWidth, 
      characterLimit,
      width, 
      onImageClick 
    } = this.props;
    let {name, image, email, bio, position} = officer;
    
    ///enforces character limit for bio
    bio = bio.substr(0, characterLimit);

    ///if the image link was invalid point to missing_person image
    if(!validLink){
      image = "/static/images/officers/missing_person.jpg"
    }

    ///logic used to re-adjust components on size changes
    let imageWidth = width/4.5
    let gridSize = 6;
    let innerGridSize = 6;
    if(width < levelOneWidth){
      imageWidth = width/2.25;
      gridSize = 12;
    }
    if(width < levelTwoWidth){
      imageWidth = width/1.1
      gridSize = 12;
      innerGridSize = 12;
    }

    return(
      <Grid item xs={gridSize}>
        <Card>
          <CardContent>
            <Grid container spacing={8}>
              <Grid item xs={innerGridSize}>
                  <img 
                    src={image} 
                    alt={name} 
                    height={imageWidth} 
                    width={imageWidth}
                    onClick={() => {
                      if(/Gregory Hansell|Daemon the Koala/.test(name) && position !== "Sum 41"){ 
                        onImageClick();
                      }
                    }}
                    onError={() => this.setState({validLink: false})}/>
              </Grid>
              <Grid item xs={innerGridSize}>
                <Typography gutterBottom variant="title">
                  {position}
                </Typography>
                <Typography gutterBottom variant="caption">
                  {name + ": " + email}
                </Typography>
                <Divider variant="middle" />
                <Typography style={{height: width/5 - 20}}>
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

Officer.defaultProps = {
  levelOneWidth: 1390,
  levelTwoWidth: 760,
  characterLimit: 540
}

class Officers extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      answer: "" 
    }
  }

  render() {
    const {officers, width, height, count, setCount, setIndex, incrementCount} = this.props;
    return (
      <div>
        <img src="static/images/officers.jpg" alt="" style={{width: "100%"}}/>
        <Grid container spacing={8} style={{marginTop: 4}}>
          {officers.map((officer, i) =>
            <Officer 
              officer={officer} 
              width={width} 
              height={height} 
              key={i} 
              onImageClick={incrementCount} />
          )}
        </Grid>
        {count === 56 && 
          <TextField
            label="answer"
            value={this.state.answer}
            onChange={(e) => { 
              if(e.target.value.toLowerCase() === "apple juice"){
                setCount(-1);
                setIndex(0);
              }
              this.setState({answer: e.target.value});
            }} />
        }
      </div>
    );
  }

}

Officers.propTypes = {
  /**
   * A list of officer objects which have name, image, email, bio and position key
   */
  officers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

export default Officers;
