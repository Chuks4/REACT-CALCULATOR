import { evaluate } from "mathjs";
import { useState } from "react";

const useExpressions = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [historys, setHistory] = useState([])

        
   const handleClick = (e) => {
        setValue(value + e.target.value)
    }

    const evaluateResult = () => {
        try {
            const result = evaluate(value)
            setResult(result);
            setHistory([...historys, { value: value, result: result}])
            console.log(historys)
        } catch (error) {
            setValue('Error')
            console.log(error.message)
        }    
    }

    const clearCal = () => {
        try {
            setResult('')
            setValue('')
        } catch (error) {
            setValue('Error')
        }
        
    }

    const loadFromHistory = (history) => {
        try {
            setValue(history.value)
            setResult(history.result)
            console.log('Loaded')
        } catch (error) {
            setValue('Cannot Load from history')
        }
        
    }

    const removeDigit = () => {
        try {
            setValue(value.slice(0, -1))
        } catch (error) {
            setValue('Cannot remove digit')
        }
    }

    return {value, result, historys, handleClick, evaluateResult, clearCal, loadFromHistory, removeDigit}
}

export default useExpressions