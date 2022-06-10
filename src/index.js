import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './components/Layout';
import './Asset/boxicons-2.1.2/css/boxicons.min.css';
import './sass/index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const container = document.getElementById('root');
const root = createRoot(container);
function App() {
  return (
    <Provider store={store}>

      <Layout></Layout>
    </Provider>
  );
}
root.render(<App />);
