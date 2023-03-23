import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa}
                    src={`/posts/${post.id}/capa.png`}
                    alt='imagem de capa' />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>
                    Ler 
                </BotaoPrincipal>
            </div>

        </Link>

    )
}