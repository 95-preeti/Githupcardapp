import React from 'react'
import Card from "./Card"
import carddata from "./carddata"

function CardList(props) {
  const profiles = props.profiles;

  return (
    <div>
      {profiles.map((profile,key)=> (
      <div key={key}> 
      <Card {...profile} />
      </div>
       ))}
    
    </div>
  )
}

export default CardList
