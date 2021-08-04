import { Container } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#009688',
        color: 'white'
    },
    main: {
        width: '100%',
        display: 'flex',
    },
    title: {
        fontSize: '2.5rem'
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
    },
    imgcontainer: {
        width: '100%',
        minHeight: 'auto',
        overflow: 'hidden',
        margin: '3rem 0px',
    }
}));

function Main() {
    const classes = useStyles();
    return (
        <>
            <div className="main-picture">
            </div>
            <Container maxWidth="xl" className={classes.root} >
                <div className={classes.main}>
                    <Grid container style={{ alignItems: 'center' }}>
                        <Grid item sm={12} md={6} lg={6}>
                            <div>
                                <div style={{ margin: '2rem 0px' }}>
                                    <Typography variant="h1" className={classes.title}>
                                        <strong style={{ fontFamily: 'Roboto', letterSpacing: '4px' }}> King nursery</strong>
                                    </Typography>
                                    <Typography variant="h1" className={classes.title}>
                                        <br />
                                        We are start up to provide nursery plants of Chrysanthemum with various colors
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <div className={classes.imgcontainer}>
                                <img className={classes.image} alt="plants" width="100%" height="100%" src="https://www.agrifarming.in/wp-content/uploads/2015/12/Ready-to-pick-up-chrysanthemum-flowers.jpg" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    )
}

export default Main

