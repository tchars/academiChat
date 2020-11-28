import React from 'react';
import Styles from './App.module.css';

import { Emoji } from './Components/Comuns/Emoji';
import { Sair } from './Components/Comuns/Sair';
import { Entrar } from './Components/Comuns/Entrar';
import { Sala } from './Components/Chat/Sala';
import { CONFIGURACAO_FIREBASE } from './Utils/Firebase/autorizacao';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Perfil } from './Components/Perfil/Perfil';
import { Modal } from './Components/Comuns/Modal';

firebase.initializeApp(CONFIGURACAO_FIREBASE);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [usuario_logado] = useAuthState(auth);

  const [open, setOpen] = React.useState(false);

  return (
    <div className={Styles.App}>
      <header>
        <h1>
          <Emoji aria="Estudante" emoji="👩‍🎓" />{' '}
          <span style={{ fontWeight: 300 }}>academi</span>
          <i>Chat</i> <Emoji aria="Estudante" emoji="👨‍🎓" />
        </h1>

        {usuario_logado ? (
          <Perfil
            setOpen={setOpen}
            autorizacao={auth}
            firestore={firestore}
            firebase={firebase}
          />
        ) : (
          ''
        )}

        <Sair autorizacao={auth} />
      </header>

      <section>
        {usuario_logado ? (
          <Sala firestore={firestore} firebase={firebase} autorizacao={auth} />
        ) : (
          <Entrar app={firebase} autorizacao={auth} />
        )}
      </section>

      {usuario_logado ? (
        <Modal
          open={open}
          setOpen={setOpen}
          firestore={firestore}
          firebase={firebase}
          idUsuario={auth.currentUser.uid}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
