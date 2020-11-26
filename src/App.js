import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { CONFIGURACAO_FIREBASE } from './Utils/Firebase/auth'

firebase.initializeApp(CONFIGURACAO_FIREBASE)

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  return (
    <div className="App">
      <header>
        <h1>academiChat</h1>
        <button>Sair</button>
      </header>

      <section>
        mensagens
      </section>

    </div>
  );
}

export default App;