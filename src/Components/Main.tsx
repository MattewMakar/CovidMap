import React, {  FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
);

const Main: FC = ({ children }): JSX.Element => {
  const classes = useStyles();
  
 
  
  return (
    
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
  );
};

export default Main;
