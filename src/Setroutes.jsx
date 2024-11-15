import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LandingPages from './components/LandingPages'
import ApplyForm from './components/ApplyForm'
import './components/style.css'
function Setroutes() {
  return (
<>

<Router>
<Routes>
    <Route path='/' element={<LandingPages/>}/>
    <Route path='/applyForm' element={<ApplyForm/>}/>

</Routes>

</Router>

</>
  )
}

export default Setroutes
