import React, { useState } from 'react';
import { CardArea } from './styled';
import { motion } from 'framer-motion';
import formatMoney from '../../lib/MoneyFormatter';
import Link, { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import { FaCartPlus } from 'react-icons/fa';

const ProductItem = ({ data, setModalData, setShowDetail }) => {
    const history = useHistory();
    const [displayBox, setDisplayBox] = useState(false);

    const getSubstring = ( string, limit ) => {
        if(string?.length > limit) {
            string = (string.substring(0, limit) + ' ...').trim();
        }
        return string;
    }

    const showDetailHandler = (e) => {
        setModalData(data);
        setShowDetail(true);
    }

    const handlePageChange = (e) => {
        if (!e.target.classList.contains('more-details')){
            history.push(`/product/${data.id}`);
        }
    }

    return (
        <CardArea 
            onMouseOver={() => setDisplayBox(true)}
            onMouseLeave={() => setDisplayBox(false)} 
            displayBox={displayBox} 
            onClick={handlePageChange}>
            <div layout className="product-img">
                <img src={data?.photo?.image?.publicUrlTransformed || data.image} alt=""/>
                <div onClick={showDetailHandler} className="more-details">
                    {/* <AiOutlineSearch /> */}
                    Visualização Rápida
                </div>
            </div>
            <div className="product-info">
                <div className="name">
                   {getSubstring(data?.name || data.title, 30)}  
                </div>
                <div className="description">
                   {getSubstring(data?.description || data.title, 90)}
                </div>
                <div className="price">
                 {`Por: ${formatMoney(data.price)}`}
                </div>
            </div>
        </CardArea>
    )
}

export default ProductItem;
