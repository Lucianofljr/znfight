import styles from './Hero.module.css'

export function Hero() {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.bgTrack} aria-hidden="true">
                <span className={styles.bgText}>
                    LUTA • FORÇA • DISCIPLINA • HONRA • RESPEITO •&nbsp;
                    LUTA • FORÇA • DISCIPLINA • HONRA • RESPEITO •&nbsp;
                </span>
            </div>

            <div className={styles.diagonal} aria-hidden="true" />

            <div className={styles.content}>
                <p className={styles.eyebrow}>Academia de Artes Marciais</p>

                <h1 className={styles.title}>Forje sua <br />
                    <span className={styles.accent}>melhor</span> versão!
                </h1>

                <p className={styles.subtitle}>
                    Quatro modalidades. Professores de alto nivel. <br />
                    Umas comunidade que transforma
                </p>
                <div className={styles.actions}>
                    <a href="#modalidades" className={styles.btnPrimary}>
                        Ver modalidades
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=558199517121" className={styles.btnSecondary}>
                        Aula experimental gratis →
                    </a>
                </div>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.stat}>
                    <span className={styles.statNum}>80
                        <span className={styles.statPlus}>+
                        </span>
                    </span>
                    <span className={styles.statLabel}>Alunos ativos</span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.statNum}>4 </span>
                    <span className={styles.statLabel}>Modalidades</span>
                </div>

            </div>

        </section>
    )
}