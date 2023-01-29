import React from 'react'
import './Buildings.css'
import BuildingItem from "./BuildingItem"

function Buildings() {
  return (
    <div>
      <div className="title">CSUN Buildings</div>
      <div className="buildings__list">
        <BuildingItem name="Jacaranda"/>
        <BuildingItem name="Sequoia Hall"/>
        <BuildingItem name="Live Oak"/>
        <BuildingItem name="Cypress Hall"/>
        <BuildingItem name="Jerome Richfield"/>
        <BuildingItem name="Bayramian Hall"/>
        <BuildingItem name="Eucalyptus Hall"/>
        <BuildingItem name="Extended Learning University"/>
        <BuildingItem name="Bookstein Hall"/>
        <BuildingItem name="Manzanita Hall"/>
      </div>
    </div>
  )
}

export default Buildings