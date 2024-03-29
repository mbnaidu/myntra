import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "react-alice-carousel/lib/alice-carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './redux/StateProvider';
import reducer, { initiaState } from './redux/reducer';

 

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initiaState={ initiaState } reducer={reducer}>
        <App />
    </StateProvider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
