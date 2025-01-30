import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import './styles/index.css';

const App = () => {
  return (
    <Layout>
      <h1>Welcome to the TypeScript App</h1>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));