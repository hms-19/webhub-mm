import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/style.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'boxicons'
import { store } from './redux/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.Fragment>
);

