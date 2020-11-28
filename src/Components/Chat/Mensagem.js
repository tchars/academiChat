import React from 'react';

import styles from './Mensagem.module.css';

const Mensagem = ({ mensagem, idUsuarioLogado, firestore }) => {
  const { texto, id_usuario } = mensagem;

  const [perfilUsuarioFoto, setPerfilUsuarioFoto] = React.useState();
  const [perfilUsuarioNome, setPerfilUsuarioNome] = React.useState();
  const [perfilUsuarioApelido, setPerfilUsuarioApelido] = React.useState();

  const tipo_mensagem =
    id_usuario === idUsuarioLogado ? styles.enviada : styles.recebida;

  const db_perfis = firestore.collection('perfis');

  async function buscarFoto() {
    await db_perfis
      .doc(id_usuario)
      .get('url_foto')
      .then(function (doc) {
        setPerfilUsuarioFoto(doc.data().url_foto);
        setPerfilUsuarioNome(doc.data().nome);
        setPerfilUsuarioApelido(doc.data().apelido);
      })
      .catch(function (error) {
        console.log('Erro - ', error);
      });
  }

  buscarFoto();

  const nome = perfilUsuarioApelido ? perfilUsuarioApelido : perfilUsuarioNome;

  return (
    <>
      <div className={`${styles.mensagem} ${tipo_mensagem}`}>
        <img
          src={perfilUsuarioFoto || `https://robohash.org/${id_usuario}`}
          title={nome}
          alt={nome}
        />
        <div className={styles.containerTexto}>
          <p>{texto}</p>
          <span className={styles.autor}>{nome}</span>
        </div>
      </div>
    </>
  );
};

export default Mensagem;
