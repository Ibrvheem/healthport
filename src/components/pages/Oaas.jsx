import {
  Box,
  Button,
  Collapse,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  makeStyles, Select, MenuItem,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import wave from "../../assets/Images/background-wave.png";
import { radioInput, states, textInput } from "../../data.jsx/OaasData";
import { request, gql } from 'graphql-request'
import { Alert } from "@mui/material";
import { Close } from "@material-ui/icons";



const useStyles = makeStyles((theme) => {
  return {
    oaas: {
      height: "auto",
      backgroundImage: `URL(${wave})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      paddingBottom: "5rem",
      backgroundPosition: "bottom",
    },
    h1: {
      fontSize: "5rem",
      color: "#002334",
      margin: "5rem 0rem",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.7rem",
      },
    },
    h2: {
      fontSize: "3.6rem",
      color: "#002334",
      fontWeight: 600,
      // margin: "5rem 0rem",
      // textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.7rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      color: "#002334",
      opacity: "0.7",
      fontFamily: "Inter",
      fontWeight: 600,

      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
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
      gap: "2rem",
    },
    inputForm: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
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
    checkbox: {
      width: "2rem",
      height: "2rem",
      margin: "1rem 10px 1rem 0",
    },
    checkboxForm: {
      display: "flex",
      alignItems: "center",
    },
    radioForm: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
    },
    radio: {
      display: "flex",
      height: "2rem",
      width: "2rem",

      // flexDirection: "column",
      gap: "1rem",
    },
    radioGroup: {
      display: "flex",
      gap: "3rem",
      margin: "1.5rem 0rem",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        flexWrap: "wrap",
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
      backgroundColor: theme.palette.primary.main,
      color: "white",
      [theme.breakpoints.down("sm")]: {
        letterSpacing: 0,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    largeBtn: {
      width: "100%",
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
  };
});

const oaas = gql`
  mutation Oaas ($input: AddOaasInput!) {
    addOaas(input: $input) {
      ... on Oaas {
        id
        email
        firstName
        lastName
        bedSidePiping
        bioDedicatedTechnician
        canCreateAccount
        createdDatetime
        city
        lga
        pulseOximeterPerWard
        maternityNPediatric
        state
        totalPatient
      }
    }
  }
`

function Oaas() {
  const classes = useStyles();
  const [textInputForm, setTextInputForm] = useState(textInput);
  const [dropdownData, setDropdownData] = useState(states);
  const [radioInputForm, setRadioInputForm] = useState(radioInput);
  const [lgas, setLgas] = useState([]);
  const [open, setOpen] = useState(false);


  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const selectedState = watch("state");

  async function  onSubmit(data) {
    console.log(data);

    const variables = {input: {...data,
        maternityNPediatric: getRadioValue(data.maternityNPediatric),
        pulseOximeterPerWard: getRadioValue(data.pulseOximeterPerWard),
        bedSidePiping: getRadioValue(data.bedSidePiping),
        bioDedicatedTechnician: getRadioValue(data.bioDedicatedTechnician),
    }}

    const res = await request('http://localhost:5001/graphql', oaas, variables)

    setOpen(true);
    console.log("res", res)
  }

  const getRadioValue = (selectedValue) => {
    return selectedValue === "Yes";
  }
  const steps = [
    "Request our Needs Assessment Form",
    "Tells us a little bit about your health facility and oxygen requirements",
    "Talk to the Hospital Relationship manager",
    "Set up tailored to fit oxygen service that includes diagnostics, clinical support, oxygen distribution to the bedside",
    "Reliable service and improved patient outcomes",
    "Know that your patients would be able to receive medical oxygen as soon as they arrive. With the OXIFLOW dashboard, we would direct patient traffic to your facility once you attain the HealthPort designated oxygen site status",
  ];

  useEffect(() => {
    const selectedLgas =
        states.find((state) => state.alias === selectedState)?.lgas || [];
    setLgas(selectedLgas);
  }, [selectedState])

  useEffect(() => {
    const selectedLgas =
        states.find((state) => state.alias === selectedState)?.lgas || [];
    setLgas(selectedLgas);
  }, [selectedState])

  return (
    <div className={classes.oaas}>

      <Container>
        <Typography variant="h1" className={classes.h1}>
          Create your HealthPort Breathe account to enjoy our{" "}
          <span style={{ color: "#49b0b6", fontWeight: 700 }}>
            seamless medical oxygen
          </span>{" "}
          service.{" "}

        </Typography>
        <Box style={{  zIndeX: 2, width: "100%" }}>
          <Collapse in={open}>
            <Alert
                style={{
                  zIndex: "4",
                  // top: "5rem",
                  width: "100%",
                  fontSize: "1.4rem",
                }}
                action={
                  <IconButton
                      aria-label="close"
                      color="inherit"
                      size="large"
                      onClick={() => {
                        setOpen(false);
                      }}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
            >
              <Typography variant="p" className={classes.h3}>
                Successfully submitted your Registration!
              </Typography>
            </Alert>
          </Collapse>
        </Box>

        <Grid container className={classes.gridFormContainer}>
          <Grid item md={6}>
            <Typography variant="h2" className={classes.h2}>
              HealthPort Breathe is a Oxygen Service platform tailored to meet
              the unique needs of health facilities . Our vision is a world
              where everyone can Breathe easily.{" "}
            </Typography>
            {steps.map((step) => {
              return (
                <span
                  style={{ display: "flex", gap: "1rem", margin: "3rem 0rem" }}
                >
                  <span style={{ color: "#00e1b7" }}>
                    <span
                      data-hs-icon-hubl="true"
                      style={{ display: "inlineBlock", fill: "#00AE86" }}
                    >
                      <span
                        id="hs_cos_wrapper_widget_1662113991963_"
                        class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_icon"
                        data-hs-cos-general-type="widget"
                        data-hs-cos-type="icon"
                      >
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height="20"
                          aria-hidden="true"
                        >
                          <g id="Check Circle2_layer">
                            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                          </g>
                        </svg>
                      </span>
                    </span>{" "}
                  </span>
                  <Typography variant="h5" className={classes.h5}>
                    {step}
                  </Typography>
                </span>
              );
            })}
          </Grid>
          <Grid item md={5}>
            <form className={classes.inputFormGroup} onSubmit={handleSubmit(onSubmit)}>
              {textInputForm.map((item) => {
                return (
                  <Grid item md={5} className={classes.inputForm}>
                    <label className={classes.label}>{item.label}</label>
                    <input
                      className={classes.input}
                      {...register(item.title, { required: "This is required.", maxLength: 100 })}
                    />
                    <Typography
                      className={classes.label}
                      style={{ color: "red" }}
                    >
                      {errors[item.title]?.message}
                    </Typography>
                  </Grid>
                );
              })}

              <Grid item md={5} className={classes.inputForm}>
                <label className={classes.label}>State</label>
                <Controller
                    name="state"
                    control={control}
                    render={({ field }) =>
                        <select className={classes.input} {...register("state", {
                          required: "This is required.",
                        })}>
                          <option value="" selected>
                            Select State
                          </option>
                          {dropdownData.map((data) => {
                            return (
                                <>
                                  <option value={data.alias}>
                                    {data.alias}
                                  </option>
                                  <Typography>{errors[data.alias]?.message}</Typography>
                                </>
                            );
                          })}
                        </select>
                        }
                />

              </Grid>
              <Grid item md={5} className={classes.inputForm}>
                <label className={classes.label}>Local Government Area</label>
                <select className={classes.input} {...register("lga", {
                  required: "This is required.",
                })}>
                  <option value="" selected>
                    Select LGA
                  </option>
                  {lgas.map((lga) => {
                    return <option value={lga}>{lga}</option>;
                  })}
                </select>
              </Grid>
              <Grid item md={5} className={classes.inputForm}>
                <label className={classes.label}>City</label>
                <input
                  className={classes.input}
                  {...register("city", { required: "This is required." })}
                />
              </Grid>
              <Grid item md={12} className={classes.checkboxForm}>
                <input
                  type="checkbox"
                  className={classes.checkbox}
                  {...register("canCreateAccount")}
                />
                <label className={classes.label}>
                  I have authority to create an account for my facility or
                  clinic
                </label>
              </Grid>
              <Grid item md={12} className={classes.radioForm}>
                {radioInputForm.map((radio) => {
                  return (
                    <>
                      <Grid item md={12} sm={12} xs={12}>
                        <label className={classes.label}>{radio.label}</label>

                        <Grid item md={12} className={classes.radioGroup}>
                          <div style={{ display: "flex", gap: "1rem" }}>
                            {radio.radio.map((aRadio) => {
                              return (

                                  <Controller
                                      name={radio.title}
                                      control={control}
                                      render={({ field }) =>
                                          <>
                                          <input
                                            {...register(radio.title, {
                                              required: "This is required.",
                                            })}
                                            className={classes.radio}
                                            name={radio.title}
                                            value={aRadio}
                                            type="radio"
                                          />
                                          <label className={classes.label}>
                                            {aRadio}
                                          </label>
                                          </>
                                      }
                                  />
                              );
                            })}
                          </div>
                        </Grid>
                        <Typography
                          className={classes.label}
                          style={{ color: "red" }}
                        >
                          {errors[radio.title]?.message}
                        </Typography>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Button type="submit" className={[classes.button, classes.largeBtn]}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Oaas;
