import React from 'react';
import { CardArea } from './styled';
import { motion } from 'framer-motion';
import formatMoney from '../../lib/MoneyFormatter';
import Link, { useHistory } from 'react-router-dom';

import { FaCartPlus } from 'react-icons/fa';

const ProductItem = ({ data, setModalData, setShowDetail }) => {
    const history = useHistory();

    const getSubstring = ( string, limit ) => {
        if(string?.length > limit) {
            string = (string.substring(0, limit) + ' ...').trim();
        }
        return string;
    }

    const showDetailHandler = () => {
        setModalData(data);
        setShowDetail(true);
    }

    const handlePageChange = () => {
        history.push(`/product/${data.id}`);
    }

    return (
        <CardArea onClick={handlePageChange}>
            <div layout className="product-img">
                <img src={data?.photo?.image?.publicUrlTransformed || data.image} alt=""/>
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
