import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import R1 from './R1'
import R2 from './R2'
import Rnav from './Rnav'

function Rmain() {
  return (
    <div>
<BrowserRouter>
<Rnav/>
<Routes>
    <Route path='/r1' element={<R1/>}></Route>
    <Route path='/r2' element={<R2/>} ></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Rmain