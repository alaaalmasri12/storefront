import React from 'react';
import { connect } from 'react-redux';
import { display} from '../../store/categories.js';
const Status = props => {
    return (
        <section className="status">
            
             {props.productlist.map(productitem=> 
                     <span onClick={()=> props.display(productitem.catagory)} key={productitem.name}>
                         Name:{productitem.name}  
                         <br />  
                          catagory:{productitem.catagory}  
                          <br />             
                         price:{productitem.price}
                         <br />
                         inStock:{productitem.inStock}
                         <br/>
                         </span> 
                 )} 
        </section>
    );
}
const mapStateToProps = state => ({
    productlist: state.catagory.productlist
});
const mapDispatchToProps = {display};
export default connect(mapStateToProps, mapDispatchToProps)(Status);