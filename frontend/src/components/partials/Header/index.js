import React from 'react';
import { StyledHeader } from './styled';
import { Link } from 'react-router-dom';

import { isLogged, doLogout } from '../../../lib/AuthHandler';
import { useUser } from '../../../lib/useUser';
import SignOut from '../../SignOut';

const Header = () => {
    const user = useUser();

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
                    {!user &&
                     <>
                        <li>
                            <Link to='/signin'>Login</Link>
                        </li>
                        <li className='signup-list-item'>
                            <Link to='/signup' className='signup-button'>Cadastrar</Link>
                        </li>
                    </>
                    }
                    
                    {user && 
                      <>
                        <li>
                            <Link to='/me'>Minha Conta</Link>
                        </li>
                        <li>
                            <Link to='/cart' className='cart-button'>Carrinho</Link>
                        </li>
                        <li className='signup-list-item'>
                            <SignOut />
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
