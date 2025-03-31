
// import React from "react";
import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
const [count, setCount] = useState(0);
 const handleClick = () => {
    setCount(count + 1);

  
  return (
        {/* Do not remove the main div */}
 <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Button Counter</h1>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
</div>
  )
}

export default App
