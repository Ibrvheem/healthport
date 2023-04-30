import { Container, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    h3: {
      fontSize: "4rem",
      color: "#002334",
      margin: "2rem 0rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.6rem",
      },
    },
    p: {
      fontSize: "2rem",
      color: "#002334",
      fontFamily: "Inter",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.6rem",
      },
    },

    gridContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "auto",
      margin: "5rem 0rem",
      [theme.breakpoints.down("sm")]: {
        width: "100% !important",
      },
    },
    gridImage: {
      height: "68rem",
      width: "68rem",
      [theme.breakpoints.down("sm")]: {
        padding: "0rem !important",
        height: "40rem",
        width: "100%",
      },

      // backgroundColor:'red',
    },
    gridText: {
      [theme.breakpoints.down("sm")]: {
        padding: "0 !important",
      },
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "2rem",
    },
  };
});
function ImageText(props) {
  const [imageFirst, setImageFirst] = useState(props.imageFirst);
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={10}
          className={classes.gridContainer}
          style={{ flexDirection: imageFirst ? "row-reverse" : "row" }}
        >
          <Grid item md={6} sm={12} xs={12} className={classes.gridImage}>
            <img src={props.image} className={classes.image} alt="" />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.gridText}>
            <Typography variant="h3" className={classes.h3}>
              {props.header}
            </Typography>
            <Typography variant="body1" className={classes.p}>
              {props.text}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ImageText;
