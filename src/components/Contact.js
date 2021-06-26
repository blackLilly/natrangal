import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';
import MapIcon from '@material-ui/icons/RoomRounded';
import CallIcon from '@material-ui/icons/PhoneRounded';
import MailIcon from '@material-ui/icons/MailRounded';

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
            margin: '1rem',
            overflowWrap: 'break-word'
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
    }
}));

export default function Contact() {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" >
            <div className={classes.toolbar}></div>
            <div className={classes.head}>
                <Typography variant="h1" className={classes.title}>
                    <strong style={{ fontFamily: 'fantasy', letterSpacing: '2px' }}>
                        Contact
                    </strong>
                </Typography>
                <Typography variant="h1" className={classes.subtitle}>
                    <br />
                    we are ready to be a part of your profit
                </Typography>
            </div>
            <br /><br />
            <Grid container justify="center" alignItems="center" spacing={4}>
                <Grid item xs={12} sm={8} md={8} lg={8} xl={8} >
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item md={6} sm={12} lg={6} className={classes.gridItem}>
                                <TextField className={classes.input} label="Your name"></TextField>
                            </Grid>
                            <Grid item md={6} sm={12} lg={6} className={classes.gridItem}>
                                <TextField className={classes.input} label="Your mail"></TextField>
                            </Grid>
                            <Grid item md={12} sm={12} lg={12} className={classes.gridItem}>
                                <TextField label="Subject" className={classes.input} ></TextField>
                            </Grid>
                            <Grid item sm={12} md={12} lg={12} className={classes.gridItem}>
                                <TextField multiline rows={4} label="Your message" className={classes.input}></TextField>
                            </Grid>
                            <Grid item sm={12} md={12} lg={6} className={classes.gridItem + " " + classes.buttonGrid}>
                                <Button variant="contained" color="primary" className={classes.buttonsend + " button-mdb"}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
                    <div className={classes.divAddress}>
                        <ul className={classes.addreslist}>
                            <li>
                                <MapIcon className={classes.icon} />
                                <Typography>Address, omalur,salem, kk Pallam</Typography>
                            </li>
                            <li>
                                <CallIcon className={classes.icon} />
                                <Typography>+91 9874532145</Typography>
                            </li>
                            <li>
                                <MailIcon className={classes.icon} />
                                <Typography>soundharyamadhucon@gmail.com</Typography>
                            </li>
                        </ul>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.toolbar}></div>
        </Container >
    )
}
