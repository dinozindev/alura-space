import React from 'react'
import Card from './Card'

// O componente Cards é responsável por criar um componente Card para cada objeto dentro do array fotos através da propriedade .map(), que irá retornar um Card para cada objeto do array.
export default function Cards({fotos, styles}) {
  return (
    <ul className={styles.galeria__cards}>
     {fotos.map((foto) => { 
        return <Card key={foto.id} foto={foto} styles={styles}
      />})}
 </ul>
  )
}
