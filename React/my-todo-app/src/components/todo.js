const Todo = ({todo, deleteTodo, editTodo}) => {

    const {id, formName , description, priorityCheck, state} = todo
    
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{formName+" "} ({state ? "Completed" : "Pending"})
                     </div>
                    <p>{description}</p>
                    <div>
                        <button className="btn btn-danger me-2" onClick={() => deleteTodo(id)}>Delete</button>
                        <button className="btn btn-warning"onClick={() => editTodo(id)}>Edit</button>
                    </div>
                </div>
                <div>
                <span className="badge bg-primary rounded-pill">
                    {priorityCheck && "Priority"}
                </span>
                </div>
            </li> 
        </>    
    )
}

export default Todo;
