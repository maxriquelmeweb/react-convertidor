import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const [valorDolar, guardarDolar] = useState(0);

  const consultarAPI = async () => {
    const api = await fetch('https://mindicador.cl/api/dolar/');
    const frase = await api.json();
    let dolar = frase['serie'][0]['valor'];
    guardarDolar(dolar);
  }

  //cargar una vez
  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <Form valorDolar={valorDolar} />
  );
}

export default App;
