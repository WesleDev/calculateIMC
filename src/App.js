import './app.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');

  function calculateIMC() {
    const alt = height / 100;
    const imc = weight / (alt * alt);

    if (imc < 18.6) {
      setMessage('Abaixo do peso! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage('Peso ideal! Seu IMC: ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage('Levemente acima do peso! Seu IMC: ' + imc.toFixed(2));
    } else if (imc > 34.9) {
      setMessage('Obesidade! Seu IMC: ' + imc.toFixed(2));
    }
  }

  return (
    <div className='app'>
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className='area-input'>
        <input
          type='text'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder='Peso em (kg) Ex: 90'
        />
        <input
          type='text'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder='Altura em (cm) Ex: 190'
        />

        <button onClick={calculateIMC}>Calcular</button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
