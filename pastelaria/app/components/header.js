import styles from "../styles/Header.module.css";

export default function HeaderPastelaria(props) {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1 className={styles.titulo}>
                    {props.nome || "Pastelaria do seu Zé"} 🍔
                </h1>
            </div>
        </header>
    );
}