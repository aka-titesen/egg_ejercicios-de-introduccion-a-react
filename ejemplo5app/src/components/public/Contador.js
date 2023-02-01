import React, { useState } from 'react';

function Contador() {
  // Crea un state para el contador inicializado en 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho {count} clicks</p>
      <button onClick={() => setCount(count + 1)}>
        Haz click
      </button>
    </div>
  );
}

export default Contador;
