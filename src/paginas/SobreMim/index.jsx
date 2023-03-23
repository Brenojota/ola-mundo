import styles from './SobreMim.module.css'
import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpg'

export default function SobreMim(){
    return(
        <PostModelo
        fotoCapa={fotoCapa}
        titulo="Sobre mim">
        <h3 className={styles.subtitulo}>
            Olá, eu sou Breno
        </h3>
        <img 
            src={fotoSobreMim}
            alt='Foto minha' 
            className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de programação e estou feliz em te ver por aqui!
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação iniciou no ensino médio, pois era integrado com o curso de Redes de computadores. Aprendi o básico de lógica de programação com Java e Python mas sem aprofundar muito em cada um deles.
            </p>
            <p className={styles.paragrafo}>
                Hoje participo do Projeto UP CODE na empresa farmacêutica Pague Menos, com a iniciativa de nos dar suporte e ambiente necessário para estudarmos programação. A idealização do projeto é abrir portas do mercado de trabalho dentro da própria empresa ou até mesmo em outras empresas.
            </p>
        </PostModelo>
    )
}