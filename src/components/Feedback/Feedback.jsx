import css from './Feedback.module.css';
function Feedback({feedback, positiveFeedback, styleClass}){

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    
    if(totalFeedback === 0){
        return(
            <div>
                <p className={css.content}>No feedback yet</p>
            </div>
        )
    }
    return (
        <div>
            <p className={css.content}>Good: {feedback.good}</p>
            <p className={css.content}>Neutral: {feedback.neutral}</p>
            <p className={css.content}>Bad: {feedback.bad}</p>
            <p className={css.content}>Total : {totalFeedback}</p>
            <p className={`${styleClass} ${css.content}`}>Positive : % {positiveFeedback}</p>
        </div>
    )
}

export default Feedback;