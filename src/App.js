import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { CONFIGURACAO_FIREBASE } from './Utils/Firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Sair from './Components/Comuns/Sair';
import Entrar from './Components/Comuns/Entrar';
import Sala from './Components/Chat/Sala';

firebase.initializeApp(CONFIGURACAO_FIREBASE);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [usuario_logado] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>👩‍🎓 academi<i>Chat</i> 👨‍🎓</h1>
        <Sair auth={auth} />
      </header>

      <section>
        {usuario_logado ? <Sala firestore={firestore} firebase={firebase} auth={auth} useCollection={useCollectionData} /> 
                        : <Entrar firebase={firebase} auth={auth} /> }
      </section>

    </div>
  );
}

export default App;