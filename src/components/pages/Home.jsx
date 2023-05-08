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
import heroSectionImage from "../../assets/Images/hero-section-image.png";
import circle from "../../assets/Images/circle.svg";
import AboutSection from "../sections/AboutSection";

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
      width: "50rem",
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
  return (
    <>
      <div className={classes.heroSection}>
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
                  width: "50rem",
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
