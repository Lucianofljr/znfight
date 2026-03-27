import { useState } from 'react'
import type { Modalidade } from './Modalidades.data'
import styles from './ModalidadeCard.module.css'

type Props = {
    modalidade: Modalidade
    index: number
}

export function ModalidadeCard({ modalidade, index }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <article
            className={`${styles.card} ${open ? styles.open : ''}`}
            onClick={() => setOpen(prev => !prev)}
            style={{ animationDelay: `${index * 80}ms` }}
        >
            <div className={styles.accentBar} />

            <header className={styles.header}>
                <span className={styles.icon} aria-hidden="true">{modalidade.icon}</span>

                <div className={styles.meta}>
                    <span
                        className={styles.tag}
                        style={{ color: modalidade.tagColor }}
                    >
                        {modalidade.tag}
                    </span>
                    <h3 className={styles.name}>{modalidade.name}</h3>
                </div>

                <span className={styles.toggle} aria-hidden="true">
                    {open ? '-' : '+'}
                </span>
            </header>

            <p className={styles.desc}>{modalidade.desc}</p>

            <div className={styles.datails}>
                <div className={styles.beneficios}>
                    {modalidade.beneficios.map(b => (
                        <span key={b} className={styles.pill}>{b}</span>
                    ))}
                </div>
                

                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Nivel</span>
                        <span className={styles.infoValue}>{modalidade.nivel}</span>
                    </div>
                    
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Horarios</span>
                        <span className={styles.infoValue}>{modalidade.horarios}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}