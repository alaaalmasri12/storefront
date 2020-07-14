import React from 'react';
import { connect } from 'react-redux';
import { display } from '../../store/categories.js';
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
const Status = props => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="stretch">
                <Grid item xs={12} sm={6} md={4}>
                    {props.productlist.map(productitem =>

                        <Card>
                            <CardHeader title="Card 1"
                                titleTypographyProps={{ align: 'center' }}
                                className={classes.cardHeader}
                            />
                            <CardContent>
                                <Typography variant="h5" color="textPrimary">
                                    Name:{productitem.name}
                                </Typography>
                                <Typography variant="p" color="textSecondary">
                                    catagory:{productitem.catagory}
                                </Typography>
                                <Typography variant="p" color="textSecondary">
                                    price:{productitem.price}
                                </Typography>
                                <Typography variant="p" color="textSecondary">
                                    inStock:{productitem.inStock}            </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color="primary">add to cart</Button>
                                <Button variant='outlined' color="primary">view details</Button>
                            </CardActions>
                        </Card>
                    )}
        </Grid>

            </Grid>
        </Container>
        // <section className="status">

        //      {props.productlist.map(productitem=> 
        //              <span onClick={()=> props.display(productitem.catagory)} key={productitem.name}>
        //                  Name:{productitem.name}  
        //                  <br />  
        //                   catagory:{productitem.catagory}  
        //                   <br />             
        //                  price:{productitem.price}
        //                  <br />
        //                  inStock:{productitem.inStock}
        //                  <br/>
        //                  </span> 
        //          )} 
        // </section>
    );
}
const mapStateToProps = state => ({
    productlist: state.catagory.productlist
});
const mapDispatchToProps = { display };
export default connect(mapStateToProps, mapDispatchToProps)(Status);