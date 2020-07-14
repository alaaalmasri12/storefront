import React from 'react';
import { connect } from 'react-redux';
import { display } from '../../store/products';
import { ITEMCOUNT } from '../../store/products';
import { makeStyles } from '@material-ui/core/styles';
import {addcart} from '../../store/cart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    Card:
    {

    }
});
const Status = props => {
    function onClick(a,b)
    {
        props.ITEMCOUNT(a);
        props.addcart(b);
    }
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {props.catagory.activeCategory}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Here's some really cool things you can do
        </Typography>
            </Container>
            <section className="status">

                {props.productlist.map(productitem =>


                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={productitem.url}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {productitem.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">

                                    Price:{productitem.price} &nbsp;   &nbsp;   &nbsp;    &nbsp;          &nbsp; 
                                       Instock:{productitem.inStock}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button onClick={() =>onClick(productitem.name,productitem)} size="small" color="primary">
                                Add to cart
        </Button>

                        </CardActions>
                    </Card>
                )}

            </section>
        </React.Fragment>


    )
}
const mapStateToProps = state => ({
    productlist: state.product.productlist,
    catagory: state.catagory
});
const mapDispatchToProps = { display, ITEMCOUNT,addcart };
export default connect(mapStateToProps, mapDispatchToProps)(Status);