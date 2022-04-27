import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import Home from './components/screens/Home';
import Layout from './components/screens/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>

  </React.StrictMode>
);

