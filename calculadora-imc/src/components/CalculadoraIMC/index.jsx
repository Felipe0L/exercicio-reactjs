import './calculadoraIMC.css';
import { useState } from "react";


const Calculadora = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState(0);

    const imc = () => {
        const pesoNum = parseFloat(peso);
        const alturaQuadradoNum = parseFloat(altura) * parseFloat(altura);
        setResultado(pesoNum / alturaQuadradoNum);   
    }

    const resIMC = () => {
        if (resultado < 17) {
            return (
                    <p>
                        O resultado do seu IMC é {resultado.toFixed(2)}. Você está muito abaixo do peso ideal.
                    </p>
            );
        } else if (resultado < 18.5) {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está abaixo do peso.
                </p>
        );
        } else if (resultado < 25) {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está com o peso normal.
                </p>
        );
        } else if (resultado < 30) {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está acima do peso.
                </p>
        );
        } else if (resultado < 35) {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está com obesidade grau 1.
                </p>
        );
        } else if (resultado < 40) {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está com obesidade grau 2.
                </p>
        );
        } else {
            return (
                <p>
                    O resultado do seu IMC é {resultado.toFixed(2)}. Você está com obesidade grau 3.
                </p>
        );
        }
        
    }
    return (
        <div className="container">
            <h1> Calculadora de IMC</h1>
            <form className="form">
                <label htmlFor="altura">Altura: </label>
                <input id='altura' className="finput" type="number" placeholder="Digite sua altura" onChange={evento => setAltura(evento.target.value)} />
                <label htmlFor="peso">Peso: </label>
                <input id='peso' className="finput" type="number" placeholder="Digite o seu peso" onChange={evento => setPeso(evento.target.value)} />
                <button className="fbutton" onClick={imc} type='button'>Calcular</button>
            </form>
            <div>
                { resultado > 0 ? resIMC() : <p>Bem vindo a calculadora de IMC</p>}
            </div>
        </div>
    )
}

export default Calculadora;