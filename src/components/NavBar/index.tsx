import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/logo_zn.jpg" alt="logo" />
            </div>

            <nav className={styles.menu}>
                <a href='#'>Inicio</a>
                <a href='#'>Planos</a>
                <a href='#'>Horarios</a>
                <a href='#'>Galeria</a>
                <a href='#'>Contato</a>
            </nav>
        </header>
    )
}