import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'
const config = {
	apiKey: "AIzaSyBhrMm2Oe_w3K5Hf8-zDO6QBt3N7yxa0p4",
	authDomain: "devacademy-quest.firebaseapp.com",
	databaseURL: "https://devacademy-quest.firebaseio.com",
	projectId: "devacademy-quest",
	storageBucket: "devacademy-quest.appspot.com",
	messagingSenderId: "926845507495"
}
firebase.initializeApp(config)
const ui = new firebaseui.auth.AuthUI(firebase.auth());

class App extends Component {
  constructor() {
  	super()
  }
  openLogin() {
	  ui.start('#firebaseui-auth-container', {
		  signInOptions: [
			  firebase.auth.EmailAuthProvider.PROVIDER_ID,
			  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			  firebase.auth.PhoneAuthProvider.PROVIDER_ID
		  ],
	  });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          We already started.
        </p>
	      <div id="firebaseui-auth-container"></div>
	      <button onClick={ this.openLogin }>Open Login</button>
      </div>
    );
  }
}

export default App;
