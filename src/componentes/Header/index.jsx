
import MenuLink from '../MenuLink';
import styles from'./Header.module.css'

export default function Header(){


    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Início
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre mim
                </MenuLink>
                
            </nav>
        </header>
    )
}