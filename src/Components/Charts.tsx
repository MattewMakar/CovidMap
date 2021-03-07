import React, { useContext, FC } from "react";
import { dataContext } from "./dataContext";
import { HorizontalBar } from "react-chartjs-2";
import { Country } from "./API/getData";
import { Grid, makeStyles, Card, CardContent } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  card: {
    background: "#c6d3c9",
  },
  header: {
    color: "#0a0d6d",
    margin: "auto",
  },
});




const creatData = (rawData: Country[]) => {
  
    const randomColor =  rawData.map((obj) =>`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    return {
      labels: rawData.map((obj) => obj.country),
      datasets: [
        {
          label: "Total Cases",
          data: rawData.map((obj) => obj.cases),
          fill: false,
          backgroundColor: randomColor,
          borderColor: randomColor,
        }
      ]
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    position: "left",
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000000",
          },
          gridLines: {
            display: true,
            color: "#747c8c",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "#000000",
            fontFamily: " monaco",
          },
          gridLines: {
            display: true,
            color: "#747c8c",
          },
        },
      ],
    },
  };







const Charts: FC = (): JSX.Element => {
  const [{ covidData }] = useContext(dataContext);
  const classes = useStyles();


  
  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={12}>
        <h1 className={classes.header}>Active Cases By Country</h1>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(0, 20))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(20, 40))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(40, 60))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(60, 80))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(80, 100))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(100, 120))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(120, 140))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(140, 160))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(160, 180))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(180, 200))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <HorizontalBar data={creatData(covidData.slice(200))} options={options} />
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  );};

export default Charts;
