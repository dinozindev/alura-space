import React from 'react'
import favorito from './favorito.png'
import abrir from './open.png'

export default function Card({foto, styles}) {
  return (
            // para cada objeto presente no array fotos, será criado um card, contendo informações como título da foto, créditos da foto, a imagem, um id para cada um e a tag que indica a categoria pertencente. 
            <li key={foto.id} className={styles.galeria__card}>
                <img
                    src={foto.imagem}
                    alt={foto.titulo}
                    className={styles.galeria__imagem}
                />

                <p className={styles.galeria__descricao}>{foto.titulo}</p>
                <div>
                    <p>{foto.creditos}</p>
                    <span>
                        <img src={favorito} alt="ícone coração de curtir" />
                        <img src={abrir} alt="ícone de abrir modal" />
                    </span>
                </div>
            </li>
        )}