import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import { CONFIGURACAO_FIREBASE } from './Utils/Firebase/auth'

import Sair from './Components/Comuns/Sair';
import Entrar from './Components/Comuns/Entrar';

firebase.initializeApp(CONFIGURACAO_FIREBASE)

const auth = firebase.auth();

function App() {

  const [usuario_logado] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>👩‍🎓 academi<i>Chat</i> 👨‍🎓</h1>
        <Sair auth={auth} />
      </header>

      <section>
        {usuario_logado ? "sala de chat" : <Entrar firebase={firebase} auth={auth} />}
      </section>

    </div>
  );
}

export default App;