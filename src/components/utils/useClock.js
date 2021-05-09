import { useState, useEffect } from 'react';

function useClock() {
  const [clock, setClock] = useState({
    time: '00:00',
  });

  useEffect(() => {
    let intervalId = null;
    intervalId = setTimeout(() => {
      updateClock();
    }, 1000);
  }, [clock]);

  const updateClock = () => {
    setClock({
      time: new Date().toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
  };
  return {clock}
}
export default useClock