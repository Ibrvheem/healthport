import React from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import circle from "../../assets/Images/circle.svg";
import wave from "../../assets/Images/background-wave.png";
import ImageText from "./ImageText";
import motherChildren from "../../assets/Images/healthport-MotherChildren.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    h1: {
      fontSize: "6rem",
      color: "#002334",
      marginBottom: "2rem",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.7rem",
      },
    },

    h6: {
      fontSize: "1.3rem",
      fontWeight: "700",
      fontFamily: "inter",
      textAlign: "center",
      color: "#002334",
      marginBottom: "3rem",
      [theme.breakpoints.down("sm")]: {
        fontWeight: 100,
      },
    },
    p: {
      fontSize: "1.8rem",
      color: "#002334",
      fontFamily: "Inter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.6rem",
      },
    },
    span: {
      backgroundImage: `URL(${circle})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    hospitalsHeader: {
      padding: "8rem 0",
    },
    main: {
      margin: "3rem 3rem",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2rem",
      height: "60rem",
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
    mainWritings: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      paddingRight: "10rem",
      [theme.breakpoints.down("sm")]: {
        paddingRight: "0rem",
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
    },
    largeBtn: {
      width: "35rem",
      fontSize: "1.8rem",
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
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
      },
    },
    writeup: {
      marginTop: "19rem",
    },
  };
});
function Hostipals() {
  const classes = useStyles();
  return (
    <div className={classes.hospitals}>
      <div className={classes.hospitalsHeader}>
        <Container>
          <Typography variant="h6" className={classes.h6}>
            FOR HOSPITALS
          </Typography>
          <Typography variant="h1" className={classes.h1}>
            Partner with HealthPort for{" "}
            <span className={classes.span}>seamless</span> critical resource
            delivery
          </Typography>
        </Container>
      </div>
      <div className={classes.main}>
        <Container style={{ height: "100%" }}>
          <Grid container style={{ height: "100%" }}>
            <Grid item md={6} className={classes.mainWritings}>
              <Typography
                variant="h3"
                className={classes.h3}
                style={{ color: "white" }}
              >
                Digitized medical oxygen distribution
              </Typography>
              <Typography
                variant="body1"
                className={classes.p}
                style={{ color: "white" }}
              >
                HealthPort uses a personalized hospital integration process to
                ensure all installations are tailored to fit . We build on your
                exisitng oxygen infrastructure to bring you quality oxygen
                service distribution. Oxygen when and where you need it.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={[classes.button, classes.largeBtn]}
              >
                Sign up now
              </Button>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.writeup}>
        <Container>
          <Grid item md={12}>
            <Typography
              variant="h1"
              className={classes.h1}
              style={{ textAlign: "center" }}
            >
              Our partner hospitals access critical medical resources that
              promptly reduce oxygen-related mortality while improving clinician
              productivity and patient outcomes.
            </Typography>
          </Grid>
        </Container>
      </div>
      <div>
        <Typography
          variant="h6"
          className={classes.h6}
          style={{
            fontSize: "2rem",
            fontWeight: 500,
            marginBottom: 0,
            marginTop: "6rem",
          }}
        >
          How do we achieve this?
        </Typography>
        <ImageText
          image={motherChildren}
          header="Improved diagnostic capture rates"
          text="We work with your clinical team to create replicable best practices and treatment protocols. All patients are assessed adequately upon admission and we use this clinical data to guide oxygen therapy management."
        />
        <ImageText
          imageFirst={true}
          header="Oxygen production onsite or near-site"
          text="We know that electricity is not reliable and transportation can quickly affect the cost of oxygen to your facility and the patients- so we factored these in our solution. Enjoy seamless oxygen distribution with minimal to zero upfront costs with HealthPort as your Oxygen service provider"
        />
        <ImageText
          imageFirst={false}
          header="Digitized Oxygen Service"
          text="We work with different global partners to bring you innovative oxygen equipment, diagnostic tools and digitized inventory control. With these you can safely forecast your oxygen needs, plan your supplies and reduce your oxygen overhead costs."
        />
      </div>
    </div>
  );
}

export default Hostipals;
