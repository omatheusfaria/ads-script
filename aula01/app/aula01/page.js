export default function aula01(){
    const subtitulo = "Estou aprendendo NEXT.Js"
    let numero = 3
    const multiplicacao = <h3>{numero} X {numero} = {numero * numero}</h3>
    return(
        <>
            <h1>Aula 01</h1>
            <h2>Teste</h2>
            <p>{subtitulo}</p>
            {multiplicacao}
            <p>{entre()}</p>
            {random()}
        </>
    )
}

function entre(valor, min, max){
    if (valor > min && valor < max) {
        return <h4>Sim</h4>
    } else {
        return <h4>Não</h4>
    }

}

function random(){
    const numerosAleatorios = [];
    for (let i = 0; i < 10; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numero);
    }

    return (
        <div>
            <h1>Minha Lista de Números Aleatórios</h1>
            <ul>
                {numerosAleatorios.map((numero, index) => (
                    <li key={index}>
                        O {index + 1}º número aleatório é: {numero}
                    </li>
                ))}
            </ul>
        </div>
    );
}