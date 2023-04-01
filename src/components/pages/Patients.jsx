import {Grid, Typography} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import chem from '../../assets/Images/healthport-chem.jpeg'
import circle from '../../assets/Images/circle-wide.svg'
import AboutSection from '../sections/AboutSection'
import patient from '../../assets/Images/healthport-patient.jpeg'
import pregnant from '../../assets/Images/healthport-pregnancy.jpeg'
import oxygen from '../../assets/Images/healthport-oxygen.jpeg'
import community from '../../assets/Images/healthport-community.jpeg'

const useStyles = makeStyles((theme)=>{
  return{
    flex:{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    patientsHeader:{
      padding: '6rem 0rem  30rem 0rem',
      backgroundColor: theme.palette.primary.main,
    },
    patientsImages:{
      height: 'auto',
      position: 'relative',
      bottom: '29rem',
    },
    patientsImage:{
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '5rem',
      boxShadow: '0 40px 70px -20px rgba(0, 0, 0, 0.4)'

    },

    patientImage:{
      height:'55rem',
      width: '100%',
      objectFit: 'cover',
      borderRadius: '2.5rem',
    },
    h1:{
      fontSize: '6rem',
      color: '#002334',
      marginBottom: '2rem',
      [theme.breakpoints.down('sm')]:{
          fontSize: '6rem',
      }
    },
    h3:{
      fontSize: '4rem',
      color: '#002334',
      margin: '2rem 0rem', 
      [theme.breakpoints.down('sm')]:{
          fontSize: '3rem'
      }
    },
    p:{
      fontSize: '1.8rem',
      color: '#002334',
      fontFamily:'Inter',
      [theme.breakpoints.down('sm')]:{
          fontSize: '2rem'
      }
    },
    writeup:{
      position: 'relative',
      bottom: '19rem',

  },
    span:{
      backgroundImage: `URL(${circle})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },

    testimonalWriteUp:{
      paddingRight: '7rem'
    }


  }

  
})

function Patients() {
  const classes = useStyles()
  return (
    <div className={classes.patients}>
      <div className= {classes.patientsHeader}>
        <Container>
          <Grid container className={classes.flex}>
            <Grid item md = {6}>
              <Typography variant='h1' className={classes.h1}> Enjoy reliable and affordable medical oxygen access</Typography>
            </Grid>
            <Grid item md = {6}>
              <Typography variant='body1' className={classes.p}>HealthPort  provides a patient centered solution for medical oxygen when and where you need it. <br /> <br /> We work with hospitals in your community to make sure you are diagnosed and treated promptly.  After your hospital stay we can facilitate ongoing care at home so that your recovery is a breeze.</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.patientsImages}>
        <Grid container spacing={1}>
          <Grid item md = {3}>
            <Card elevation={0} className = {classes.patientsImage} style={{height:'90%', }}>
              <img src= {oxygen} height='100%' width='100%'alt="" />

            </Card>
          </Grid>
          <Grid item md = {3} sm ={6}>
            <Card elevation={0} className = {classes.patientsImage}  style={{height:'100%'}}>
                <img style={{objectFit: 'cover'}} src= {community} height='100%' width='100%'alt="" />

            </Card>
          </Grid>
          <Grid item md = {3} sm = {6}>
            <Card elevation={0} className = {classes.patientsImage} style={{height:'70%'}}>
              <img style={{objectFit: 'cover'}} src= {pregnant}  height='100%' width='100%'alt="" />

            </Card>
          </Grid>
          <Grid item md = {3} sm = {6}>
            <Card elevation={0} className = {classes.patientsImage} style={{height:'90%'}}>
              <img style={{objectFit: 'cover'}} src= {chem} height='100%' width='100%'alt="" />

            </Card>

          </Grid>
        </Grid>
      </div>
      <div className={classes.writeup}>
        <Container>
          <Grid item md = {12}>
            <Typography variant='h1' className={classes.h1} style = {{textAlign: 'center'}}> Enjoy Healthcare that is patient focused.  Our<span className={classes.span}>clinical support</span> team is only a call away.</Typography>

            
          </Grid>
        </Container>
      </div>

      <div>
        <Container>
          <Grid container style={{height:'40rem', display: 'flex', alignItems: 'center'}}>
            <Grid item md = {6} className = {classes.testimonalWriteUp}>
              <Typography variant='h4' className={classes.h3}>HealthPort works within each community to advocate for quality patient care and timely patient presentation to the hospital</Typography>
              <Typography variant='body1' className={classes.p}>With our hospital and payment navigator partners you do not have to worry about inability to pay for oxygen services before care is rendered to you or your loved one.</Typography>
            </Grid>
            <Grid item md = {6}>
              <img src={patient} alt="" className={classes.patientImage}/>
            </Grid>
          </Grid>
        </Container>
      </div> 
      <AboutSection/>
    </div>
  )
}

export default Patients
