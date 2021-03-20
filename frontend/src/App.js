import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloClient, ApolloProvider } from '@apollo/client';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloLink, ApolloProvider, createHttpLink } from '@apollo/react-hooks'
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

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

function App() {

  return (
      <ApolloProvider  client={apolloClient}>
        <BrowserRouter>
          <Template>
            <Header />

            <Routes />

            <Footer />
          </Template>
        </BrowserRouter>
      </ApolloProvider>
  );
}

export default App;
