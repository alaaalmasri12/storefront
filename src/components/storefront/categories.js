import React from 'react';
import { connect } from 'react-redux';
import { display} from '../../store/categories.js';
const Catagoryshop = props => {
    return (
        <section className="catagories-section">
            <ul className="catagories">
            <h1>Browser our Categories</h1>
                {props.catagory.categories.map(catagory=> 
      
          <li onClick={()=> props.display(catagory.name)} key={catagory.name}>{catagory.name}</li>
                 )} 
            </ul>
        </section>
    )

}
const mapStateToProps = state => ({
    catagory: state.catagory
});
const mapDispatchToProps = {display};
export default connect(mapStateToProps, mapDispatchToProps)(Catagoryshop);