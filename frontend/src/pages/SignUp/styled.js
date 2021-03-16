import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1024px;
`

export const PageArea = styled.div`
     display: flex;
     justify-content: center;
     /* border: 1px solid #adadad; */

     fieldset {
         border: none;
     }

     form {
         border-radius: 3px;
         padding: 10px;

         .area {
            display: flex;
            flex-direction: column;
            padding: 8px;
            color: #dfdbdb;
            margin: auto;
            width: 400px;
            
            .area--title{
                width: 200px;
                text-align: left;
                padding-right: 20px;
                padding-bottom: 10px;
                font-weight: bold;
                font-size: 14px;
                font-family: "Raleway", sans-serif;        
            }
            
            .area--input{
                flex: 1;
                display: flex;
                input {
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #DDD;
                    border-radius: 2px;
                    outline: none;
                    transition: all ease 0.4s;
                    &:focus {
                        border: 1px solid #333;
                        color: #333;
                    }
                }
                input[type='password'],
                input[type='email'],
                input[type='text'] {
                    width: 100%;
                }
                button {
                    background-color: #EEC857;
                    color: #FFF;
                    border: none;
                    outline: none;
                    padding: 10px 30px;
                    border-radius: 3px;
                    font-size: 15px;
                    cursor: pointer;
                    position: relative;
                    margin: auto;
                    font-weight: bold;
                }
            }
         }
     }
`;

export const PageTitle = styled.div`
    text-align: center;
    padding: 20px 0px;
    font-size: 60px;
    color: #ECC656;
    font-family: "Montserrat";

`;