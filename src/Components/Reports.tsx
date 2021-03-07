import React, { FC,useContext } from "react";
import { dataContext } from "./dataContext";
import { themeContext } from "./themeContext";

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";











const Reports:FC = ():JSX.Element => {
  const [{ covidData }] = useContext(dataContext);
      const { currentTheme } = useContext(themeContext);

 const getMuiTheme = () =>
   createMuiTheme({
     overrides: {
       MuiIconButton: {
         root: {
           color: "#FFFFFF",
         },
       },
       MuiToolbar: {
         root: {
           background: currentTheme.toolBar,
           color: "#FFFFFF",
         },
       },
       MuiButton: {
         root: {
           color: "#0a0d6d",
           fontWeight: 700,
         },
       },
       MuiTableCell: {
         root: {
           background: currentTheme.toolBar,
           fontWeight: 700,
           fontFamily: "Arial, Helvetica, sans-serif",
           fontSize: 12,
         },
         body: {
           background: currentTheme.tableBackground,

           color: "#FFFFFF",
         },
       },
     },
   });

  const columns = [
    {
      name: "country",
      label: "Country",
      options: {
        filter: true,
      },
    },
    {
      name: "cases",
      label: "Total Cases",
      options: {
        filter: false,
      },
    },
    {
      name: "active",
      label: "Active Cases",
      options: {
        filter: false,
      },
    },
    {
      name: "critical",
      label: "Critical",
      options: {
        filter: false,
      },
    },
    {
      name: "recovered",
      label: "Recovered",
      options: {
        filter: false,
      },
    },
    {
      name: "deaths",
      label: "Deaths",
      options: {
        filter: false,
      },
      
    },
  ];
  const theme = getMuiTheme();


  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable
        title={"Countries Statistics"}
        data={covidData}
        columns={columns}
        options={{
          rowsPerPage: 20,
          rowsPerPageOptions: [20, 50, 100],
          filterType: "checkbox",
          selectableRows:"none"
        }}
      />
      
    </MuiThemeProvider>
  );
};
export default Reports;
