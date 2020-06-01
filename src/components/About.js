import React, {Component} from "react";

// inhouse
import  TBPNavbar from "./TBPNavbar";

class About extends Component {
    render() {
        return (
            <div>
                <TBPNavbar />
                <div dangerouslySetInnerHTML={
                    {__html: this.props.html}} />
            </div>
        );
    }
}

export default About;
