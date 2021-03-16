import React from 'react';
import { StyledHeader } from './styled';
import { Link } from 'react-router-dom';

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    const logged = isLogged();

    return (
        <StyledHeader>
            <div className="container">
                <div className="logo-area">
                    <Link to="/">
                        {/* <img src="/assets/logoJL.webp" alt=""/> */}
                    </Link>
                </div>
                <nav className='left-nav'>
                  <ul>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>
                      <li>
                          <Link to='/categories'>Categorias</Link>
                      </li>
                      <li>
                          <Link to='/about'>Sobre</Link>
                      </li>
                      <li>
                          <Link to='/contact'>Contato</Link>
                      </li>
                  </ul>
                </nav>
                <nav className='right-nav'>
                  <ul>
                    {!logged &&
                     <>
                        <li>
                            <Link to='/signin'>Login</Link>
                        </li>
                        <li className='signup-list-item'>
                            <Link to='/signup' className='signup-button'>Cadastrar</Link>
                        </li>
                    </>
                    }
                    
                    {logged && 
                      <>
                        <li>
                            <Link to='/me'>Minha Conta</Link>
                        </li>
                        <li>
                            <Link to='/cart' className='cart-button'>Carrinho</Link>
                        </li>
                        <li>
                            <Link to='/signout' className='cart-button'>Sair</Link>
                        </li>
                     </>
                    }
                  </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}

export default Header;
