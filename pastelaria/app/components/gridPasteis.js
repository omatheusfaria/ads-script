import CardPastel from "./cardPastel";
import styles from "../styles/GridPasteis.module.css";

export default function GridPasteis(props) {
    return (
        <div className={styles.grid}>
            {props.pasteis.map(pastel => (
                <CardPastel
                    key={pastel.id}
                    titulo={pastel.titulo}
                    preco={pastel.preco}
                    indisponivel={pastel.indisponivel}
                />
            ))}
        </div>
    );
}