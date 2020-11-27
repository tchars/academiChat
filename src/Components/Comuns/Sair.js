import React from 'react';

import Styles from './Sair.module.css';

export const Sair = ({autorizacao}) => {
    return autorizacao.currentUser && (
        <button className={Styles.sair} onClick={() => autorizacao.signOut()}>Sair</button>
    )
}
