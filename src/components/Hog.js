import React from 'react';

const WEIGHT = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class Hog extends React.Component {
    constructor() {
        super()
        this.state = {
            showDetails: false,
            hidden: false
        }
    }

    showDetails() {
        if(this.state.showDetails) {
            return (
                <div>
                    <p className="description">Specialty: {this.props.hog.specialty}</p>
                    <p className="description">Weight: {this.props.hog[WEIGHT]}</p>
                    <p className="description">Medal: {this.props.hog["highest medal achieved"]}</p>
                    <input type="checkbox" checked={this.props.hog.greased} onChange={this.toggleGreased}/>
                </div>
            )
        }
    }
    toggleShowDetail = () => {
        let newShow = !this.state.showDetails
        this.setState({
            showDetails: newShow
        })
    }
    hideMe = (e) => {
        this.setState({
            hidden: true
        })
    }

    toggleGreased = () => {
        console.log("greasin")
        
    }

    render() {
        if (!this.state.hidden) {
            return (
                <div className="ui card">
                    <img alt="hoooog" className="ui centered small image" src={this.props.hog.gif}/>
                    <div className="content">
                        <p className="header">{this.props.hog.name} <button onClick={this.hideMe}>x</button></p>
                        
                        {this.showDetails()}
                    </div>
                    <div className="ui bottom attached button" onClick={this.toggleShowDetail}>
                            <i className="add icon"></i>
                            Show piggy info
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
        
    }
}

export default Hog;