import React from 'react'
import styles from '../Menu.module.scss'

// através do map no componente Menu, uma li será criada para cada ícone presente no array icones, contendo a imagem do icone, seu texto alternativo, e o texto correspondente a cada um. 
export default function Icone({icone}) {
  return (
   <li className={styles.menu__item}>
        <img
          src={icone.imagem}
          alt={icone.alt}
        />
        <a href=";" >{icone.text}</a>
      </li>
    )
}

  


