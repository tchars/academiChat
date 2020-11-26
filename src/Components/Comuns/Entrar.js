import React from 'react'

const Entrar = ({firebase, auth}) => {

    const loginSocialGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    
    return (
        <>
            <button onClick={loginSocialGoogle}>Acessar usando o Google</button>
        </>
    )
}

export default Entrar
