import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

const arr = [ 1,3,10,11,14];

const target = 24;

const myFunc = (arr, target) => {
  const size = arr.length;
  for( let i = 0; i<size-1; i++){
    for(let j = i+1; j<size; j++){
      if(arr[i]+arr[j] === target){
        console.log(`valid pairs found ${arr[i]} ${arr[j]}`)
        return; 
      }else{
        console.log('valid pairs not found')
      }
    }
  }
}

myFunc(arr, target)