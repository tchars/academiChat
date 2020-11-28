async function cadastrarUsuario(autorizacao) {
  if (autorizacao) {
    const db_perfis = firestore.collection('perfis');

    await db_perfis.doc(autorizacao.currentUser.uid).set({
      nome: autorizacao.currentUser.displayName,
      apelido: autorizacao.currentUser.displayName,
      email: autorizacao.currentUser.email,
      criado_em: firebase.firestore.FieldValue.serverTimestamp(),
      id_usuario: autorizacao.currentUser.uid,
      url_foto: autorizacao.currentUser.photoURL,
    });
  }
}

export default atualizarPerfilService;
