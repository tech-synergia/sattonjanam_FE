import React, {useContext} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataProvider from './GlobalContext'
import MainRoute from './Components/MainRoute'



function App() {
  
  return (

    <DataProvider>
        <MainRoute/>
    </DataProvider>
   
    
  )
}

export default App
