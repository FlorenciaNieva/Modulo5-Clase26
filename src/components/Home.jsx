import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useCount from '../hooks/useCount';

export default function Home() {
  // const [count, setCount] = useState(0);
  // function aumentar() {
  //   setCount(count + 1);
  // }

  const { count, aumentar, disminuir } = useCount();

  return (
    <>
      <h1>Componente Home</h1>
      <h2>Count: {count} </h2>
      <div>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
      <Link to="/count">Ir a count</Link>
    </>
  )
}
