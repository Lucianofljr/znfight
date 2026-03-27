import { modalidades } from './Modalidades.data'
import { ModalidadeCard } from './ModalidadeCard'
import styles from './Modalidades.module.css'
 
export function Modalidades() {
    return (
        <section className={styles.section} id="modalidades">
            <div className={styles.sectionHead}>
                <span className={styles.label}>O que ensinamos</span>
                <h2 className={styles.title}>Nossas<br />Modalidades</h2>
                <p className={styles.subtitle}>
                    Clique em cada modalidade para ver horários e detalhes.
                </p>
            </div>
 
            <div className={styles.grid}>
                {modalidades.map((m, i) => (
                    <ModalidadeCard key={m.id} modalidade={m} index={i} />
                ))}
            </div>
        </section>
    )
}