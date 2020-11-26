import React from 'react'

const Mensagem = ({mensagem}) => {

    const { texto, id_usuario, url_foto } = mensagem;

    return (
        <>
            <div>
                <img src={url_foto || `https://robohash.org/${id_usuario}`} title={id_usuario} alt={id_usuario} />
                <p>{texto}</p>
            </div>
        </>
    )
}

export default Mensagem
