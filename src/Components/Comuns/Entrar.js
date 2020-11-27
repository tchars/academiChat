import React from 'react'
import Styles from './Entrar.module.css'

export const Entrar = ({app, autorizacao}) => {
    
    const loginSocialGoogle = () => {
        const provider = new app.auth.GoogleAuthProvider();
        autorizacao.signInWithPopup(provider);
    }
    
    return (
        <>
            <button className={Styles.entrar} onClick={loginSocialGoogle}>Acessar usando Google</button>
        </>
    )
}

