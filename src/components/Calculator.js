import useExpressions from "./Expression";


const Calculator = () => {
    const {value, result, historys, handleClick, evaluateResult, clearCal, loadFromHistory, removeDigit} = useExpressions()

    return ( 
        <div className="cal-container">
        <form>
            <div className="calculator">
            <div className="date"></div>
            <div className="screen">
                <input type="text" value={value}/>
                <div className="result">{ result }</div>
            </div>
            <div className="buttons">
                <input type="button" value='C' onClick={(() => clearCal())} />

                <input type="button" value='DEL' onClick={() => removeDigit()} />
                <input type="button" value='%' onClick={(e) => handleClick(e)}/>
                <input type="button" value='/' onClick={(e) => handleClick(e)}/>
            </div>

            <div className="buttons">
                <input type="button" value='7' onClick={(e) => handleClick(e)}/>
                <input type="button" value='8' onClick={(e) => handleClick(e)}/>
                <input type="button" value='9' onClick={(e) => handleClick(e)}/>
                <input type="button" value='*' onClick={(e) => handleClick(e)}/>
            </div>

            <div className="buttons">
                <input type="button" value='4' onClick={(e) => handleClick(e)}/>
                <input type="button" value='5' onClick={(e) => handleClick(e)}/>
                <input type="button" value='6' onClick={(e) => handleClick(e)}/>
                <input type="button" value='-' onClick={(e) => handleClick(e)}/>
            </div>

            <div className="buttons">
                <input type="button" value='1' onClick={(e) => handleClick(e)}/>
                <input type="button" value='2' onClick={(e) => handleClick(e)}/>
                <input type="button" value='3' onClick={(e) => handleClick(e)}/>
                <input type="button" value='+' onClick={(e) => handleClick(e)}/>
            </div>

            <div className="buttons">
                <input type="button" value='0' onClick={(e) => handleClick(e)}/>
                <input type="button" value='.' onClick={(e) => handleClick(e)}/>
                <input type="button" value='=' className="equals" onClick={() => evaluateResult()}/>
            </div>
        </div>
        </form>
        <div className="history-container">
            <div className="history">
            <h3>History</h3>
            <ul>
                {historys.map((history, i) => (
                    <li key={i} onClick={(history) => loadFromHistory(history)}>{history.value} = {history.result}</li>
                ))}
            </ul>
            </div>
        </div>
        
        </div>
        
     );
}
 
export default Calculator;