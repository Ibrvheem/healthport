import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
// import mockup from "../../assets/Images/doctor-smiling.png";
import mockup from "../../assets/Images/4.png";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => {
  return {
    h1: {
      fontSize: "8rem",
      color: "#002334",
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "6rem",
      },
    },

    p: {
      fontSize: "2rem",
      color: "#002334",
      fontFamily: "Inter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    gridContainer: {
      // height: '75rem',
      display: "flex",
      alignItems: "center",
      paddingTop: "5rem",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    gridItem: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    button: {
      margin: "3rem 0",
      width: "15rem",
      fontFamily: "Inter",
      fontWeight: "bold",
      fontSize: "1.5rem",
      borderRadius: "5rem",
      padding: "1.5rem 1rem",
      textTransform: "unset",
      letterSpacing: ".1rem",
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      [theme.breakpoints.down("sm")]: {
        letterSpacing: 0,
      },
    },
    image: {
      width: "50rem",
      height: "70rem",
      objectFit: "cover",
      objectPosition: "center",
      [theme.breakpoints.down("sm")]: {
        height: "60rem",
      },
    },
    aboutSection: {
      marginTop: "20rem",
      backgroundColor: "#f6f6f6",
      [theme.breakpoints.down("sm")]: {
        marginTop: "10rem",
      },
    },
  };
});

function AboutSection() {
  useEffect(() => {
    Aos.init();
  });
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.aboutSection}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Grid container className={classes.gridContainer}>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            lg={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={mockup} className={classes.image} width="100%" alt="" />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            lg={6}
            className={classes.gridItem}
            style={{ paddingRight: "0" }}
          >
            <Container>
              <Typography variant="h3" className={classes.h3}>
                "Together we can create a differentiated patient experience
                where quality outcomes and affordability are prioritized"
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Read Story
              </Button>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AboutSection;
