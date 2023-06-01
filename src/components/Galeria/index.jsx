import React from 'react'

import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'
import { useState } from 'react'
import Tags from 'components/Tags'

// Componente Galeria emgloba os componentes Tags e Cards, passando as props relacionadas às fotos e os estilos. 
export default function Galeria() {

    // estado do array fotos, tendo como estado inicial o array em si. 
    const [itens, setItens] = useState(fotos);
    
    // const tags responsável por conter as tags das imagens. Através de fotos.map, é criado um novo array, contendo apenas as tags de cada foto como objeto, que serão armazenados dentro de Set, que conterá apenas valores únicos, ou seja, apenas cada uma das tags. 
    const tags = [...new Set(fotos.map((valor) => valor.tag))]

    // a function filtraFotos recebe o parâmetro tag, em que, um novo array será armazenado na const novasFotos através de fotos.filter, que filtrará apenas as fotos que tiverem a mesma tag que o botão pressionado. 
    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter(foto => {
            return foto.tag === tag;
        })

        // após a filtragem, o novo array será dado como novo estado, atualizando o estado atual através de setItens. 
        setItens(novasFotos)
    }
    
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
            <Cards fotos={itens} styles={styles} />
        </section>
    )
}
