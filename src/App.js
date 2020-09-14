import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyAbsQu40YL3hG901Leyd7LvjKwZ935diNA',
      authDomain: 'manager-5d75f.firebaseapp.com',
      databaseURL: 'https://manager-5d75f.firebaseio.com',
      projectId: 'manager-5d75f',
      storageBucket: 'manager-5d75f.appspot.com',
      messagingSenderId: '1012252017582',
      appId: '1:1012252017582:web:4f582d4dc5d73ea7f63e3f'
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
