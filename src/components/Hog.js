import React, {Component} from 'react'

class Hog extends Component {

  constructor() {
    super()
    this.state = {
      extend: false,
      hidden:false
    }
  }

  hogClickHandler = (e) => {
    this.setState({extend: !this.state.extend})
  }

  showDetails = () => {
    return (
      <div className="ui description">
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Highest Medal: {this.props.hog["highest medal achieved"]}</p>
        <input type="checkbox" checked={this.props.hog.greased}></input>
        <label>Greased?</label>
      </div>
    )
  }

  hideHog = () => {
    this.setState({hidden: !this.state.hidden})
  }

  showHog = () => {
    let returnValue
    if (this.state.hidden === true) {
      returnValue = null
    } else {
      returnValue = (
        <div className="ui centered card">
          <div className="image">
            <img
              src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)}
              alt={this.props.hog.name}>
            </img>
          </div>
          <div className="content">
            <div className="header left floated">{this.props.hog.name}</div>
            {this.state.extend ? this.showDetails() : null}
          </div>
          <div className="extra content">
            <span className="left floated" onClick={this.hogClickHandler}>
              <i className="add icon" ></i>
              See Details
            </span>
            <span className="right floated" onClick={this.hideHog}>
              <i className="minus icon"></i>
              Hide Hog
            </span>
          </div>
        </div>
      )
    }
    return returnValue
  }
  render() {
    return (
      this.showHog()
    )
  }

}

export default Hog

// <div class="extra content">
//   <button class="ui button">Hog Details</button>
//   <button class="ui button">Hide Hog</button>
// </div>
