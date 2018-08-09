import React, {Component} from 'react'
import hogs from '../porkers_data'
import HogList from './HogList'
import FilterBar from './FilterBar'
let URL = `http://api.giphy.com/v1/gifs/search?q=hogwarts&api_key=dc6zaTOxFJmzC&rating=g`

class Body extends Component {

  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filterGreased: false,
      sort: ""
    }

  }

  handleGreasedCheckbox = (e) => {
    let newHogs
    if (e.target.checked) {
      newHogs = this.state.hogs.filter(hog => {
        return hog.greased === true
      })
    } else {
      newHogs = hogs
    }
    this.setState({hogs: newHogs})
  }

  handleSortState = (e) => {
    this.setState({sort: e.target.value})
    if (e.target.value === "name") {
      this.sortPiggiesByName()
    } else if (e.target.value === "weight") {
      this.sortPiggiesByWeight()
    }
  }

  sortPiggiesByName = () => {
    this.state.hogs.sort(function(a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
  }

  sortPiggiesByWeight = () => {
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    this.state.hogs.sort(function(a,b) {
      return (a[weight] - b[weight])
    })
  }

  assignGifs() {
    fetch(URL)
      .then(resp => resp.json())
      .then(json => {
        let listOfHogs = hogs
        for(let i = 0; i < hogs.length; i++) {
          listOfHogs[i].gif = json.data[i]
        }
        return listOfHogs
      })
      .then(list => {
        this.setState({hog: list})
      })
  }

  componentDidMount() {
    this.assignGifs()
  }

  render() {
    return (
      <div className="body">
        <h4 className="ui horizontal divider header">Filter Bar</h4>
        <FilterBar sort={this.handleSortState} filterGreased={(e) => this.handleGreasedCheckbox(e)}/>
        <h4 className="ui horizontal divider header">Hogs</h4>
        <HogList hogs={this.state.hogs}/>
      </div>
    )
  }

}

export default Body
