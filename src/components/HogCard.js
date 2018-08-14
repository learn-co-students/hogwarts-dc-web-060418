import React, {Component} from "react"

class HogCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayAllDetails: false
        }
    }

    handleClick = (target) => {
        this.setState({displayAllDetails: !this.state.displayAllDetails})
    }

    getHogImg = () => {
        return require('../hog-imgs/' + this.props.hog.name.toLowerCase().split(' ').join('_') + '.jpg')    
    }

    renderAllDetails = () => {
        const {greased, specialty} = this.props.hog
        return (
            <span>
                <p>Greased: {greased.toString().charAt(0).toUpperCase() + greased.toString().slice(1)}</p>
                <p>Speciality: {specialty}</p>
                <p>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                <p>Highest Medal Achieved: {this.props.hog['highest medal achieved'].charAt(0).toUpperCase() + this.props.hog['highest medal achieved'].slice(1)}</p>
            </span>
        )
    }
    
    render() {
        const {name} = this.props.hog
        return(
            <div onClick={(event) => this.handleClick(event.target)}>
                <h3>Name: {name}</h3>
                <img src={this.getHogImg()} alt='hog' />
                {this.state.displayAllDetails ? this.renderAllDetails() : null}
                <br/>
            </div>
        )
    }
}

export default HogCard;