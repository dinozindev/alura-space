import styles from './Rodape.module.scss'
import React from 'react'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <div className={styles.rodape__icones}>
            <a href=";" rel="noreferrer" target="_blank">
                <img src={facebook} alt="Logo do Facebook" />
            </a>
            <a href=";" rel="noreferrer" target="_blank">
                <img src={twitter} alt="Logo do Twitter" />
            </a>
            <a href=";" rel="noreferrer" target="_blank">
                <img src={instagram} alt="Logo do Instagram" />
            </a>
        </div>
        <h1 className={styles.rodape__texto}>Desenvolvido por Alura.</h1> 
    </footer>
  )
}
