import React from 'react'
import styles from './Menu.module.scss'
import icones from './icones.json'
import Icone from './Icone'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {/* para cada icone presente no array de icones, será criado um componente icone, passando como props a key, que será o id do icone, e o icone em si (objeto, inteiro), retornando uma li para cada um. */}
        {icones.map(icone =>
        (<Icone
          key={icone.id}
          icone={icone}
        />))}
      </ul>
    </nav>
  )
}



