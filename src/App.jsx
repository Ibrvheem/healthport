import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme, Typography } from '@material-ui/core'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Patients from './components/pages/Patients'



const theme =  createTheme({
  palette:{
    primary:{
      main: '#49b0b6',
      light: '#899fa7',
      dark: '#36717d'
    },
    secondary:{
      main: '#7e366f',
      light: '#946494'
    },
  },
    typography:{
      fontFamily:'freight-text-pro-regular',
    }
})
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Home/>} />
          <Route exact path = '/patients' element = {<Patients/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
