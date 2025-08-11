import css from './Description.module.css';


function Description({styleClass}){
    return (
    <div>
        
        <h1 className={`${css.title} ${styleClass}`}>Sip Happens Café</h1>
        <p  className={`${css.desc} ${styleClass}`}>
            Please leave your feedback about our service by selecting one of the options below.
        </p> 
    </div>  
    )
}

export default Description;