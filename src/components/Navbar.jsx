import { Button, Card, Collapse, Container, IconButton, List, ListItem, makeStyles } from '@material-ui/core'
import { HeadsetMicOutlined, MenuRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import Logo from '../assets/Images/Healthport-logo.png'


const useStyles = makeStyles((theme)=>{
    return{
        navbar: {
            padding: '1.4rem 8rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1.3rem',
            fontFamily: 'Inter',
            fontWeight: '600',
            color: '#002334',
            [theme.breakpoints.down('sm')]:{
                padding: '.5rem 4rem',

                
            }
        },
        logo:{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
        },
        logoImage:{
            height: '5rem',
            [theme.breakpoints.down('sm')]:{
                height: '4rem',

            }
        },
        list:{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]:{
                display: 'none'
            }

        
        },
        listItem:{
            '&:hover':{
                color: theme.palette.secondary.dark
            }

        },
        menuListsMobile: {
            width: '100%',
            marginTop: '1rem',
            // padding: '2rem 0',
            backgroundColor: '#e5e9eb',
            fontSize: '1.8rem',
            fontFamily: 'Inter',
            fontWeight: '700',
            color: '#002334',
            position: 'absolute',
            zIndex: '1',
          },
                  
          listItemMobile:{
            padding: '2rem 0',
            display:'flex',
            justifyContent: 'center',
            '&:hover':{
                color: theme.palette.secondary.dark
            }
        },
        hamburgerIcon:{
            display: 'none',
            padding: '1.2rem 0',
            [theme.breakpoints.down('sm')]:{
                display: 'flex'
            }

        },
        button:{

            fontSize: '1.3rem',
            fontFamily: 'Inter',
            fontWeight: '600',
            borderRadius: '2rem',
            borderWidth: '.1rem',
            color: '#002334',
            backgroundColor: 'white',
            textTransform: 'capitalize'
        }
    }

})

const menuLists = [
    {
        name: 'Oxygen Access',
        borderLeft: 'none'
    },
    {
        name: 'For Patients',
        borderLeft: 'none'

    },
    {
        name: 'For Hospital',
        borderLeft: 'none'
    },
    {
        name: 'For Partners',
        borderLeft: 'none'
    },
    {
        name: 'Oxiflow',
        borderLeft: '0.1rem solid gray'

    },
]
function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const classes = useStyles()
    function handleMenu() {
        setOpenMenu(!openMenu);
      }
      
  return (
    <>
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <img src={Logo} className={classes.logoImage} alt="" /><span></span>
            </div>
            <div className={classes.menuList}>
                <List className={classes.list}>
                    {
                        menuLists.map((menuList)=>{
                            return (<ListItem key = {menuList.name}  className = {classes.listItem}  style={{width: 'auto', borderLeft: menuList.borderLeft}}>{menuList.name}</ListItem>)
                        })
                    }
                </List>
            </div>
            <div className={classes.contactUs}>
                <List className={classes.list} disablePadding>
                    <ListItem disableGutters><HeadsetMicOutlined/> <span style={{width: '135px'}}> (234) 81 6308 9308</span></ListItem>
                    <ListItem disableGutters>
                        <Button variant='outlined' className={classes.button}>Login</Button>
                    </ListItem>
                </List>
            </div>
            <IconButton onClick={handleMenu} className = {classes.hamburgerIcon}>
                <MenuRounded style = {{fontSize: '4rem', color: '#002334'}}/>
            </IconButton>
        </div>
        <Card elevation={20}>
            <Collapse in = {openMenu} className={[classes.menuListsMobile]}>
                    <List disablePadding  style={{height: '50rem', display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
                        {
                            menuLists.map((menuList)=>{
                                return (<ListItem disablePadding key = {menuList.name}  className = {classes.listItemMobile}  style={{width: 'auto'}}>{menuList.name}</ListItem>)
                            })
                        }
                    <div className={classes.contactUsMobile}>
                                <ListItem disablePadding className = {classes.listItemMobile} ><HeadsetMicOutlined/> <span style={{width: 'auto'}}> (234) 81 6308 9308</span></ListItem>
                                <ListItem  disablePadding>
                                    <Button variant='outlined' className={classes.button} style = {{margin: 'Auto'}}>Login</Button>
                                </ListItem>
                        </div>
                    </List>
            </Collapse>
        </Card>


        
    </>
  )
}

export default Navbar
