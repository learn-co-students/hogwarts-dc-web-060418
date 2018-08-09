import React from 'react'

const FilterBar = (props) => (
  <div className="ui grid">
    <div className="ui row"></div>
    <div className="two wide column"></div>
    <select onChange={props.sort} className="ui dropdown four wide column">
      <option disabled selected value> -- Sort Hogs By -- </option>
      <option value="name" name="name">Name</option>
      <option value="weight" name="weight">Weight</option>
    </select>
    <div className="four wide column"></div>
    <div className="ui toggle checkbox four wide column">
      <input type="checkbox" name="public" onChange={props.filterGreased}></input>
      <label>Filter to see Greased Hogs</label>
    </div>
  </div>

)

export default FilterBar
