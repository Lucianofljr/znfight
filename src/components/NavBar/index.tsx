import styles from './NavBar.module.css'

export function NavBar() {
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>
                <img 
                    src="/logo_zn.jpg" 
                    alt="ZN Fight" 
                    onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling?.removeAttribute('style')
                        }
                    }
                />
                <span className={styles.logoFallBack} style={{ display: 'none' }}>ZN</span>
            </div>

            <nav className={styles.menu}>
                <a href='#'>Inicio</a>
                <a href='#'>Planos</a>
                <a href='#'>Horarios</a>
                <a href='#'>Galeria</a>
                <a href='https://api.whatsapp.com/send/?phone=558199517121' className={styles.menuCta}>Matricule-se</a>
            </nav>
        </header>
    )
}