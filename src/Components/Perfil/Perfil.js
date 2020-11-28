import React from 'react';

export const Perfil = ({ setOpen, autorizacao, firestore, firebase }) => {
  const db_perfis = firestore.collection('perfis');

  function verificarUsuario(autorizacao) {
    db_perfis
      .doc(autorizacao.currentUser.uid)
      .get()
      .then(function (doc) {
        if (!doc.data()) {
          cadastrarUsuario();
        }
      })
      .catch(function (error) {
        console.log('Erro - ', error);
      });
  }

  async function cadastrarUsuario() {
    await db_perfis.doc(autorizacao.currentUser.uid).set({
      nome: autorizacao.currentUser.displayName,
      apelido: autorizacao.currentUser.displayName,
      email: autorizacao.currentUser.email,
      criado_em: firebase.firestore.FieldValue.serverTimestamp(),
      id_usuario: autorizacao.currentUser.uid,
      url_foto: autorizacao.currentUser.photoURL,
    });
  }

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          verificarUsuario(autorizacao);
        }}
      >
        Perfil
      </button>
    </>
  );
};
