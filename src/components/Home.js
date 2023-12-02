import React from 'react';
import { useState } from 'react';

function Home() {
    const [number, setNumber] = useState(0)

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={()=>setNumber(number+1)}>
        click me!
      </button>
      <p>This is the home page content.</p>
      <p> {number}</p>
    </div>
  );
}

export default Home;
