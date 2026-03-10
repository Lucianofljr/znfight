import styles from './NavBar.module.css'

import { Menu } from './Menu'

export function NavBar() {
    return (
        <>
            <div className={styles.navbar}>
                <Menu />
            </div>
        </>
    )
}