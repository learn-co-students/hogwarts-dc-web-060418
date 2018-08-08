import React from 'react';
import HogCard from "./HogCard";

const HogList = ({hogs}) => {
    return (
        <div className="hog-list ui grid container">
            {hogs.map(hog=><HogCard name={hog.name} 
                                    specialty={hog.specialty} 
                                    greased={hog.greased}
                                    weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                                    medal={hog['highest medal achieved']}
                                    key={hog.name}/>)}
        </div>
      );
}
 
export default HogList;