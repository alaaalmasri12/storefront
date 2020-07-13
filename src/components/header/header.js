import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));
function Header() {

  const classes = useStyles();

  return (
    <React.Fragment>
       
      <AppBar position="static" color="light" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>

          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
<h2>Our Store</h2>
          </Typography>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Grid container direction="row" justify="flex-end" alignItems="center"> <h5>Cart(0)</h5></Grid> 
      <CssBaseline />
</Typography>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}

export default Header;