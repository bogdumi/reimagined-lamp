import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { CardActionArea, Grid } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

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
        cardBox: {
            width: 480,
            margin: theme.spacing(2),
        },
        textBox: {
            '& > *': {
                width: '130%',
            },
        },
        caption: {
            marginLeft: theme.spacing(1),
        },
        subcaption: {
            marginLeft: theme.spacing(1),
        },
        media: {
            height: 140,
        },
        mediaTall: {
            height: 320,
        },
        expand: {
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
        },
        buttonSec: {
            marginLeft: theme.spacing(1),
        },
    }),
);

const lightMode = createMuiTheme({
    palette: {
      type: 'light',
      primary: blue,
      secondary: blue,
    }
});

const darkMode = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
        main: '#303030'
        }
    },
});


export default function Home() {
    const classes = useStyles();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    const [expanded, setExpanded] = React.useState(false);
    const [mode, setMode] = React.useState(lightMode);
    
    const [number, setNumber] = React.useState("")
    const [make, setMake] = React.useState("Please check your MOT");
    const [model, setModel] = React.useState("");
    const [colour, setColour] = React.useState("Unknown");
    const [motExpiration, setMotExpiration] = React.useState("Unknown");
    const [mileage, setMileage] = React.useState(0);

    const toggleMode = () => {
        if (mode === darkMode)
            setMode(lightMode);
        else
            setMode(darkMode);
    }
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
        setNumber("");
        setMake("Please check your MOT");
        setModel("");
        setColour("Unknown");
        setMotExpiration("Unknown");
        setMileage(0);
    };

    const handleExpandClickAndSend = () => {
        customFetch();
        setExpanded(!expanded);
    };

    const customFetch = () => {
        fetch("/cardetails/" + number)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMake(result.make);
              setModel(result.model);
              setColour(result.primaryColour);
              setMotExpiration(result.motTests[0].expiryDate);
              setMileage(result.motTests[0].odometerValue)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }

    React.useEffect(() => {
        fetch("/cardetails/" + number)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMake(result.make);
              setModel(result.model);
              setColour(result.primaryColour);
              setMotExpiration(result.motTests[0].expiryDate);
              setMileage(result.motTests[0].odometerValue)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    return (
        <ThemeProvider theme={mode}>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar color="primary">
                    <IconButton edge="start" className={classes.menuButton} onClick = {toggleMode} color="inherit" aria-label="mode">
                        <Brightness4Icon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Reimagined Lamp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Grid item>
                    <Card className={classes.cardBox} raised={true}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.mediaTall}
                                image="./cutelamp.jpg"
                                title="Cute Lamp"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography className={classes.caption} variant="h4" color="textPrimary">
                                Welcome to Reimagined Lamp
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={classes.cardBox} raised={true}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="./cutecar.jpg"
                                title="Cute Car"
                            />
                        </CardActionArea>
                        <Collapse in={!expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography className={classes.caption} variant="h4" color="textPrimary">
                                Enter registration number
                            </Typography>
                            <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                You will be provided with various information about this vehicle
                            </Typography>
                                <CardActions>
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <TextField id="outlined-basic" 
                                                    color="secondary" 
                                                    className={classes.textBox} 
                                                    label="MOT Number" 
                                                    variant="outlined" 
                                                    onChange = { (a) => {setNumber(a.target.value)} }
                                                    // onKeyDown = { (event) => { if (event.key === "Enter") handleExpandClickAndSend() } }
                                                    value = {number}         
                                        />
                                    </form>
                                    <Button variant="contained" color="secondary" onClick={handleExpandClickAndSend}>
                                        Search
                                    </Button>
                                </CardActions>
                        </CardContent>
                        </Collapse>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <CardActions>
                                    <Typography className={classes.caption} variant="h4" color="textPrimary">
                                        {make} {model}
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                        Colour: {colour}
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                        MOT Number: {number}
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                        MOT Expiration Date: {motExpiration}
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                        Milage at Last MOT: {mileage}mi
                                    </Typography>
                                </CardActions>
                                <CardActions>
                                    <Button variant="outlined" color="secondary" className={classes.buttonSec} onClick={handleExpandClick}>
                                        Back
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </div>
        </ThemeProvider>
    );
}
