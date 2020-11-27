import React from 'react';
import './Sala.module.css';

import Mensagem from './Mensagem';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export const Sala = ({firestore, autorizacao, firebase}) => {

  const textoMensagem = React.useRef();

  const db_mensagens = firestore.collection('mensagens');

  const query = db_mensagens.orderBy('criado_em').limit(25);

  const [mensagens] = useCollectionData(query, { idField: 'id' });

  const [formularioMensagem, setFormularioMensagem] = React.useState('');

  const enviarMensagem = async (e) => {
    
      e.preventDefault();

    await db_mensagens.add({
      texto: formularioMensagem,
      criado_em: firebase.firestore.FieldValue.serverTimestamp(),
      id_usuario: autorizacao.currentUser.uid,
      url_foto: autorizacao.currentUser.photoURL
    })

    setFormularioMensagem('');
    
    textoMensagem.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {mensagens && mensagens.map(msg => <Mensagem 
        key={msg.id} 
        idUsuarioLogado={autorizacao.currentUser.uid} 
        mensagem={msg} />)}

      <span ref={textoMensagem}></span>

    </main>

    <form onSubmit={enviarMensagem}>

      <input value={formularioMensagem} 
          onChange={(e) => setFormularioMensagem(e.target.value)} 
          placeholder="Digite sua mensagem"
      />

      <button type="submit" disabled={!formularioMensagem}>Enviar ➡</button>

    </form>
  </>)
}
