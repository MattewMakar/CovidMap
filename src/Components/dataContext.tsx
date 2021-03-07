import { createContext  } from "react";
import {  Country, World } from "./API/getData";



  


interface dataGlobal {
  covidData: Country[];
  setCovidData: (covidData: Country[]) => void;
  totalData: World;
} 


export const dataContext = createContext<dataGlobal[]>([]);
