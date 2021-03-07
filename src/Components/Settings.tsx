import React, { FC, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { themeContext  } from "./themeContext";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import {
  Button, Dialog,
DialogActions
,DialogContent
,DialogTitle
,InputLabel
,Input
,FormControl
,Select} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

const darkTheme = {
  sideBarBackgroundColor: "#000713",
  sideBarColor: "#f0f0f0",
  toolBar: "#420DAB",
  tableBackground: "#444e52",
}; 
const lightTheme = {
  sideBarBackgroundColor: "#F0F0F0",
  sideBarColor: "#080808",
  toolBar: "#86a78f",
  tableBackground: "#444e52",
};
const greenTheme = {
  sideBarBackgroundColor: "#3c513c",
  sideBarColor: "#f0f0f0",
  toolBar: "#1f7000",
  tableBackground: "#010123",
}; 


const Settings:FC = ():JSX.Element=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [themeOption, setThemeOption] = React.useState<string>("");
  const {  setCurrentTheme } = useContext(themeContext);

  const handleChange = (event: React.ChangeEvent<{value:unknown}>) => {
    setThemeOption(event.currentTarget.value+"" || "Dark");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChoice = () => {
        setOpen(false);
    switch (themeOption) {
      case "Dark":
        setCurrentTheme(darkTheme);
        break;
      case "Light":
        setCurrentTheme(lightTheme);
        break;
      case "Green":
        setCurrentTheme(greenTheme);
        break;
      default:
        break;
    }

  }
  
  return (
    <div>
      <Button onClick={handleClickOpen}>
        {" "}
        <SettingsApplicationsIcon /> Select Theme
      </Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Theme</InputLabel>
              <Select native value={themeOption} onChange={handleChange} input={<Input id="demo-dialog-native" />}>
                <option aria-label="None" value="" />
                <option value={"Dark"}>Dark</option>
                <option value={"Light"}>Light</option>
                <option value={"Green"}>Green</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleChoice} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Settings;