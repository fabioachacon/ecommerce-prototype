import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { ProductList } from './styled';
import ProductItem from '../ProductItem';
import api from '../../api';
import Pagination from '../Pagination';
import { perPage } from '../../config';
import { AnimatePresence } from 'framer-motion';
import { PageAnimation, Fade } from '../../animations';

const Products = ({ page, setShowDetail, setModalData }) => {

    const [products, setProducts] =  useState([]);

    // useEffect(() => {
    //     const getProducts = async () => {
    //         const prod = await api.getProducts();
    //         setProducts(prod);
    //     }
    //     getProducts();
    // },[]);

    const ALL_PRODUCTS_QUERY = gql`
        query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int ) {
        allProducts(first: $first, skip: $skip) {
          id
          name
          price
          description
          photo {
            id
            image {
              publicUrlTransformed
            }
          }
        }
      }
    `
    const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY, {
      variables: {
        skip: page * perPage - perPage,
        first: perPage,
      }
    });

    return (
      <AnimatePresence exitBeforeEnter>
          <ProductList
            variants={Fade}
            initial='hidden'
            animate='visible'
            exit='exit'>
              {!loading && (
                data.allProducts.map((item, key) => 
                  <ProductItem
                    key={key} 
                    data={item}
                    setShowDetail={setShowDetail}
                    setModalData={setModalData} 
                        />
                ))}
          </ProductList>
        </AnimatePresence>
    )
}

export default Products;
