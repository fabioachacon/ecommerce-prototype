import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

export const NextButton = styled(GrFormNextLink)`
      color: #FFF;
      font-size: 17px;
`;

export const PrevButton = styled(GrFormPreviousLink)`
    color: #FFF;
    font-size: 17px;
`;

export const PaginationStyles = styled(motion.div)`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  color: #FFF;
  
  a {
    text-decoration: none;
    color: #FFF;

  }
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }

`;