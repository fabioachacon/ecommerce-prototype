import React, { useState } from 'react';
import formatMoney from '../../helpers/MoneyFormatter';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { FixedContainer } from './styled';

// Icons
import { FaCartPlus } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

// Styles
import { AddToCart } from '../MainStyles';

// Animations
import { Fade } from '../../animations';

const ProductModal = ({ data, setShowDetail }) => {
    const [quantity, setQuantity] = useState(1);
    const [currentPrice, setCurrentPrice] = useState(data.price);

    const handleClose = () => {
        setShowDetail(false);
    }

    const outerCloseHandler  = (e) => {
        if(e.target.classList.contains('modalBox')){
            handleClose();
        }
    }

    const handleAddClick = () => {
        setQuantity( prevState =>  prevState + 1);
        setCurrentPrice( prevState => prevState + data.price);
    }

    const handleSubtractClick = () => {
        setQuantity( prevState => prevState === 1 ? 1 : prevState - 1 );
        setCurrentPrice( prevState => quantity === 1 ? data.price : prevState - data.price);
    }

    return (
        <FixedContainer
            onClick={outerCloseHandler}
            className='modalBox'
            variants={Fade}
            initial='hidden'
            animate='visible'
            exit='exit'>
                <div className="container">
                    <div className="header">
                        <IoMdClose onClick={handleClose} className='close-button' />
                    </div>
                    <div className="rich-product-info">
                        <div className="slider-area">
                            <img src={data?.photo?.image?.publicUrlTransformed || data.image} alt=""/>
                        </div>
                        <div className="datail-info">
                            <div className="title">
                                <h1>{data.name || data.title}</h1>
                            </div>
                            <div className="description">
                                {data.description}
                            </div>
                            <div className="price-quantity">
                                <div className="quantity">
                                     Quantidade: 
                                    <button  onClick={handleSubtractClick} className='quantity-button'>
                                       <AiOutlineMinus />
                                    </button>
                                    <div className="current-quantity">{ quantity }</div>
                                    <button onClick={handleAddClick} className="quantity-button">
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                                <div className="price">
                                  {`Por: ${formatMoney(data.price)}`}
                                </div>
                            </div>
                            <div className="add-to-cart">
                                <AddToCart>
                                 <FaCartPlus className='cart-icon' />
                                  Adicionar ao carrinho
                                </AddToCart>
                            </div>
                        </div>
                    </div>
                </div>
        </FixedContainer>
    )
}

export default ProductModal;
