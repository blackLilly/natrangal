import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';
import GoogleApiWrapper from './GoogleApiWrapper';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: '6rem',
        width: '100%',
        display: 'flex',
    },
    head: {
        textAlign: 'center',
    },
    title: {
        fontSize: '1.9rem'
    },
    subtitle: {
        fontSize: '1rem'
    },
    toolbar: theme.mixins.toolbar,
    image: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '4px',
    },
    imgcontainer: {
        width: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
    },
    bgIcon: {
        fontSize: '210px',
        marginTop: '16px',
        backgroundSize: '30px 30px',
        backgroundColor: '#fff',
        backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0'
    },
    imgCard: {
        minWidth: '100%',
        minHeight: 'auto',
        margin: '14px 0px'
    },
    input: {
        width: '100%',
        margin: '1.5rem 0px'
    },
    gridItem: {
        width: '100%',
    },
    buttonsend: {
        margin: '1.5rem 0px'
    },
    addreslist: {
        textAlign: 'center',
        margin: '0px !important',
        padding: '0px',
        listStyle: 'none',
        "& >li": {
            margin: '1rem'
        }
    },
    buttonGrid: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    },
    icon: {
        fill: '#3f51b5',
        width: '2rem',
        height: '2rem',
        marginBottom: '0.7rem'
    },
    map: {
        width: 'auto',
        height: '30vh',
    }
}));

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.map}>
                <GoogleApiWrapper className={classes.map} />
            </div>
            <Container maxWidth="xl" >
                <div className={classes.toolbar}></div>
                <div >
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        <Grid item xs={12} sm={8} md={8} lg={8} xl={8} >
                            <Typography>Get connceted with us on social networks !</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                        </Grid>
                    </Grid>
                </div>

            </Container >
        </>
    )
}
