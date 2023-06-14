import {
  Button,
  Container,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../src/assets/Images/Healthport-logo.png";
import twitter from "../../src/assets/Icons/twitterHealthPort.png";
import linkedIn from "../../src/assets/Icons/linkedInHealthPort.png";
import instagram from "../../src/assets/Icons/instagramHealthPort.png";
import facebook from "../../src/assets/Icons/facebookHealthPort.png";
import fullLogo from "../../src/assets/Images/Healthport-logo-full.png";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      cursor: "pointer",
      // height: "20rem",
      padding: "4rem 0rem",
      color: "white",
      backgroundColor: "#002334",
    },
    footerLogo: {
      height: "20rem",
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: ".1rem solid rgba(255, 255, 255, .1)",
      marginBottom: "4rem",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 700,
      fontFamily: "inter",
      textAlign: "center",
      color: "#002334",
      [theme.breakpoints.down("sm")]: {
        fontWeight: 100,
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
    footerNav: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
    },
    footerNavList: {
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },
    title: {
      fontSize: "1.2rem",
      fontFamily: "Inter",
      fontWeight: "700",
      opacity: 0.7,
      letterSpacing: 1,
    },
    content: {
      fontSize: "1.4rem",
      fontFamily: "Inter",
      fontWeight: "600",
      // opacity: 0.7,
      // color: "white",
    },
    socialMedia: {
      gap: "1rem",
    },
  };
});
const footerData = [
  {
    title: "PATIENT",
    content: ["Oxygen Access", "Patient Voucher"],
  },
  {
    title: "PARTNER",
    content: ["Oxygen Access", "Patient Voucher", "Connect with a Hospital"],
  },
  {
    title: "HOSPITAL",
    content: [
      "Facility Integration",
      "Digitized Oxygen Distribution",
      "Payment Plans",
    ],
  },
  {
    title: "LEGAL",
    content: ["Privacy Policy", "Patient Rights"],
  },
];
function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item md={12} className={classes.flexCenter}>
            <img className={classes.footerLogo} src={fullLogo} alt="" />
            <Link to="/contact">
              <Button className={classes.button}>Contact Us</Button>
            </Link>
          </Grid>
          <Grid item md={5} xs={12} sm={12}>
            <List>
              <ListItem>
                <Typography variant="h3" style={{ color: "white" }}>
                  Quality healthcare when and where you need it
                </Typography>
              </ListItem>
              <ListItem
                className={classes.h6}
                style={{ color: "white", opacity: 0.7, fontWeight: 400 }}
              >
                Lagos, Nigeria.
              </ListItem>
              <ListItem
                className={classes.h6}
                style={{ color: "white", opacity: 0.7, fontWeight: 400 }}
              >
                (234) 809 832 6250
              </ListItem>
              <ListItem
                className={classes.h6}
                style={{ color: "white", opacity: 0.7, fontWeigh: 100 }}
              >
                careteam@healthportafrica.com
              </ListItem>
              <ListItem className={classes.socialMedia}>
                <a
                  href="https://twitter.com/HEALTHPORT2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img src={twitter} height="40rem" width="40rem" alt="" />
                  </span>
                </a>
                <span>
                  <img src={facebook} height="40rem" width="40rem" alt="" />
                </span>
                <a
                  href="https://www.instagram.com/healthportnigeria/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img src={instagram} height="40rem" width="40rem" alt="" />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/company/healthportoxygen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <img src={linkedIn} height="40rem" width="40rem" alt="" />
                  </span>
                </a>
              </ListItem>
            </List>
          </Grid>{" "}
          <Grid item md={7} sm={12} xs={12} className={classes.footerNav}>
            {footerData.map((data) => {
              return (
                <List className={classes.footerNavList}>
                  <ListItem className={classes.title}>{data.title}</ListItem>
                  {data.content.map((item) => {
                    return (
                      <ListItem className={classes.content}>{item}</ListItem>
                    );
                  })}
                </List>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;