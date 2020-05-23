import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    textBox: {
        '& > *': {
            margin: theme.spacing(2),
            width: '30ch',
          },
    },
    caption: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
    }
  }),
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Reimagined Lamp
          </Typography>
        </Toolbar>
      </AppBar>
    <Typography className={classes.caption} variant="h4">
        Please enter a MOT number
    </Typography>
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" className={classes.textBox} label="MOT Number" variant="outlined" />
    </form>
    </div>
  );
}
