import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => {
  return {
    h1: {
      fontSize: "5rem",
      color: "#002334",
      marginBottom: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
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
    gridFormContainer: {
      margin: "10rem 0rem",
      display: "flex",
      justifyContent: "space-between",
    },
    inputFormGroup: {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent: "space-between",
      // gap: "0.5rem",
    },
    inputForm: {
      // width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingRight: "2rem",
    },
    label: {
      fontSize: "1.6rem",
      color: "#002638",
      fontFamily: "Inter",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {},
    },
    input: {
      height: "5rem",
      border: ".1rem solid #ccc",
      margin: "1rem 0rem",
      fontSize: "1.6rem",
      padding: "0rem 1rem",
    },
    button: {
      margin: "3rem 0",
      width: "10rem",
      fontFamily: "Inter",
      fontWeight: "bold",
      fontSize: "1.5rem",
      borderRadius: "0rem",
      padding: "1rem",
      textTransform: "unset",
      letterSpacing: ".1rem",
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      [theme.breakpoints.down("sm")]: {
        letterSpacing: 0,
      },
    },
  };
});
function Contact() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }

  const textField = [
    {
      id: 1,
      title: "firstName",
      label: "First Name",
    },
    {
      id: 2,
      title: "lastName",
      label: "Last Name",
    },
    {
      id: 3,
      title: "email",
      label: "Email",
    },
    {
      id: 4,
      title: "phoneNumber",
      label: "Phone Number",
    },
    {
      id: 5,
      title: "details",
      label: "Please share details about your interest in partnering",
    },
  ];
  return (
    <div className={classes.contactUs}>
      <Container>
        <Grid container className={classes.gridFormContainer}>
          <Grid item md={6}>
            <Typography variant="h1" className={classes.h1}>
              Interested in working with HealthPort? Contact us.
            </Typography>
            <Typography variant="body1" className={classes.p}>
              Complete this form and a member of the HealthPort care team will
              be in touch.{" "}
            </Typography>
          </Grid>
          <Grid item md={5}>
            <form action="" className={classes.inputFormGroup}>
              <Grid item md={6} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>First Name</label>
                <input
                  className={classes.input}
                  {...register("firstName", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>Last Name</label>
                <input
                  className={classes.input}
                  {...register("lastName", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>Email</label>
                <input
                  className={classes.input}
                  {...register("email", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>Phone Number</label>
                <input
                  className={classes.input}
                  {...register("phoneNumber", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>Company Name</label>
                <input
                  className={classes.input}
                  {...register("companyName", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12} className={classes.inputForm}>
                <label className={classes.label}>
                  Share details of your interest in partnering
                </label>
                <textarea
                  className={classes.input}
                  {...register("companyName", {
                    required: "This is required.",
                  })}
                />
              </Grid>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
