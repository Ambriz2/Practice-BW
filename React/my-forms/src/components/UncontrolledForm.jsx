import { useRef } from "react";

const UncontrolledForm = () => {
    const form = useRef(null);

    // Formulario no controlado
    const handleSubmit = (e) => {
        // console.log(formulario.current);
        e.preventDefault();

        const info = new FormData(form.current);

        // spread operator: permite a un elemento iterable ser expandido
        // copia cada uno de sus elementos
        console.log(...info.entries());

        // El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.
        const objetInfo = Object.fromEntries([...info.entries()]);

        // console.log(objetoDatos);
        if (!objetInfo.todoName.trim()) {
            return console.log("vacío");
        }

        console.log("pasó las validaciones!");
        form.current.reset();
    };

    return (
        <div className="container mt-2">
            <h1>Uncontrolled form</h1>
            <form onSubmit={handleSubmit} ref={form}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter a to do"
                    name="todoName"
                // defaultValue="Tarea #01"
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter a to do description"
                    name="todoDescription"
                // defaultValue="Descripción tarea #01"
                />
                <select
                    className="form-control mb-2"
                    name="todoState"
                // defaultValue="completado"
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    ADD
                </button>
            </form>
        </div>
    );
};

export default UncontrolledForm;

