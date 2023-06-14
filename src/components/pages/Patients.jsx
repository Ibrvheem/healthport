import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import chem from "../../assets/Images/healthport-chem.jpeg";
import circle from "../../assets/Images/circle-wide.svg";
import AboutSection from "../sections/AboutSection";
import patient from "../../assets/Images/healthport-patient.jpeg";
import pregnant from "../../assets/Images/healthport-pregnancy.jpeg";
import girlOxygen from "../../assets/Images/girlOxygen.png";
import oxygen from "../../assets/Images/healthport-oxygen.jpeg";
import community from "../../assets/Images/healthport-community.jpeg";
import pneumonia from "../../assets/Images/pneumonia.png";
import handup from "../../assets/Images/handup.png";
import ImageText from "./ImageText";

const useStyles = makeStyles((theme) => {
  return {
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    patients: {
      position: "relative",
    },
    patientsHeader: {
      padding: "6rem 0rem  30rem 0rem",
      backgroundColor: theme.palette.primary.main,
    },
    patientsImages: {
      height: "auto",
      position: "absolute",
      top: "35rem",
      [theme.breakpoints.down("sm")]: {
        top: "55rem",
      },
    },
    patientsImage: {
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "5rem",
      boxShadow: "0 40px 70px -20px rgba(0, 0, 0, 0.4)",
    },
    patientImageContainer: {
      // [theme.breakpoints.down('sm')]:{
      // height: '50%',
      width: "100%",
      // }
    },

    patientImage: {
      height: "55rem",
      width: "100%",
      objectFit: "cover",
      borderRadius: "2.5rem",
      [theme.breakpoints.down("sm")]: {
        height: "40rem",
        width: "100%",
      },
    },
    h1: {
      fontSize: "7rem",
      color: "#002334",
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
      },
    },

    p: {
      fontSize: "1.8rem",
      color: "white",
      fontFamily: "Inter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    writeup: {
      marginTop: "40rem",
    },
    span: {
      backgroundImage: `URL(${circle})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },

    testimonalWriteUp: {
      paddingRight: "7rem",
      [theme.breakpoints.down("sm")]: {
        paddingRight: 0,
      },
    },
  };
});

function Patients() {
  const classes = useStyles();
  return (
    <div className={classes.patients}>
      <div className={classes.patientsHeader}>
        <Container>
          <Grid container className={classes.flex}>
            <Grid item md={6}>
              <Typography
                variant="h1"
                className={classes.h1}
                style={{ color: "white" }}
              >
                {" "}
                Enjoy reliable and affordable medical oxygen access
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1" className={classes.p}>
                HealthPort provides a patient centered solution for medical
                oxygen when and where you need it. <br /> <br /> We work with
                hospitals in your community to make sure you are diagnosed and
                treated promptly. After your hospital stay we can facilitate
                ongoing care at home so that your recovery is a breeze.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.patientsImages}>
        <Grid container spacing={1}>
          <Grid item md={3} sm={6} xs={6}>
            <Card
              elevation={0}
              className={classes.patientsImage}
              style={{ height: "90%" }}
            >
              <img
                style={{ objectFit: "cover" }}
                src={pneumonia}
                height="100%"
                width="100%"
                alt=""
              />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            <Card
              elevation={0}
              className={classes.patientsImage}
              style={{ height: "100%" }}
            >
              <img
                style={{ objectFit: "cover" }}
                src={handup}
                height="100%"
                width="100%"
                alt=""
              />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            <Card
              elevation={0}
              className={classes.patientsImage}
              style={{ height: "70%" }}
            >
              <img
                style={{ objectFit: "cover" }}
                src={pregnant}
                height="100%"
                width="100%"
                alt=""
              />
            </Card>
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            <Card
              elevation={0}
              className={classes.patientsImage}
              style={{ height: "90%" }}
            >
              <img
                style={{ objectFit: "cover" }}
                src="../../src/assets/Images/girlOxygen.png"
                height="100%"
                width="100%"
                alt=""
              />
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className={classes.writeup}>
        <Container>
          <Grid item md={12}>
            <Typography
              variant="h1"
              className={classes.h1}
              style={{ textAlign: "center" }}
            >
              {" "}
              Enjoy Healthcare that is patient focused. Our
              <span className={classes.span}> clinical support</span> team is
              only a call away.
            </Typography>
          </Grid>
        </Container>
      </div>

      <div>
        <ImageText
          image={patient}
          header="HealthPort works within each community to advocate for quality patient care and timely patient presentation to the hospital"
          text="With our hospital and payment navigator partners you do not have to worry about inability to pay for oxygen services before care is rendered to you or your loved one."
        />
      </div>
      <AboutSection />
    </div>
  );
}

export default Patients;
