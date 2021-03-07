import React, {  useState, useEffect, FC } from "react";
import { dataContext } from "./dataContext";
import { themeContext , Theme } from "./themeContext";
import { Modal, Backdrop, CircularProgress } from "@material-ui/core";
import { getData, getAll, Country, World } from "./API/getData";
import { Switch, Route } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { routes } from "./routes";
import Sidebar from "./Sidebar";
import Main from "./Main";







const App: FC = (): JSX.Element => {

  const [totalData, setTotalData] = useState<World | any>();
  const [loading, setLoading] = useState(true);
  const [covidData, setCovidData] = useState<Country[]>([]);
  const [currentTheme, setCurrentTheme] = useState<Theme>({
    sideBarBackgroundColor: "#000713",
    sideBarColor: "#f0f0f0",
    toolBar: "#420DAB",
    tableBackground: "#444e52",
  });

  useEffect(() => {
    setLoading(true);
    const datagetter = async () => {
      const { data } = await getData();
      setCovidData(data);
    };

    datagetter();
    setLoading(false);
  }, []);



  useEffect(() => {
    setLoading(true);

    const datagetter = async () => {
      const { data } = await getAll();
      setTotalData(data);
    };
    datagetter();
    setLoading(false);
  }, []);


  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiToolbar: {
          root: {
            background: currentTheme.toolBar,
            color: "#FFFFFF",
          },
        },
      },
    });

    

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    })
  );


  const classes = useStyles();
  const theme = getMuiTheme();




  if (!loading)
    return (
      <dataContext.Provider value={[{ covidData, setCovidData, totalData }]}>
        <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
          <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
              <Sidebar />
              <Main>
                <Switch>
                  {routes
                    .filter((route) => route.name !== "")
                    .map((route, index) => (
                      <Route exact path={route.path} key={index}>
                        {route.component}
                      </Route>
                    ))}
                  <Route path="/*">
                    <h1>Not Found</h1>
                  </Route>
                </Switch>
              </Main>
            </div>
          </MuiThemeProvider>
        </themeContext.Provider>
      </dataContext.Provider>
    );
  else
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loading}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout:50,
        }}
      >
        <CircularProgress />
      </Modal>
    );
};

export default App;
