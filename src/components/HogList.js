import React from 'react'
import Hog from './Hog'

const HogList = ({hogs}) => (
  <div className="hog-list ui padded cards">
    {hogs.map(hog => {
      return <Hog hog={hog} key={hog.id}/>
    })}
  </div>
)


export default HogList
