import React from 'react';
import Styles from './App.module.css';

import { Emoji } from './Components/Comuns/Emoji';
import { Sair } from './Components/Comuns/Sair';
import { Entrar } from './Components/Comuns/Entrar';
import { Sala } from './Components/Chat/Sala';
import { CONFIGURACAO_FIREBASE } from './Utils/Firebase/autorizacao'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp(CONFIGURACAO_FIREBASE);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [usuario_logado] = useAuthState(auth);
  
  return (
    <div className={Styles.App}>
      <header>
        <h1>
          <Emoji aria="Estudante" emoji="👩‍🎓" /> <span style={{fontWeight: 300}}>academi</span><i>Chat</i> <Emoji aria="Estudante" emoji="👨‍🎓" />
        </h1>

        <Sair autorizacao={auth} />
      </header>

      <section>
        {usuario_logado ? <Sala firestore={firestore} firebase={firebase} autorizacao={auth} />
                        : <Entrar app={firebase} autorizacao={auth} /> }
      </section>

    </div>
  );
}

export default App;