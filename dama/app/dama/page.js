import styles from "./page.module.css";

export default function Dama() {
    const quadrado = [];

    for (let i = 0; i < 8; i++){
        for (let j = 0; j < 8; j++){
            const isDark = (i+j) % 2 === 0
            const color = isDark? 'dama-dark':'dama-light'
            quadrado.push(
                <div key={`${i}-${j}`} className={color} />
            )
        }
    }

    return(
        <div className="dama-container">
            <div className="dama-tabuleiro">
                {quadrado}
            </div>
        </div>
    )
}