import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageArea = styled(motion.div)`
    padding-top: 20px;
`;

export const Container = styled(motion.div)`
    max-width: 1024px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .search-bar {
        background: red;
    }

    @media screen and (max-width: 760px){
        width: unset;
    }
`;