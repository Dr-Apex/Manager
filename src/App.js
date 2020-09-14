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
