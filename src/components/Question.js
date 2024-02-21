import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if time remaining is greater than 0
      if (timeRemaining > 0) {
        // Decrement the time by 1
        setTimeRemaining(timeRemaining - 1);
      } else {
        // Reset time remaining to 10 for the next question 
        setTimeRemaining(10)
        onAnswered(false)
      }
    }, 1000)

    // Cleanup function to clear the timeout 
    return () => clearTimeout(timer)
  }, [timeRemaining, onAnswered])


  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }




  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
