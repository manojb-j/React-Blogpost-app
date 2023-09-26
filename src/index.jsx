import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import UserReducer from './UserReducer';
import App from './App';
import { LikedBlogsProvider } from './LikedBlogsContext';
import 'bootstrap/dist/css/bootstrap.min.css'


const store = configureStore({
  reducer: {
    blogs: UserReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <LikedBlogsProvider>
        <App />
      </LikedBlogsProvider>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
