import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>Seja bem-vindo(a) a minha página pessoal! Eu sou Breno Juan, estudante de Front-end, estou exercitando meus conhecimento da plataforma Alura, espero que goste deste site.</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColortido} src={circuloColorido}  alt='#'
                aria-hidden={true}        
            ></img>
            <img className={styles.minhaFoto}
                src={minhaFoto}
                alt='minha foto'
            ></img>
            </div>
        </div>
    )
}