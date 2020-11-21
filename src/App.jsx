import styles from './App.module.css';
import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [topPosition, setTopPosition] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);


  const handleKeypress = e => {

    switch (e.key.toLowerCase()) {
      case "w":
        setTopPosition(prev => prev - 20)
        break;
      case "s":
        setTopPosition(prev => prev + 20)
        break;
      case "a":
        setLeftPosition(prev => prev - 20)
        break;
      case "d":
        setLeftPosition(prev => prev + 20)
        break
    }
  }


  useEffect(() => {
    window.addEventListener('keypress', e => handleKeypress(e))



    return window.removeEventListener('keypress', handleKeypress)
  }, [])



  return (

    <div className={styles.app}>
      <div className={styles.gameArea}>
        <div style={{ top: `${topPosition}px`, left: `${leftPosition}px` }} className={styles.snake}></div>
      </div>
    </div>
  );
}

export default App;

