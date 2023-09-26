import React from 'react'
import Home from './Home';
import Create from './Create';
import Update from './Update';
import View from './View';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/edit/:id' element={<Update />}></Route>
      <Route path='/view/:id' element={<View />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
