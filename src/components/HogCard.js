import React, { Component } from 'react';

class HogCard extends Component {
    state = { 
        expanded: false
     }

    toggleExpand = () =>{
        this.setState({expanded: !this.state.expanded})
    }

    render() { 
        return (
            <div onClick={this.toggleExpand} className="hog-card ui eight wide column card">
                <img alt={this.props.name} src = {`./hog-imgs/${this.props.name.replace(/\s+/g, '_').toLowerCase()}.jpg`}/>
                <h3>{this.props.name}</h3>
                {this.state.expanded && (<span>
                    <p>specialty: {this.props.specialty}</p>
                    <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water:
                         {this.props.weight} </p>
                    <p>highest medal achieved: {this.props.medal} </p>
                    </span>
                )}
            </div>
          );
    }
}
 

export default HogCard;