import React from 'react';

import styles from './Sair.module.css';

const Sair = ({auth}) => {
    return auth.currentUser && (
        <button className={styles.sair} onClick={() => auth.signOut()}>Sair</button>
    )
}

export default Sair
