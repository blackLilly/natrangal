import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/images/kingnurserylogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    alignItems: 'center',
    backgroundColor: "white"
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      width: '90%'
    },
    width: '95%',
  },
  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    display: 'none'
  },
  sectionLap: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    display: 'block'
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton + " " + classes.sectionLap} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.menuButton + " " + classes.sectionMobile} >
            <img src={logo} width={42} height={42} alt={'logo'} />
          </div>
          <Typography variant="h6" className={classes.title}>
            King Nursery
          </Typography>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
