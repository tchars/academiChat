import React from 'react'

const Sair = ({auth}) => {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sair</button>
    )
}

export default Sair
