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
import image from "../../src/assets/Images/healthport-logo.png";
const useStyles = makeStyles((theme) => {
  return {
    footer: {
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
            <img
              className={classes.footerLogo}
              src="../../src/assets/Images/healthport-logo-full.png"
              alt=""
            />
            <Button className={classes.button}>Contact Us</Button>
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
                (234) 80 555 5626
              </ListItem>
              <ListItem
                className={classes.h6}
                style={{ color: "white", opacity: 0.7, fontWeigh: 100 }}
              >
                support@healthport.com
              </ListItem>
              <ListItem className={classes.socialMedia}>
                <span>
                  <img
                    src="../../src/assets/Icons/twitterHealthPort.png"
                    height="40rem"
                    width="40rem"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src="../../src/assets/Icons/facebookHealthPort.png"
                    height="40rem"
                    width="40rem"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src="../../src/assets/Icons/instagramHealthPort.png"
                    height="40rem"
                    width="40rem"
                    alt=""
                  />
                </span>
                <span>
                  <img
                    src="../../src/assets/Icons/linkedinHealthPort.png"
                    height="40rem"
                    width="40rem"
                    alt=""
                  />
                </span>
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
