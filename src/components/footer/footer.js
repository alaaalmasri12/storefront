import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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


function Footer() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-around">

                    {/* How do these 3 combine to make this a responsive grid? */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            &copy; 2020           
                             </Typography>

                    </Grid>
                    <Grid item xs={12} md={4} lg={6}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            <h5>Contact us</h5>
                        </Typography>
                        <ul>
                            <li>Site Name:Storefront</li>
                            <li>Location:LTUC</li>
                            <li>Phone Numeber:+96278582857</li>
                        </ul>
                    </Grid>

                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Footer;