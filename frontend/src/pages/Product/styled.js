import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    max-width: var(--productPageMaxWidth, 1000px);
    /* background-color: var(--product-bg); */
    margin: auto;
    padding: 10px 20px;
    display: flex;
    border-right: 1px solid var(--product-bg);
    border-left: 1px solid var(--product-bg);

    .product-img{
        width: 500px;

        img {
            height: auto;
            width: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    .product-info-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        position: relative;
        color: #FFF;
    }

    .product-description {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 7rem;
        text-align: justify;

        div.title {
            font-size: 15px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
        }

        div.description {
            font-size: 18px;
        }

        div.price {
            font-size: 20px;
            font-weight: bold;
            font-family: 'Montserrat', sans-serif;
        }
    }

    .add-to-cart {
        position: absolute;
        bottom: 0;
        right: 0;
    }

`;