import styles from "./page.module.css";
import Titulo from "@/app/components/Titulo";

export default function Home() {
    return (
        <div>
            <h1 className={styles.texto}>Aula 02 - Componentes</h1>
            <Titulo titulo="Outer Wilds" subtitulo="Annapurna" cor="#e376a1" subsubtitulo="2021"/>
            <Titulo titulo="Twelve Minutes" subtitulo="Annapura " cor="#e2e19a" subsubtitulo="2022"/>
        </div>
    );
}