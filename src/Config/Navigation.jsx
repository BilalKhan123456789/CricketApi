import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Pdata from '../Components/Pdata'
import Front from '../Components/Front'
import T20s from "../Components/T20s"
import Tests from "../Components/Tests"
import OdiBowl from "../Components/OdiBowl"
import T20Bowl from "../Components/T20Bowl"
import TestBowl from "../Components/TestBowl"
import OdiTeam from '../Components/Teams/OdiTeam'
import T20Team from '../Components/Teams/T20Team'
import TestTeam from '../Components/Teams/TestTeam'




function Navigation() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Front/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Pdata" element={<Pdata/>}></Route>
        <Route path='T20s' element={<T20s/>}></Route>
        <Route path='Tests' element={<Tests/>}></Route>
<Route path='/OdiBowl' element={<OdiBowl/>}></Route>
<Route path='/T20Bowl' element={<T20Bowl/>}></Route>
<Route path='/TestBowl' element={<TestBowl/>}></Route>
<Route path='/OdiTeam' element={<OdiTeam/>}></Route>
<Route path='/T20Team' element={<T20Team/>}></Route>
<Route path='/TestTeam' element={<TestTeam/>}></Route>








      </Routes>
    </div>
  )
}

export default Navigation
