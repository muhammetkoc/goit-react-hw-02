import { useState, useEffect } from 'react';

import Description from "./components/Description/Description";
import Options     from "./components/Options/Options";
import Feedback    from './components/Feedback/Feedback';
function App() {
  const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("feedback");
        if (savedFeedback) {
            return JSON.parse(savedFeedback);
        }
        return { good: 0, neutral: 0, bad: 0 };
    });
    useEffect(() => {
        window.localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
  
  const handleGood = () => {
    
    setFeedback({
      ...feedback,
      good: feedback.good + 1 
    });
  };
  const handleNeutral = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1 
    });
  };
  const handleBad = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    });
  };
  const handleReset = () =>{
    setFeedback({
      good : 0,
      neutral : 0,
      bad : 0
    });
  }
  
  return (
    <>
      <Description />
      <Options 
        onGood = {handleGood}
        onNeutral = {handleNeutral}
        onBad = {handleBad}
        onReset = {handleReset}
      />
      <Feedback feedback = {feedback}/>
    </>
  )
}

export default App
