import React, {Component} from 'react'
import hogs from '../porkers_data'
import HogList from './HogList'
import FilterBar from './FilterBar'

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
    this.state.hogs.sort(function(a,b) {
      return (a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    })
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
