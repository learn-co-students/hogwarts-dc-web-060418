import React from 'react';
import Hog from './Hog';

const HogContainer = (props) => {
    //old gif:
    //gif={props.gifs[props.originalHogs.indexOf(hog)]}
    return (
        <div>
            <h1>Our beautiful hogs</h1>
            <div className="ui cards container">
                {props.hogs.map(hog => <Hog key={hog.id} hog={hog} />)}
            </div>
        </div>
    )
}

export default HogContainer;