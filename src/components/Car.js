import React from "react";
import cars from "../cars.json";
// import material ui components here //
// Container, Paper, Chip //
import { Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Chip } from "@material-ui/core";

const Car = props => {
  let id = props.match.params.id - 1;
  let car = cars[id];
  console.log(car);

  return (
    <Container maxWidth="sm">
      <Paper>
        <h1>{car.Name}</h1>
        <Chip label={`id: ${car.id}`}></Chip>
        <Chip label={`Name: ${car.Name}`}></Chip>
        <Chip label={`Miles_Per_Gallon: ${car.Miles_Per_Gallon}`}></Chip>
        <Chip label={`Cylinders: ${car.Cylinders}`}></Chip>
        <Chip label={`Displacement: ${car.Displacement}`}></Chip>
        <Chip label={`Horsepower: ${car.Horsepower}`}></Chip>
        <Chip label={`Weight_in_lbs: ${car.id}`}></Chip>
        <Chip label={`Acceleration: ${car.Acceleration}`}></Chip>
        <Chip label={`Year: ${car.Year}`}></Chip>
        <Chip label={`Origin: ${car.Origin}`}></Chip>
      </Paper>
    </Container>
  );
};

export default Car;
