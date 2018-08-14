import React, {Component} from 'react'
import HogCard from './HogCard'

class HogContainer extends Component {



    renderIndividualHogCards = () => {
        return this.props.hogs.map(hog => {
            return <HogCard key={hog.name} hog={hog} />
        })
    }

    render() {
        return(
           <div>
               {this.renderIndividualHogCards()}
           </div>
        )
    }
}

export default HogContainer;