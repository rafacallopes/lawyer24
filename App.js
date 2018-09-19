import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers/reducers'
import * as firebase from 'firebase' 
import Login from './src/Components/Login';
import Main from './src/Components/Main';
import Add from './src/Components/Add';



export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBTK_YGjx_t8emHBLWzaF3PTcKg1Uq68DM",
      authDomain: "lawyer24-518f0.firebaseapp.com",
      databaseURL: "https://lawyer24-518f0.firebaseio.com",
      projectId: "lawyer24-518f0",
      storageBucket: "lawyer24-518f0.appspot.com",
      messagingSenderId: "619980575847"
    };

    firebase.initializeApp(config);
  }


  render() {
  let store = createStore(reducers, {}, compose( applyMiddleware(thunk) ) )
  return (

    <Provider store={store}>

    <Router>
      <Scene key="root">
        <Scene key="login"
          component={Login}
          title="login"
          initial
          hideNavBar
        />
        <Scene
          key="main"
          component={Main}
          title="main"
          hideNavBar
        />
         <Scene
          key="add"
          component={Add}
          title="add"
          hideNavBar
          
        />
      </Scene>
    </Router>
    </Provider>
  );
}
}

