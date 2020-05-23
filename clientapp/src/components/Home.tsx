import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea, Grid } from '@material-ui/core';

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
            minWidth: 320,
            maxWidth: 480,
            margin: theme.spacing(2),
        },
        textBox: {
            '& > *': {
                //margin: theme.spacing(2),
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
            <Grid
                container
                direction="row"
                justify="center"
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
                        <CardContent>
                            <Typography className={classes.caption} variant="h4" color="textPrimary">
                                Enter registration number
                            </Typography>
                            <Typography className={classes.subcaption} color="textSecondary" gutterBottom>
                                You will be provided with various information about this vehicle
                            </Typography>
                            <CardActions>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" className={classes.textBox} label="MOT Number" variant="outlined" />
                                </form>
                                <Button variant="contained" color="primary">
                                    Search
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
