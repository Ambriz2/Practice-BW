
import Swal from "sweetalert2"
import { useFormHook } from "../hooks/useFormHook"


const Forms = ({ setName }) => {
    const [inputs, handleChange, reset] = useFormHook({
        name: "",
    });
    const { name } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            return Swal.fire({
                title: "Oops!",
                text: "Type a name",
                icon: "question",
            });
        }

        setName(name.trim().toLowerCase());

        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Enter a character"
                className="form-control mt-2"
                value={name}
                onChange={handleChange}
                />
            <button className="btn btn-success mt-2" type="submit"> Search </button>
        </form>
    );
};

export default Forms;