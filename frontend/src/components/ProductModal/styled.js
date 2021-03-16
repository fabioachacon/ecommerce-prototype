import styled from 'styled-components';
import { motion } from 'framer-motion';


export const FixedContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;

    .header { 
        height: 40px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #FFF;
        font-size: 25px;
        padding: 0 10px;

        .close-button {
            cursor: pointer;
        }
    }

    .container {
        width: 63rem;
        background-color: #1A1A1A;
        padding: 5px;
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        position: relative;

        .slider-area {
            width: 50%;
            height: 30rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
                border-radius: 2px
            }
        }
    }

    .rich-product-info {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
    }

    .datail-info {
        display: flex;
        flex-direction: column;
        padding: 0 25px;
        height: 25rem;
        flex: 1;
        justify-content: space-between;
        
        .title {
            font-size: 13px;
            color: #FFF;
            font-family: "Montserrat", sans-serif;
        }

        .description {
            font-size: 15px;
            text-align: justify;
            color: #FFF;
            font-family: sans-serif;
        }

        .price-quantity {
            color: #FFF;
            display: flex;
            flex-direction: column;
            font-family: "Montserrat", sans-serif;
            font-weight: bold;

            div.price {
                margin-top: 30px;
                font-size: 19px;
            }

            div.current-quantity {
                width: 30px;
                text-align: center;
            }

            div.quantity {
                display: flex;
                align-items: center;
                gap: 1rem;

                button.quantity-button {
                    background: #eec662;
                    padding: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 19px;
                    color: #2b2a2a;
                    font-weight: bold;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    border-radius: 1px;
                }
            }
        }

        .add-to-cart {
            /* background: white; */
            position: absolute;
            bottom: 10px;
            right: 0;
            padding: 0 20px;
        }
    }

`;