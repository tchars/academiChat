import React from 'react'

import styles from './Mensagem.module.css';

const Mensagem = ({mensagem, idUsuarioLogado}) => {

    const { texto, id_usuario, url_foto } = mensagem;

    const tipo_mensagem = id_usuario === idUsuarioLogado ? styles.enviada : styles.recebida;

    return (
        <>
            <div className={`${styles.mensagem} ${tipo_mensagem}`}>
                <img src={url_foto || `https://robohash.org/${id_usuario}`} 
                    title={id_usuario} 
                    alt={id_usuario} 
                />
                <p>{texto}</p>
            </div>
        </>
    )
}

export default Mensagem
