import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import HogSort from './HogSort';

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      sortName: true,
      sortCriteria: "name",
      //if sortName is on, then sortWeight cannot be on
      filterGreased: false,
    }
    this.allHogs = []
    this.gifs = []
  }
  componentDidMount() {
    this.getHogGifsAndHogs()
  }

  getHogGifsAndHogs() {
    const searchTerm = "pig"
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r => r.json()).then(response => {
          this.gifs = response.data.slice(0,13)
          console.log(this.gifs)
          this.allHogs = hogs
          let index = 0;
          this.allHogs.forEach(hog => { 
            //iterate through all hogs and add gif url to each of them           
            hog.gif = this.gifs[index].images.preview_gif.url
            hog.id = index
            index++
          })
          this.setState({
            hogs: this.allHogs
          })
        })
  }
  // new SUPER FUNCTION TO HANDLE ALL SORT AND FILTER
  toggleSort = (isNameSortChosen) => {
    if(isNameSortChosen) {
      let currentHogDisplayList = this.state.hogs
      //debugger;
      currentHogDisplayList.sort((a, b) =>  {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;

      })
      //sort by name
      this.setState({
        sortName: true,
        hogs: currentHogDisplayList
      })
    } else {
      //meaning sort by weight
      let currentHogDisplayList = this.state.hogs
      const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      currentHogDisplayList.sort((a, b) => a[WEIGHT]-b[WEIGHT])
      this.setState({
        sortName: false,
        hogs: currentHogDisplayList
      })
    }
    //check all sort and filter booleans and render the according list
  }

  filterOnlyGreased = () => {
    //should I check any if nameSort is on here?
    const newFilter = !this.state.filterGreased
    if (newFilter) {
      this.setState({
        filterGreased: newFilter,
        hogs: [...this.state.hogs].filter(hog => hog.greased === true)
      })
    } else {
      //they want to unfilter
      // this.toggleSort(this.state.sortName)
      if(this.state.sortName) {
        //still need to sort by name
        this.setState({
          filterGreased: newFilter,
          hogs: [...this.allHogs].sort((a, b) =>  {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
    
          })
        })
      } else {
        //sort by weight is on
        const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        this.setState({
          filterGreased: newFilter,
          hogs: [...this.allHogs].sort((a, b) => a[WEIGHT]-b[WEIGHT])
        })
      }
      
    }    
  }

  
  render() {
    console.log("renderin my hoglist!")
    return (
      <div className="App">
          <Nav />
          <HogSort 
            toggleSort={this.toggleSort}
            //true or false
            nameSortOn={this.state.sortName}
            //new sort criteria state!
            sortCriteria={this.state.sortCriteria}
            filterGreased={this.state.filterGreased}
            handleFilter={this.filterOnlyGreased}/>
            
          <HogContainer hogs={this.state.hogs}/>

      </div>
    )
  }
}

export default App;
