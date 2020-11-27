import React from 'react'

import styles from './Entrar.module.css'

export const Entrar = ({firebase, auth}) => {

    const loginSocialGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    
    return (
        <>
            <button className={styles.entrar} onClick={loginSocialGoogle}>Acessar usando Google</button>
        </>
    )
}

