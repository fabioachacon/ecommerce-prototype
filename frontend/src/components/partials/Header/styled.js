import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: 110px;
    background: #1a1a1a;
    border-bottom: 1px solid #EEC959;
    padding: 10px 0;
    position: sticky;
    right: 0;
    left: 0;
    top: 0;
    z-index: 999;

    .container {
        max-width: 1024px;
        margin: auto;
        height: 100%;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: rgba(245, 245, 245, 1);
        transition: all 0.3s ease-in-out;
        
        &:hover {
            color: rgba(245, 245, 245, 0.8);
        }
    }

    nav {
        height: 35px;
        display: flex;
        align-items: center;
    }

    .right-nav {
        padding-left: 10px;
        border-left: 1px solid #d8d7d7;
    }

    .left-nav {
        padding-right: 10px;
    }

    ul {
        list-style: none;
        display: flex;
    }

    li {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        font-size: 13px;
        font-family: "Montserrat", sans-serif;
        transition: all 0.3s ease-in-out;
        position: relative;

        &:not(.signup-list-item ):before {
            content: '';
            position: absolute;
            bottom: -3px;
            right: 0;
            left: 0;
            height: 1.2px;
            transform: scaleX(0);
            background-color: #EEC857;
            transition: transform 0.2s ease;
            will-change: transform;
        }

        &:not(.signup-list-item ):focus:before,
        &:not(.signup-list-item ):hover:before {
            transform: scaleX(1.2);
        }
    }

    .signup-button {
        background-color: #EEC857;
        padding: 12px 30px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
        font-weight: bold;    
        
        &:hover {
            background-color: #ccb05b;
        }
    }

    .logo-area {
        height: 100%;
        flex: 1;
        img {
            height: 100%;
            width: auto;
        }
    }

    @media screen and (max-width: 700px){
        nav {
            display: none;
        }
    }
`;