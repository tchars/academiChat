import React from 'react'
import Mensagem from './Mensagem';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import styles from './Sala.module.css'

const Sala = ({firestore, auth, firebase, useCollection }) => {

  console.log(firestore, auth, firebase, useCollection)

  const textoMensagem = React.useRef();

  const db_mensagens = firestore.collection('mensagens');

  const query = db_mensagens.orderBy('criado_em').limit(25);

  const [mensagens] = useCollectionData(query, { idField: 'id' });

  const [formularioMensagem, setFormularioMensagem] = React.useState('');

  const sendMessage = async (e) => {
    
      e.preventDefault();

    await db_mensagens.add({
      texto: formularioMensagem,
      criado_em: firebase.firestore.FieldValue.serverTimestamp(),
      id_usuario: auth.currentUser.uid,
      url_foto: auth.currentUser.photoURL
    })

    setFormularioMensagem('');
    textoMensagem.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {mensagens && mensagens.map(msg => <Mensagem 
        key={msg.id} 
        idUsuarioLogado={auth.currentUser.uid} 
        mensagem={msg} />)}

      <span ref={textoMensagem}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formularioMensagem} 
          onChange={(e) => setFormularioMensagem(e.target.value)} 
          placeholder="Digite sua mensagem"
      />

      <button type="submit" disabled={!formularioMensagem}>Enviar</button>

    </form>
  </>)
}

export default Sala
