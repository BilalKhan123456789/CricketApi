import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Card from "react-bootstrap/Card";



function Pdata() {
const [player,setplayer] = useState([]);
const loc = useLocation()
const {from} = loc.state

console.log(from)


  let playerData= async()=>{

  await fetch(`https://rest.entitysport.com/v2/players/${from}?token=ec471071441bb2ac538a0ff901abd249`)
  .then((res)=>res.json())
  .then((data)=>{
     setplayer(data.response.player)



  })

}
console.log(player)

useEffect(()=>{
playerData()
},[])

  return (
    <div>
    <h1 style={{textAlign:"center"}}>Detail of {player.alt_name}</h1>

    <Card style={{ margin:"auto"  , width: "18rem", height: "15rem" }}>

                <Card.Body>
                  <h6>DOB: {player.birthdate} </h6>
                  <Card.Title>Name: {player.alt_name}</Card.Title>
                  <h6>Batting Style: {player.batting_style}</h6>
                  <h6>Bowling Style: {player.bowling_style}</h6>
                  <h6>Nationality: {player.nationality}</h6>
                 <h6>Country: {player.country}</h6>
                 
                </Card.Body>
              </Card>

  


    </div>
  )
}

export default Pdata
