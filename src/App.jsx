import React from 'react'
import TopBar from './components/TopBar'
import All from './components/All'
import FullStackDevelopment from './components/FullStackDevelopment'
import Cyber from './components/Cyber'
import DataSc from './components/DataSc'
import Career from './components/Career'
import { BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom'
import { useState } from 'react'
function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path='/all' element={<All/>}/>
      <Route path='/fsd' element={<FullStackDevelopment/>}/>
      <Route path='/cyber' element={<Cyber/>}/>
      <Route path='/datasc' element={<DataSc/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='*' element={<Navigate to= '/all' />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App