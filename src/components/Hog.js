import React, { PropTypes } from "react";
import Details from "./Details";

export default class Hog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.hog.name,
      greased: this.props.hog.greased,
      medal: this.props.hog["highest medal achieved"],
      specialty: this.props.hog.specialty,
      weight: this.props.hog[
        "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
      ],
      details: false
    };
  }

  onClickHandler = event => {
    this.setState({ details: !this.state.details });
    console.log(this.state.details);
  };

  render() {
    let imgSrc = `../../hog-imgs/${this.state.name.toLowerCase()}.jpg`;

    var i = 0,
      strLength = imgSrc.length;

    for (i; i < strLength; i++) {
      imgSrc = imgSrc.replace(" ", "_");
    }

    return (
      <div className="ui eight wide column">
        <h1>{this.state.name}</h1>
        <img src={imgSrc} />
        <a href="#" onClick={this.onClickHandler}>
          <p>Details</p>
        </a>
        {this.state.details === true ? <Details hog={this.state} /> : null}
      </div>
    );
  }
}
