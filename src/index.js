import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import './Asset/boxicons-2.1.2/css/boxicons.min.css';
import './sass/index.scss';
const root = document.getElementById('root');
function App() {
  return <Layout></Layout>;
}
ReactDOM.render(<App />, root);
