import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme)=>{
    return{
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
      
        gridContainer:{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            height: 'auto',
            margin: '10rem 0rem',
            

        },
        gridImage:{
            height: '68rem',
            width: '68rem',
            
            // backgroundColor:'red',
        
        },
        gridText: {

        },
        image:{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center',            
            borderRadius: '2rem',


        }
    }
})
function ImageText(props) {
    const [imageFirst, setImageFirst ] = useState(props.imageFirst)
    const classes = useStyles()
  return (
    <div>
        <Container>
            <Grid container spacing={10} className = {classes.gridContainer} style = {{flexDirection: imageFirst? 'row-reverse': 'row' }}>
                <Grid item md = {6} className = {classes.gridImage}>
                    <img src={props.image} className={classes.image} alt="" />
                    
                </Grid>
                <Grid item md = {6} className = {classes.gridText}> 
                    <Typography variant='h3' className={classes.h3}>{props.header}</Typography>
                    <Typography variant='body1' className={classes.p}>{props.text}</Typography>

                </Grid>
            </Grid>
        </Container>
      
    </div>
  )
}

export default ImageText
