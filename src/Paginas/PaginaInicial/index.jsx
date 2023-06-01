import styles from './PaginaInicial.module.scss'

import Cabecalho from "components/Cabecalho";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Galeria from "components/Galeria";
import Populares from "components/Populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>

            <Rodape />
        </>
    )
}