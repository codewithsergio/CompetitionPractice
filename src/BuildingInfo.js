import React from 'react'
import './BuildingInfo.css'
import RatingInputBox from './RatingInputBox'
import RatingsList from './RatingsList'

function BuildingInfo({name, user}) {
  return (
    <div>
        <div className="username">Email: {user[1]}</div>
        <RatingInputBox user={user} name={name}/>
        <RatingsList user={user} name={name}/>
    </div>
  )
}

export default BuildingInfo