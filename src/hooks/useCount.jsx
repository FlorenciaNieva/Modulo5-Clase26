import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  function aumentar() {
    setCount(count + 1);
  }

  function disminuir() {
    setCount(count - 1);
  }

  return {
    count,
    aumentar,
    disminuir,
  }
}

export default useCount;