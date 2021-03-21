import styled from 'styled-components';
import { motion } from 'framer-motion';


export const CardArea = styled(motion.div)`
    height: var(--cardHeight, 370px);
    width: var(--cardWidth, 275px);
    display: flex;
    flex-direction: column;
    background-color: var(--primary-card-color);
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 6px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #FFF;
    
    &:hover {
        border: 1px solid #525252;
    }

    .product-img{
        height: var(--cardImageHeight, 65%);
        position: relative;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
            border-radius: 2px;
        }

        .more-details{
            background-color: black;
            position: absolute;
            bottom: 0;
            left: 10px;
            right: 10px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            cursor: pointer;
            font-size: 11px;
            font-family: "Montserrat", sans-serif;
            font-weight: bold;
            color: #FFF;
            
            svg {
                font-size: 1.5rem;
            }
        }
    }

    .product-info {
        flex: 1;
        padding: 5px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      .name {
        font-size: 16px;
        font-family: "Open Sans";
        letter-spacing: 1px;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold;
     }

      .description {
        text-align: justify;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
     }

      .price {
        font-size: 15px;
        font-weight: bold;
        font-family: "Open Sans", sans-serif;
     }

}

    /* .price--detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding: 0 5px;
        color: #FFF;
        font-size: 15px;
        font-family: sans-serif;
        
        button {
            padding: 5px;
        }

    }

    .cart-button{
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        
        button {
            height: 35px;
            padding: 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            outline: none;
            border: none;
            background-color: #eec662;
            border-radius: 3px;
            cursor: pointer;
            color: #2b2a2a;
            font-family: "Montserrat";
            font-weight: bold;
            font-size: 11.5px;

            &:focus {
                border: 1px solid #525252;
            }
        }

        .cart-icon {
            font-size: 19px;
        }
    } */


`;
