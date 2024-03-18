import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
   const cartProducts = useSelector(state=>state.cart);
   const dispatch = useDispatch();
   const removeCart = (product) =>{
      dispatch(removeCart(product.id));
   }
   const cards = cartProducts.map(product =>{
      <div></div>
   })
   return (<>
      <div className='container'>
         <div className='row gap-2'>
             { cards }
         </div>
      </div>
   </>);
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
