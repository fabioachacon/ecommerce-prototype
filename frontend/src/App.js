import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useState, createContext } from 'react';

// Components
import { Template } from './components/MainStyles';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './Routes';
import { endpoint } from './config';
import { getToken } from './lib/AuthHandler';

  const uri = endpoint;

  const apolloClient = new ApolloClient({
    uri,
    request: (operation) => {
      const token = getToken() || localStorage.getItem('token');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    }
  });

const HeaderContext = createContext();

function App() {
  const [headerStatus, setHeaderStatus] = useState(true);

  return (
      <ApolloProvider  client={apolloClient}>
        <BrowserRouter>
        <HeaderContext.Provider value={{headerStatus, setHeaderStatus}}>
          <Template>
            <Header />

            <Routes />

            <Footer />
          </Template>
        </HeaderContext.Provider>
        </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
