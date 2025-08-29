import styles from "../styles/CardPastel.module.css";

export default function CardPastel(props) {
    return (
        <div className={styles.card}>
            <div className={styles.titulo}>
                <h3 className={`${styles.tituloTexto} ${props.indisponivel ? styles.tituloIndisponivel : ''}`}>
                    {props.titulo}
                </h3>
            </div>

            <div className={styles.imageContainer }>
                <div className={styles.imageWrapper}>
                    <img src="/images/pastel.png" alt={`pastel de ${props.titulo}`} className={`${styles.image} ${props.indisponivel ? styles.imageIndisponivel : ''}`}/>
                </div>
            </div>
            <div className={styles.preco}>
                <p className={styles.precoTexto}>{props.preco}</p>
            </div>
        </div>

)
}