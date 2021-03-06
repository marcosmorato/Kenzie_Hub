import React from "react";
import UserCard from "../UserCard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
  },
}));
const CardTemplate = ({
  willianData,
  carlosData,
  jefteData,
  felipeData,
  marcosData,
}) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <UserCard list={carlosData} />
      <UserCard list={felipeData} />
      <UserCard list={jefteData} />
      <UserCard list={marcosData} />
      <UserCard list={willianData} />
    </Grid>
  );
};

export default CardTemplate;
