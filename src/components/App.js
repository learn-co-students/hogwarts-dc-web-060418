import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import FilterAndSortForm from './FilterAndSortForm'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayedHogs: [],
      filter: 'all',
      greased: false
    }  
  }

  componentDidMount() {
    console.log(hogs)
    this.setState({
      displayedHogs: hogs
    })
  }

  handleFilterSelection = (selectionType) => {
    console.log(selectionType)
    let tempDisplayedHogs = [...hogs]

    if (selectionType === 'name') {

      this.setState({
        filter: 'name',
        displayedHogs: tempDisplayedHogs.sort((a, b) => a.name.localeCompare(b.name))
      })

    }else if (selectionType === 'weight') {

      this.setState({
        filter: 'weight',
        displayedHogs: tempDisplayedHogs.sort((a, b) => b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      })

    }else {
      console.log(`all`)
      this.setState({
        filter: 'all',
        displayedHogs: hogs,
        greased: false
      })
      
    }
    console.log(this.state.displayedHogs.sort((a, b) => a.name.localeCompare(b.name)))
    this.setState({filter: selectionType})
  }




  handleGreasedToggler = (greasedValue) => {
    console.log(greasedValue)

    if(greasedValue) {
      let filteredHogsList = [...this.state.displayedHogs].filter(hog => hog.greased === greasedValue)
      console.log(filteredHogsList)
      this.setState({
        greased: greasedValue,
        displayedHogs: filteredHogsList
      })
    }else {
      this.setState({
        greased: greasedValue,
        displayedHogs: [...hogs]
      })
    }
  }

  render() {
    return (
      <div className="App">
        < Nav />
        <FilterAndSortForm handleFilterSelection={this.handleFilterSelection} handleGreasedToggler={this.handleGreasedToggler}/>
        <HogContainer hogs={this.state.displayedHogs}/>
      </div>
    )
  }
}

export default App;
