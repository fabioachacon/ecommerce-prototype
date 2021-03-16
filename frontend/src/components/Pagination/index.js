import React, { useState } from 'react';
import { PaginationStyles } from './styled';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { perPage } from '../../config';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const Pagination = ({ page }) => {

    const COUNT_PRODUCTS_QUERY = gql `
    query COUNT_PRODUCTS_QUERY {
      _allProductsMeta {
        count
      }
 }
`;

const { data, loading, error } = useQuery(COUNT_PRODUCTS_QUERY);

const count = data?._allProductsMeta?.count;
const pageCount = Math.ceil( count / perPage );

    return (
        <PaginationStyles>
            <Link 
              aria-disabled={page <= 1} 
              to={`/products/${page - 1}`}>
             ← Prev
            </Link>
            {/* <p>
             Page {page} of {pageCount}
            </p>
            <p>{count} Items Total</p> */}
            <Link 
                aria-disabled={page >= pageCount} 
                to={`/products/${page + 1}`}>
              Next →
            </Link>
      </PaginationStyles>
    )
}

export default Pagination;
