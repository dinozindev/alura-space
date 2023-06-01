import React from 'react'
import styles from './Populares.module.scss'
import populares from './populares.json'
import Botao from 'components/Botao'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
            {populares.map(popular => {
                return (
                <li key={popular.id}>
                    <img src={popular.path} alt={popular.alt} />
                </li>
                )
            })}
        </ul>
        <Botao>Ver mais fotos</Botao>
    </aside>
  )
}
