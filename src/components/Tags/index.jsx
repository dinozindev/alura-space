import React from 'react'
import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            {/* o array de tags recebe um map, retornando uma li para cada tag. Quando a tag é clicada, invoca a function filtraFotos, que recebe como parâmetro a tag em específico.  */}
            {tags.map(tag => {
              return <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li> 
            })}
            {/* quando a li Todas é clicada, invoca a function setter setItens, que atualiza o state atual para o array inicial fotos, retornando todas as fotos.  */}
            <li onClick={ () => setItens(fotos)}>Todas</li>
        </ul>
    </div>
  )
}
