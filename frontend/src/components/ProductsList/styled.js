import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProductList = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 35px;

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
`;