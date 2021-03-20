import React from 'react';
import { Container } from './styled';
import { AddToCart } from '../../components/MainStyles';
import { FaCartPlus } from 'react-icons/fa';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import formatMoney from '../../lib/MoneyFormatter'

import { PageAnimation } from '../../animations';

const Product = () => {
    const params = useParams();
    const { id }  = params;

    const SINGLE_PRODUCT_QUERY = gql`
        query PRODUCT_QUERY($id: ID!) {
            Product(where:{
                id: $id
                }){
                  name
                  description
                  price
                  photo {
                      image {
                          publicUrlTransformed
                          }
                        }
                    }
        }
    `;

    const { loading, error, data } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: {
            id
        }
    });

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (error) {
        return (
            <div>
                {error.message}
            </div>
        )
    }

    const { Product: product } = data;

    return (
        <Container
           variants={PageAnimation}
           initial='hidden'
           animate='visible'
           exit='exit'>
            <div className="product-img">
                <img src={product.photo?.image?.publicUrlTransformed} alt={product.name} />
            </div>
            <div className="product-info-area">
                <div className="product-description">
                    <div className="title">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="description">
                        {product.description}
                    </div>
                    <div className="price">
                        {`Por: ${formatMoney(product.price)}`}
                    </div>
                </div>
                <div className="add-to-cart">
                    <AddToCart>
                        <FaCartPlus className='cart-icon' />
                         Adicionar ao Carrinho
                    </AddToCart>
                </div>
            </div>
        </Container>
    )
}

export default Product;