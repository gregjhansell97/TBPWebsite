import React from "react";
import PropTypes from "prop-types";

//material-ui
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

/**
 * a card representation of an officer
 */
class Officer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      validLink: true //the image link provided works
    }
  }

  render(){
    const {validLink} = this.state;
    const {
      officer,
      levelOneWidth,
      levelTwoWidth,
      characterLimit,
      width,
      onImageClick
    } = this.props;
    let {name, image, email, bio, position} = officer;

    //enforces character limit for bio
    bio = bio.substr(0, characterLimit);

    //if the image link was invalid point to missing_person image
    if(!validLink){
      image = "/static/images/officers/missing_person.jpg"
    }

    //logic used to re-adjust components on size changes
    //two cards side by side
    let imageWidth = width/4.5
    let gridSize = 6;
    let innerGridSize = 6;

    //one card per level with bio next to it
    if(width < levelOneWidth){
      imageWidth = width/2.25;
      gridSize = 12;
    }
    //one card per level with bio below it
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
                <Typography>
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

Officer.propTypes = {
  ///officer objects which have name, image, email, bio and position
  officer: PropTypes.objectOf(PropTypes.string),
  ///critical width for website to fold down to one card per row
  levelOneWidth: PropTypes.number,
  ///critical width for website to drop bio underneath image
  levelTwoWidth: PropTypes.number,
  ///the character limit for a bio
  characterLimit: PropTypes.number,
  ///the width of the users screen in pixels
  width: PropTypes.number,
  ///function envoked when Gregory Hansell's image is clicked (for easter eggs)
  onImageClick: PropTypes.func
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
      answer: "" //users input to the answer to the riddle
    }
  }

  render() {
    const {officers, width, height, count} = this.props
    const {setCount, setTab, incrementCount} = this.props;

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
                setTab(0);
              }
              this.setState({answer: e.target.value});
            }} />
        }
      </div>
    );
  }

}

Officers.propTypes = {
  ///A list of officer objects which have name, image, email, bio and position
  officers: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  ///current width of the screen
  width: PropTypes.number,
  ///current height of the screen
  height: PropTypes.number,
  ///number of times Gregory Hansell's image has been clicked
  count: PropTypes.number,
  ///change the number of the count, do not use to increment by one
  setCount: PropTypes.func,
  ///increments the count by 1
  incrementCount: PropTypes.func,
  ///changes the current active tab
  setTab: PropTypes.func
}

export default Officers;
