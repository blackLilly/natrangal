import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import Header from '../components/Header';
import Main from '../components/Main';
import Contact from '../components/Contact';
import Products from '../components/Products';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        overflow: 'hidden'
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Main />
            <Divider />
            <Products />
            <Divider />
            <Contact />
            <Footer />
        </div>
    )
}
export default Home;
