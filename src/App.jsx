import { useState } from 'react'
import './App.css'
import { ThemeProvider, createMuiTheme, Typography } from '@material-ui/core'
import Navbar from './components/Navbar'


const theme =  createMuiTheme({
  palette:{
    primary:{
      main: '#49b0b6',
      light: '#67bcc4',
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
    </ThemeProvider>
  )
}

export default App
