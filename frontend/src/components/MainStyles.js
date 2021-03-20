import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Template = styled(motion.div)`

`;

export const PageContainer = styled(motion.div)`
    max-width: 1024px;
    margin: auto;
`;

export const PageArea = styled(motion.div)`
    
`;

export const AddToCart = styled.button`
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
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 11.5px;

        &:focus {
            border: 1px solid #525252;
        }

        .cart-icon {
            font-size: 19px;
        }
`

export const PageTitle = styled.div`
    text-align: center;
    padding: 20px 0px;
    font-size: 60px;
    color: #ECC656;
    font-family: "Montserrat";
`;