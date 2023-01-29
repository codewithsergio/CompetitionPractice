import React from 'react'
import './BuildingItem.css'
import {Link} from 'react-router-dom'

function BuildingItem({name}) {
  return (
    <Link to={`/${name}`} className="no_underline">
      <div className="building hover">
        <span className="building__details">
          <span style={{marginRight: '1rem'}}>{name}</span>
        </span>
      </div>
    </Link>
  )
}

export default BuildingItem