import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f1f1f13b',
    },
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
    }
}));

export default function Products() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root} >
            <div className={classes.toolbar}></div>
            <div className={classes.head}>
                <Typography variant="h1" className={classes.title}>
                    <strong style={{ fontFamily: 'fantasy', letterSpacing: '2px' }}>
                        Seed plants, we provide
                    </strong>
                </Typography>
                <Typography variant="h1" className={classes.subtitle}>
                    <br />
                    we are start up to provide nursery plants of Chrysanthemum with various colors
                </Typography>
            </div>
            <div className={classes.toolbar}></div>
            <Grid container style={{ alignItems: 'center' }} justify="center" alignItems="center" spacing={4}>
                {
                    ['Red', 'Yellow', 'Violet', 'Lavander', 'Purple'].map((val, i) => {
                        return (
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={i}>
                                <Card className={classes.imgCard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="240"
                                            image="https://www.agrifarming.in/wp-content/uploads/2015/12/Ready-to-pick-up-chrysanthemum-flowers.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {val}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="outlined" color="primary">
                                            Share
                                        </Button>
                                        <Button variant="contained" color="primary">
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <div className={classes.toolbar}></div>
        </Container>
    )
}
