import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {addcart} from '../../store/cart';
import { connect } from 'react-redux';
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
function Header(props) {

  const classes = useStyles();

  return (
    <React.Fragment>
       
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Our Store
          </Typography>
          {/* These get pushed to the right, becuase the classes.toolbarTitle sets flexGrow to 1... */}
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Cart({props.cart.productscart.length})
            </Link>
          </nav>

        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(Header);