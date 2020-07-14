import React from 'react';
import { connect } from 'react-redux';
const cart = props => {
    return (
        <section className="catagories-section">
            <ul className="catagories">
                {props.cart.productscart.map(item=> 
      
          <li  key={item.name}>{item.name}</li>
                 )} 
            </ul>
        </section>
    )

}
const mapStateToProps = state => ({
    cart: state.cart
});
export default connect(mapStateToProps)(cart);