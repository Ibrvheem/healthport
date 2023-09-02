import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import wave from "../../assets/Images/background-wave.png";
// import heroSectionImage from "../../assets/Images/girl-w-oxygen-mask.jpg";
import heroSectionImage from "../../assets/Images/1.jpeg";
import circle from "../../assets/Images/circle.svg";
import AboutSection from "../sections/AboutSection";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => {
  return {
    h1: {
      fontSize: "8rem",
      color: "white",
      marginBottom: "2rem",
      lineHeight: "8rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "6rem",
      },
    },
    h3: {
      fontSize: "4rem",
      color: "white",
      margin: "2rem 0rem",
      "@media (max-width:959.95px)": {
        fontSize: "3rem",
      },
    },

    p: {
      fontSize: "2rem",
      color: "white",
      fontFamily: "Inter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    span: {
      backgroundImage: `URL(${circle})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    heroSection: {
      margin: "0rem 3rem",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2rem",
      height: "auto",
      backgroundImage: `URL(${wave})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      [theme.breakpoints.down("sm")]: {
        height: "auto",
        margin: "0 0",
        borderRadius: 0,
        padding: "8rem 0rem",
      },
    },
    gridContainer: {
      display: "flex",
      alignItems: "center",
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
    heroImageCard: {
      display: "flex",
      justifyContent: "end",
      position: "relative",
      top: "10rem",
      [theme.breakpoints.down("sm")]: {
        top: "14rem",
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
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
      },
    },
  };
});

function Home() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div
        className={classes.heroSection}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Container>
          <Grid
            container
            className={classes.gridContainer}
            style={{ height: "auto" }}
          >
            <Grid
              item
              md={6}
              xs={12}
              sm={12}
              lg={6}
              className={classes.gridItem}
            >
              <Typography variant="h1" className={classes.h1}>
                The new way to medical{" "}
                <span className={classes.span}>oxygen</span>
              </Typography>
              <Typography variant="h3" className={classes.h3}>
                Ensuring quality care where you are
              </Typography>
              <Typography variant="body1" className={classes.p}>
                By bringing innovative technologies together, we are bridging
                the gap and improving access to Respiratory care in low resource
                settings
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Learn more
              </Button>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sm={12}
              lg={6}
              className={classes.heroImageCard}
            >
              <Card
                elevation={20}
                style={{
                  width: "55rem",
                  height: "70rem",
                  borderRadius: "2rem",
                }}
              >
                <img src={heroSectionImage} className={classes.image} alt="" />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <AboutSection />
    </>
  );
}

export default Home;
