import {
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import oxiflowImage from "../../assets/Images/oxiflowImage.jpeg";
import wave from "../../assets/Images/background-wave.png";

import circle from "../../assets/Images/circle.svg";

import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    h1: {
      fontSize: "6rem",
      color: "#002334",
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4.2rem",
      },
    },
    h3: {
      fontSize: "4rem",
      color: "#002334",
      margin: "2rem 0rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 700,
      fontFamily: "inter",
      paddingBottom: "2rem",
      textAlign: "left",
      color: "#002334",
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
    oxiflowMain: {
      margin: "0rem 3rem",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2rem",
      height: "70rem",
      backgroundImage: `URL(${wave})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      [theme.breakpoints.down("sm")]: {
        height: "60rem",
        margin: "0 0",
        borderRadius: 0,
        padding: "8rem 0rem",
      },
    },
    gridContainer: {
      display: "flex",
      alignItems: "center",
      //   justifyContent: "space-between",
      height: "100%",
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
    imageGridItem: {
      display: "flex",
      justifyContent: "flex-end",
    },
    oxiflowImageCard: {
      display: "flex",
      justifyContent: "end",
      width: "fit-content",
      borderRadius: "5rem",
      boxShadow: "-18px 36px 40px -20px rgba(0, 0, 0, .56)",
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        top: "5rem",
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
      width: "45rem",
      height: "55rem",
      objectFit: "cover",
      objectPosition: "center",
      [theme.breakpoints.down("sm")]: {
        height: "100%",
        width: "100%",
      },
    },
    nearbyFacility: {
      margin: "5rem 0rem",
      [theme.breakpoints.down("sm")]: {
        marginTop: "20rem",
      },
    },
    numberSpan: {
      backgroundColor: theme.palette.primary.main,
      fontSize: "1.5rem",
      color: "white",
      height: "2.5rem",
      width: "2.5rem",
      marginRight: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      fontFamily: "Inter",
    },
    listItem: {
      margin: "1.2rem 0rem",
    },
  };
});
function Oxiflow() {
  const classes = useStyles();
  return (
    <div className={classes.oxiflow}>
      <div className={classes.oxiflowMain}>
        <Container style={{ height: "100%" }}>
          <Grid container className={classes.gridContainer}>
            <Grid
              item
              md={6}
              xs={12}
              sm={12}
              lg={6}
              className={classes.gridItem}
            >
              <Typography variant="h6" className={classes.h6}>
                OXIFLOW DASHBOARD
              </Typography>
              <Typography variant="h1" className={classes.h1}>
                Data <span className={classes.span}>informed </span>
                emergency care coordination{" "}
              </Typography>
              <Typography variant="body1" className={classes.p}>
                HealthPort integrated health facilities are trusted oxygen sites
                that are ready to serve you with availability critical
                resources. We focus on infrastructure readiness at these partner
                facilities so that your loved one can receive immediate care
                when needed. Find a facility close to you with available Medical
                Oxygen{" "}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              sm={12}
              lg={6}
              className={classes.imageGridItem}
            >
              <Card className={classes.oxiflowImageCard}>
                <img src={oxiflowImage} className={classes.image} alt="" />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div>
        <Container>
          <Grid container className={classes.nearbyFacility}>
            <Grid item md={6}>
              <img
                // src="../../src/assets/Images/oxiflowImage.jpeg"
                className={classes.image}
                width="100%"
                alt=""
              />
            </Grid>
            <Grid item md={6}>
              <Typography variant="h3" className={classes.h3}>
                Get information of a nearby facility that is ready to stabilize
                low blood oxygen with the OXIFLOW dashboard
              </Typography>
              <Typography
                variant="body1"
                className={[classes.p, classes.listItem]}
              >
                For Doctors , Nurses, Patients and Caregivers Find care with
                ease:{" "}
              </Typography>
              <List>
                <ListItem className={[classes.p, classes.listItem]}>
                  <span className={classes.numberSpan}>1</span>
                  Inventory Mapping
                </ListItem>
                <ListItem className={[classes.p, classes.listItem]}>
                  <span className={classes.numberSpan}>2</span>
                  Infrastructure Readiness
                </ListItem>
                <ListItem className={[classes.p, classes.listItem]}>
                  <span className={classes.numberSpan}>3</span>
                  Flexible Payment Options
                </ListItem>
              </List>
              <Typography
                variant="body1"
                className={[classes.p, classes.listItem]}
              >
                As a patient know that you are never left alone to figure out
                where to go during a healthcare emergency{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Oxiflow;
