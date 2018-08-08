import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from "./HogList";
import Filters from "./Filters";

class App extends Component {
  constructor(){
    super()
    this.state = {
      displayedHogs: hogs,
      filterGreased: false,
      sortName: false,
      sortWeight: false
    }
  }


  filterGreased = ()=>{
    let sortedHogs = this.applyFilters(!this.state.filterGreased,this.state.sortName, this.state.sortWeight)
    this.setState({
                    filterGreased:!this.state.filterGreased,
                    displayedHogs: sortedHogs
                  })
  }

  sortName = ()=>{
    let sortWeight
    if (this.state.sortWeight && !this.state.sortName) {
      //Filter for weight must be removed
      sortWeight=false 
    } else {
      sortWeight=this.state.sortWeight
    }
    let sortedHogs = this.applyFilters(this.state.filterGreased, !this.state.sortName, sortWeight)
    
    this.setState({
      sortName: !this.state.sortName,
      displayedHogs: sortedHogs,
      sortWeight: sortWeight
    })
  }

  sortWeight = ()=> {
    let sortName
    if (this.state.sortName && !this.state.sortWeight) {
      //Filter for weight must be removed
      sortName = false
    } else {
      sortName = this.state.sortName
    }
    let sortedHogs = this.applyFilters(this.state.filterGreased, sortName, !this.state.sortWeight)
    this.setState({
      sortWeight: !this.state.sortWeight,
      displayedHogs: sortedHogs,
      sortName: sortName
    })
  }

  applyFilters = (filterGreased,sortName,sortWeight)=>{
    let sortedHogs = [...hogs]
    if (filterGreased) {
      sortedHogs = sortedHogs.filter(hog => hog.greased === true)
    }
    if (sortName) {
      sortedHogs.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (sortWeight) {
      sortedHogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
    }
    return sortedHogs
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <Filters  greasedChecked={this.state.filterGreased} 
                    filterGreased={this.filterGreased}
                    sortNameChecked={this.state.sortName}
                    sortName={this.sortName}
                    sortWeightChecked={this.state.sortWeight}
                    sortWeight={this.sortWeight} />
          <HogList hogs={this.state.displayedHogs}/>
      </div>
    )
  }
}

export default App;
