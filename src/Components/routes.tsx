import HomeIcon from "@material-ui/icons/Home";
import Home from "./Home";
import Reports from "./Reports";
import Charts from "./Charts";
import Settings from "./Settings";
import ListAltIcon from "@material-ui/icons/ListAlt";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SettingsIcon from "@material-ui/icons/Settings";
export const routes = [
  {
    name: "Home",
    icon: <HomeIcon />,
    path: "/",
    component: <Home />,
  },
  {
    name: "Report",
    icon: <ListAltIcon />,
    path: "/report",
    component: <Reports />,
  },
  {
    name: "Charts",
    icon: <TrendingUpIcon />,
    path: "/charts",
    component: <Charts />,
  },
  { name: "", icon: "", path: "", component: <></> },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    component: <Settings />,
  },
];
