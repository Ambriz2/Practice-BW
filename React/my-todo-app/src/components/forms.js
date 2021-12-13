import Swal from 'sweetalert2';
import { useFormHook } from "../hooks/useFormHook";

const Forms = ({addTodo}) => {

    const initialState = {
        formName: '',
        description: '',
        priorityCheck: false,
        state: 'Pending',
    }

   // const [todo, setTodo] = useState(initialState); moved to myFormHoooks.js  

   const [input,handleChange, reset] = useFormHook(initialState);
    
    const {formName , description, priorityCheck, state} = input;
   
    const handleSubmit = e => {
        e.preventDefault()
        if(!formName.trim()){
            e.target[0].focus();
                Swal.fire({
                    title: 'Invalid input!',
                    text: 'Please enter a task to complete',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
                return;
            } 
            if(!description.trim()){
                  e.target[1].focus()
                  Swal.fire({
                      title: 'Invalid input!',
                      text: 'Please enter how can you accomplish it',
                      icon: 'error',
                      confirmButtonText: 'Close'
                    })
                  return; 
            }   
                Swal.fire({
                    title: 'Success!',
                    text: 'A to do has been added',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  });
                
                
        addTodo({
            formName: formName,
            description: description,
            state: state === "Pending" ? false : true,
            priorityCheck: priorityCheck,
            id: Date.now()
        });
        //console.log(todo)
        reset();
    };
    
  
    return (
        <>
            <form className="p-3" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mb-2 " 
                    name="formName" 
                    placeholder="Enter a task to complete"
                    value={formName}
                    onChange={handleChange}
                />
                
                <textarea
                    className="form-control mb-2"
                    type="text"
                    name="description"
                    placeholder="How will you acomplish it"
                    value={description}
                    onChange={handleChange}
                />
                <select 
                    name="state" 
                    className="form-control mb-2" 
                    value={state}  
                    onChange={handleChange}
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <div className="form-check d-flex justify-content-start">
                    <input 
                        className="form-check-input" 
                        type="checkbox"
                        name="priorityCheck" 
                        checked={priorityCheck}
                        id="flexCheckDefault"
                        onChange={handleChange}
                    />
                    <label 
                        className="form-check-label mx-2" 
                        htmlFor="flexCheckDefault"
                    >
                        Priority
                    </label>
                </div>
                    <button type="submit" className="btn-lg btn-primary mt-2">Add to list</button>
            </form>
        </>
    )
}

export default Forms;
