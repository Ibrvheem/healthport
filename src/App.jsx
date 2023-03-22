import { useState } from 'react'
import './App.css'
import { ThemeProvider, createTheme, Typography } from '@material-ui/core'
import Navbar from './components/Navbar'
import Home from './Pages/Home'


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
      <Navbar/>
      <Home/>
    </ThemeProvider>
  )
}

export default App
