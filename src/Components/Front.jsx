import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

function Front() {
  return (
<div style={{flexDirection:"row"}} >
<ButtonGroup  variant="contained" aria-label="outlined primary button group">
      <Button><Link to={"/home"} style={{textDecoration:"none" , color:"white"}}>Odis Batsmen</Link></Button>
      <Button><Link to={"/T20s"} style={{textDecoration:"none" , color:"white"}}>T20s Batsmen</Link></Button>
      <Button><Link to={"/Tests"} style={{textDecoration:"none" , color:"white"}}>Tests Batsmen</Link></Button>
      <Button><Link to={"/OdiBowl"} style={{textDecoration:"none" , color:"white"}}>Odis Bowler</Link></Button>
      <Button><Link to={"/T20Bowl"} style={{textDecoration:"none" , color:"white"}}>T20s Bowler</Link></Button>
      <Button><Link to={"/TestBowl"} style={{textDecoration:"none" , color:"white"}}>Tests Bowler</Link></Button>
      <Button><Link to={'OdiTeam'} style={{textDecoration:"none" , color:"white"}}>Team Odis</Link></Button>
      <Button><Link to={'T20Team'} style={{textDecoration:"none" , color:"white"}}>Team T20s</Link></Button>
      <Button><Link to={'TestTeam'} style={{textDecoration:"none" , color:"white"}}>Team Tests</Link></Button>




    </ButtonGroup>
</div>
 )
}

export default Front
