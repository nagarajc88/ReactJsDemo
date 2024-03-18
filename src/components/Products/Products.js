import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { ProductsWrapper } from './Products.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add } from "../../store/cartSlice";
import { getProducts } from "../../store/productsSlice";

const Products = () => {
   const dispatch = useDispatch();
   const { data: products } = useSelector(state=>state.products);
   useEffect(()=>{
      dispatch(getProducts());
   },[]);

   const addToCart= (product)=>{
      dispatch(add(product))
   }
   const cards = products.map(product =>{
      <div></div>
   });
   return (<>
      <div className='container'>
         <div className='row gap-2'>{ cards }</div>
      </div>
   </>);
};

Products.propTypes = {};

Products.defaultProps = {};

export default Products;
