import React,{Component} from 'react';

class Filters extends Component{

  
  render() {
    return ( 
    <div className="filters">
        <div>Greased: 
            <input type="checkbox" checked={this.props.greasedChecked} onClick={this.props.filterGreased}/>
        </div>
        <div>Sort By Weight: 
            <input type="checkbox" checked={this.props.sortWeightChecked} onClick={this.props.sortWeight}/>
        </div>
        <div>Sort By Name: 
            <input type="checkbox" checked={this.props.sortNameChecked} onClick={this.props.sortName}/>
        </div>
    </div> )
  }
}
 
export default Filters;