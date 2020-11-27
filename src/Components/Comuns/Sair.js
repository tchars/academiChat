import React from 'react';

import Styles from './Sair.module.css';

export const Sair = ({auth}) => {
    return auth.currentUser && (
        <button className={Styles.sair} onClick={() => auth.signOut()}>Sair</button>
    )
}
