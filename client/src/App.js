
// import logo from './logo.svg';
import './App.css';
import '../src/reset.css'
// import Header from './components/Header';
// import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Landing from './pages/landingPage/Landing';
import Contributors from './pages/Contributors';
import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CompanyDataContext } from "./utils/CompanyDataContext";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem('id_token') || '',
  }
});

function App() {
  const [companyData, setCompanyData] = useState({});

  return (
    <ApolloProvider client={client}>
      <CompanyDataContext.Provider value={{ data: companyData, setData: setCompanyData }}>
        <Router>
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/contributors" component={Contributors} />
              </Switch>
            </Layout>
          </div>
        </Router></CompanyDataContext.Provider>
    </ApolloProvider>
  )
}
export default App;
