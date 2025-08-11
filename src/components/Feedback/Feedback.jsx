function Feedback({feedback}){

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback  = Math.round((feedback.good / totalFeedback) * 100);
    if(totalFeedback === 0){
        return(
            <div>
                <p>No feedback yet</p>
            </div>
        )
    }
    return (
        <div>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total : {totalFeedback}</p>
            <p>Positive : % {positiveFeedback}</p>
        </div>
    )
}

export default Feedback;