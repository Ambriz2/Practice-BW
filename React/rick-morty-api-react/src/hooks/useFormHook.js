import { useState } from "react"

export const useFormHook = (initialState ={}) => {
    
    const [input, setInputs] = useState(initialState)

    const handleChange = (e) => {
        const{name, value, checked, type, } = e.target;
        
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initialState)
    }
    
    return [input, handleChange, reset] 
}

