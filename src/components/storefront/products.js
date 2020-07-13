import React from 'react';
import { connect } from 'react-redux';
const Status = props => {
    return (
        <section className="status">
             {props.product.products.map(productitem=> 
                     <li onClick={()=> props.display(productitem.catagory)} key={productitem.name}><h1>{productitem.name}</h1></li> 
                 )} 
        </section>
    );
}
const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps)(Status);

