import styled from 'styled-components';
import { motion } from 'framer-motion'

export const PageArea = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    font-size: 1.2rem;
    color: #FFF;
    align-items: center;

    fieldset {
        width: 100%;
        border: none;
    }

    label {
        display: block;
        margin-bottom: 1rem;
        font-family: "Montserrat", sans-serif; 
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 22rem;
        padding: 15px 5px;
        height: 1.5rem;
        outline: none;
        margin-top: 5px;
        font-size: 1.1rem;
    }

    button {
        background-color: #EEC857;
        color: #FFF;
        border: none;
        outline: none;
        padding: 10px 50px;
        border-radius: 3px;
        font-size: 15px;
        cursor: pointer;
        position: relative;
        margin-top: 10px;
        font-weight: bold;
     }
`;