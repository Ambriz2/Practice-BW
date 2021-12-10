import {useEffect, useState } from "react";

const ControlledForm = () => {
    
    const [todo, setTodo] = useState({
        todoName: "",
        todoDescription: "",
        todoState: "pending",
        todoCheckbox: false,
    });
    
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(todo)
        
        const {todoDescription, todoName} = todo;
        if(!todoDescription.trim() || !todoName.trim()){
            setError(true)
            console.log("empty input")
            return;
        };
        setError(false)
    }
    const handleChange = e => {
        /*setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })*/
        const {name, value, checked, type } = e.target
        setTodo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
            //[e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value *moved to const destructured
        }))
    };
    const ShowError = () => (
        <div className="alert alert-danger">Invalid input, please enter your info</div>
        );
        
        const lStorage = useEffect(() => {
            localStorage.setItem(lStorage, JSON.stringify(todo))       
        }, [todo])
        return (
            <div className="container mt-2">
            <h2>Controlled Form</h2>
            {
                error && <ShowError />
            }
            <form onSubmit={handleSubmit}>
                <input 
                    name="todoName"
                    className="form-control mb-3"
                    type="text" 
                    placeholder="Enter a to do"
                    onChange = {handleChange}
                    value={todo.todoName}
                />
                <textarea
                    name="todoDescription"
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter a to to description"
                    onChange={handleChange}
                    value={todo.todoDescription}
                /> 
                <select name="todoState" className="form-control mb-2" defaultValue="First to do"
                    //onChange = {(e) => setTodo({...todo, todoState: e.target.value})}//can be used instead of handleChange
                    onChange = {handleChange}
                    >
                    <option value="pending">Pending</option>    
                    <option value="completed">Completed</option>     
                </select>   
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        checked={todo.todoCheckbox} 
                        name="todoCheckbox" 
                        id="flexCheckDefault"
                        onChange = {handleChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Check Box
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">Add To Do</button>
            </form>
        </div>
    )
}

export default ControlledForm;
