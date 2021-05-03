import { useEffect, useState, useRef } from 'react';

function useCountdown(USER_COUNT = 30) {
  const countInput = useRef(null);
  const [userInput, setUserInput] = useState(USER_COUNT);
  const [isStarted, setIsStarted] = useState(false);
  const startCountdown = () => {
    setIsStarted(true);
  };
  useEffect(() => {
    let countdown = null;
    if (isStarted && userInput > 0) {
      countdown = setTimeout(() => {
        setUserInput((prevT) => prevT - 1);
      }, 1000);
    } else if (userInput === 0) {
      setIsStarted(false);
    }
    return () => clearTimeout(countdown);
  }, [isStarted, userInput]);

  const resetCountdown = () => {
    setUserInput(USER_COUNT);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setUserInput(value);
  };
  const handleStop = () => {
    setIsStarted(false);
  };
  return {
    handleChange,
    handleStop,
    startCountdown,
    resetCountdown,
    isStarted,
    userInput,
    countInput,
  };
}

export default useCountdown;
