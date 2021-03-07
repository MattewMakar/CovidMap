import React, { useContext, FC } from "react";
import { dataContext } from "./dataContext";
import { makeStyles, Card, CardContent } from "@material-ui/core";

import HomeMap from "./HomeMap";

const useStyles = makeStyles({
  root: {
    width: "100%",
    minHeight: "20vh",
    marginBottom: 10,
    textAlign: "center",
  },
  header: {
    color: "#150168",
    fontWeight: 700,
    fontSize: "1.3rem",
  },
  item: {
    color: "#150168",
    fontWeight: 700,
    marginRight: 20,
    fontSize: "1.1rem",
  },
  number: {
    color: "#a3a1ac",
    fontWeight: 700,
    fontSize: "1.2rem",
  },
});

const Home: FC = (): JSX.Element => {
  const [{ totalData }] = useContext(dataContext);
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <h1 className={classes.header}>World Meter</h1>
          {totalData && (
            <>
              <div>
                <span className={classes.item}>Total Cases:</span>
                <span className={classes.number}>{totalData.cases}</span>
              </div>
              <div>
                <span className={classes.item}>Total Active: </span>
                <span className={classes.number}>{totalData.active}</span>
              </div>
              <div>
                <span className={classes.item}>Total Critical: </span>
                <span className={classes.number}>{totalData.critical}</span>
              </div>
              <div>
                <span className={classes.item}>Total New Cases: </span>
                <span className={classes.number}>{totalData.todayCases}</span>
              </div>
              <div>
                <span className={classes.item}>Total Deaths: </span>
                <span className={classes.number}>{totalData.deaths}</span>
              </div>
              <div>
                <span className={classes.item}>{new Date(totalData.updated).toString()}</span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      <HomeMap />
    </div>
  );
};

export default Home;
