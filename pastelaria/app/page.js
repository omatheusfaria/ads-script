import styles from "./page.module.css";
import GridPasteis from "@/app/components/gridPasteis";
import Header from "@/app/components/header";

export default function Home() {
    const pasteis = [
        {id: 1, titulo: 'Carne', preco: 'R$ 10,00', indisponivel: false},
        {id: 2, titulo: 'Pizza', preco: 'R$ 10,00', indisponivel: true},
        {id: 3, titulo: 'Carne', preco: 'R$ 10,00', indisponivel: false},
        {id: 4, titulo: 'Pizza', preco: 'R$ 10,00', indisponivel: true},
        {id: 5, titulo: 'Carne', preco: 'R$ 10,00', indisponivel: false},
        {id: 6, titulo: 'Pizza', preco: 'R$ 10,00', indisponivel: true},
        {id: 7, titulo: 'Carne', preco: 'R$ 10,00', indisponivel: false},
        {id: 8, titulo: 'Pizza', preco: 'R$ 10,00', indisponivel: true}
    ];
    return (
    <body className={styles.body}>
        <Header nome="Pastelaria do seu Zé" />
        <GridPasteis pasteis={pasteis} />
    </body>
    );
}
