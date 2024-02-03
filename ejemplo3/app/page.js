"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(resultadoSuma);
  }
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resultadoResta);
  }
  const multiplicar = () => {
    const resultadoMulti = parseFloat(numero1) * parseFloat(numero2);
    setResultado(resultadoMulti);
  }
  const dividir = () => {
    if(numero1 == 0 || numero2 == 0) {
      setResultado("No se puede dividir 0")
    }
    else {
      const resultadoDiv = parseFloat(numero1) / parseFloat(numero2);
      setResultado(resultadoDiv);
    }
  }
  const potencia = () => {
    const resultadoPot = parseFloat(numero1) ^ parseFloat(numero2);
    setResultado(resultadoPot);
  }
  const raiz = () => {
    const resultadoRaiz1 = Math.sqrt(parseFloat(numero1));
    const resultadoRaiz2 = Math.sqrt(parseFloat(numero2));
    setResultado(resultadoRaiz1 + " y " + resultadoRaiz2)
  }

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} min={1}/>
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} min={1}/>
        </div>
        <div>
          <div>
            <button className={styles.button} onClick={sumar}>Sumar</button>
            <button className={styles.button} onClick={restar}>Restar</button>
          </div>
          <div>
            <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
            <button className={styles.button} onClick={dividir}>Dividir</button>
          </div>
          <div>
            <button className={styles.button} onClick={potencia}>Potencia</button>
            <button className={styles.button} onClick={raiz}>Raíces Cuadradas</button>
          </div>
        </div>
        <div className={styles.resultado}>El resultado es: {resultado}</div>

      </div>
    </main>
  );
}
