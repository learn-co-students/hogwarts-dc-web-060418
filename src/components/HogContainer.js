import React from "react";
import Hog from "./Hog";

export default class HogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hogs: this.props.hogs,
      searchTerm: "",
      filteredHogs: ""
    };
  }

  whichHogs = "";

  handleChange = event => {
    let value = event.target.value.toLowerCase();
    this.setState({ searchTerm: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let filteredHogs = this.state.hogs.filter(hog =>
      hog.name.includes(this.state.searchTerm)
    );
    console.log("filteredHogs", filteredHogs);

    this.setState({ filteredHogs: filteredHogs });
    this.feedTheHogs();
  };

  feedTheHogs = () => {
    if (this.state.filteredHogs !== "") {
      {
        this.whichHogs = this.state.filteredHogs.map(hog => (
          <Hog hog={hog} key={hog.name} />
        ));
      }
    } else {
      {
        this.whichHogs = this.state.hogs.map(hog => (
          <Hog hog={hog} key={hog.name} />
        ));
      }
    }
  };

  render() {
    console.log(this.state.hogs);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search Hogs by Name: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchTerm}
          />
          <input type="submit" />
        </form>

        <div className="ui grid container">
          {this.whichHogs !== ""
            ? this.whichHogs
            : this.state.hogs.map(hog => <Hog hog={hog} key={hog.name} />)}
        </div>
      </div>
    );
  }
}
