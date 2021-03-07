import React, { useContext,FC, useState } from "react";
import { useHistory } from "react-router-dom";
import { RiVirusLine } from "react-icons/ri";
import clsx from "clsx";

//sidebar data
import { routes } from "./routes";
import { themeContext } from "./themeContext";

//material style functions
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//material components
import { Drawer, AppBar, Toolbar, List, CssBaseline, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";



const Sidebar: FC = (): JSX.Element => {

  const { currentTheme } = useContext(themeContext);


  const drawerWidth = 240;
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      hide: {
        display: "none",
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      },
      listButton: {
        background: "#FFF",
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(2),
      },
      sidebarLayout: {
        fontWeight: 700,
        background: currentTheme.sideBarBackgroundColor,
      },
      listItem: {
        display: "block",
        background: currentTheme.sideBarBackgroundColor,
        width: "100%",
        border: 0,
        padding: 0,
        margin: 0,
        "&>:first-child": {
          color: currentTheme.sideBarColor,
          "&>:first-child": {
            color: currentTheme.sideBarColor,
          },
        },
        "&:hover": {
          background: currentTheme.sideBarColor,
          color: currentTheme.sideBarBackgroundColor,
          "&>:first-child": {
            color: currentTheme.sideBarBackgroundColor,
            "&>:first-child": {
              color: currentTheme.sideBarBackgroundColor,
            },
          },
        },
      },
    })
  );

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let history = useHistory();

  const addHistory = (path: string): void => {
    history.push(path);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <RiVirusLine style={{ marginRight: "20px", color: "red" }} />
          <h3>Corona Virus Info Dashboard</h3>
          <RiVirusLine style={{ marginLeft: "20px", color: "red" }} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.sidebarLayout]: true,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon className={classes.listItem} />
          </IconButton>
        </div>
        <Divider style={{ background: "#FFF" }} />
        <List>
          {routes.map((route, index) =>
            route.name !== "" ? (
              <button className={classes.listItem} key={index} onClick={() => addHistory(route.path)}>
                <ListItem button>
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </button>
            ) : (
              <Divider key={index} style={{ background: "#FFF" }} />
            )
          )}
        </List>
      </Drawer>
    </div>
  );
};
export default Sidebar;