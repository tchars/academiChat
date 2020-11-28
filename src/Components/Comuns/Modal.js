import React from 'react';

import styles from './Modal.module.css';

export const Modal = ({ open, setOpen, firestore, firebase, idUsuario }) => {
  const [nomePerfil, setNomePerfil] = React.useState();
  const [apelidoPerfil, setApelidoPerfil] = React.useState();
  const [urlFotoPerfil, setUrlFotoPerfil] = React.useState();

  const db_perfis = firestore.collection('perfis');

  React.useEffect(() => {
    db_perfis
      .doc(idUsuario)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const { nome, apelido, url_foto } = doc.data();

          setNomePerfil(nome);
          setApelidoPerfil(apelido);
          setUrlFotoPerfil(url_foto);
        } else {
          alert('Algo muito estranho aconteceu...');
        }
      })
      .catch(function (error) {
        console.log('Erro - ', error);
      });
  }, []);

  const atualizarPerfil = async (e) => {
    e.preventDefault();

    await db_perfis.doc(idUsuario).set({
      nome: nomePerfil,
      apelido: apelidoPerfil,
      atualizado_em: firebase.firestore.FieldValue.serverTimestamp(),
      url_foto: urlFotoPerfil,
    });

    alert('Deu certo!');

    setOpen(false);
  };

  function limparFechar() {
    setOpen(false);
  }

  return (
    <div
      className={`${styles.modal} ${open ? styles.visivel : styles.invisivel}`}
    >
      <form className={styles.form} onSubmit={atualizarPerfil}>
        <label htmlFor="apelido">Apelido</label>
        <input
          value={apelidoPerfil}
          onChange={(e) => setApelidoPerfil(e.target.value)}
          placeholder="Digite seu apelido"
          id="apelido"
          type="text"
        />

        <label htmlFor="nome">Nome</label>
        <input
          value={nomePerfil}
          onChange={(e) => setNomePerfil(e.target.value)}
          placeholder="Digite seu nome"
          id="nome"
          type="text"
        />

        <label htmlFor="url">Endereço foto</label>
        <input
          value={urlFotoPerfil}
          onChange={(e) => setUrlFotoPerfil(e.target.value)}
          placeholder="Coloque a url da sua foto"
          id="url"
          type="text"
        />

        <div className={styles.btnWrapper}>
          <button className={styles.btnCancelar} onClick={() => limparFechar()}>
            Cancelar
          </button>

          <button type="submit" className={styles.btnSalvar}>
            Salvar e fechar
          </button>
        </div>
      </form>
    </div>
  );
};
