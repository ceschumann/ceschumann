import React from 'react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
// import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ signOut, user }) {
  return (
    <div>
      <header>
        <h1>Hello {user.username}</h1>
        <h2>We now have Auth!</h2>
      </header>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);