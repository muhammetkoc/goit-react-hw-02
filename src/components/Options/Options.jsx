import css from './Options.module.css';
function Options({onGood, onNeutral, onBad, onReset}){
    return (
        <div className={css.btnGroup}>
            <button className={`${css.btn} ${css.btnGood}`} onClick={onGood}>Good</button>
            <button className={`${css.btn} ${css.btnNeutral}`} onClick={onNeutral}>Neutral</button>
            <button className={`${css.btn} ${css.btnBad}`} onClick={onBad}>Bad</button>
            <button className={`${css.btn} ${css.btnReset}`} onClick={onReset}>Reset</button>
        </div>
    )
}

export default Options;