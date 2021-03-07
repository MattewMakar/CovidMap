import React, { useContext, useState, FC } from "react";
import { dataContext } from "./dataContext";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import ReactMapGL, { Marker , Popup } from 'react-map-gl'
import {  Country } from "./API/getData";
import marker from "../assets/marker.png"
import "mapbox-gl/dist/mapbox-gl.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    height: "65vh"
  },
  map: {
    height: "60vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "auto",
  },
  marker: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
  },
  popup: {
    color: "#0a0d6d",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  flag: {
    margin: 3,
    width: "100px",
  },
});



const HomeMap: FC = (): JSX.Element => {
  const [{ covidData }] = useContext(dataContext);

  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = useState<Country| undefined>();
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 54,
    longitude: -2,
    zoom: 2,
  });


   
  const selectCountry = (event: React.MouseEvent<HTMLImageElement>) => {
    setSelectedCountry(covidData.find((element)=> element.country === event.currentTarget.alt))
  }
 


  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.map}>
          <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} onViewportChange={(nextViewport: { width: string; height: string; latitude: number; longitude: number; zoom: number }) => setViewport(nextViewport)} mapStyle="mapbox://styles/mmakar2/cklx0jc0c3tt617pmcbq1wktx">
            {covidData.map((country: Country, index) => (
              <Marker key={index} latitude={country.countryInfo.lat} longitude={country.countryInfo.long}>
                <div>
                  <img className={classes.marker} src={marker} alt={country.country} onClick={(e) => selectCountry(e)} />
                </div>
              </Marker>
            ))}
            {selectedCountry && (
              <Popup latitude={selectedCountry.countryInfo.lat} longitude={selectedCountry.countryInfo.long} className={classes.popup}  onClose={() => setSelectedCountry(undefined)}>
                <div>
                  <img className={classes.flag} src={selectedCountry.countryInfo.flag} alt="" />
                  <h3>{selectedCountry.country}</h3>
                  <span>Total Cases: {selectedCountry.cases}</span>
                </div>
              </Popup>
            )}
          </ReactMapGL>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeMap
