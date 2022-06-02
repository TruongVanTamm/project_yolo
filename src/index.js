import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './Asset/boxicons-2.1.2/css/boxicons.min.css';
import './sass/index.scss';
const container = document.getElementById('root');
const root = createRoot(container);
function App() {
  return (
      <Layout></Layout>
  );
}
root.render(<App />);
