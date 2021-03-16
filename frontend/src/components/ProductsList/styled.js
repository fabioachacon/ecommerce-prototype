import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductList = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 700px) {
        justify-content: center;
    }
`;