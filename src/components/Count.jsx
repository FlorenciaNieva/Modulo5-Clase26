import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import useCount from '../hooks/useCount';

export default function Count() {
  // const [count, setCount] = useState(0);

  // function aumentar() {
  //   setCount(count + 1);
  // }

  const { count, aumentar, disminuir } = useCount();

  return (
    <>
      <h1>Componente Count</h1>
      <h2>Count: {count} </h2>
      <div>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={disminuir}>Disminuir</button>
      </div>
      <Link to="/">Ir al home</Link>
    </>
  )
}
