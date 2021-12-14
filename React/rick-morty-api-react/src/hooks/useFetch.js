import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const useFetch = (name) => {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCharacter(name);
    }, [name]);

    const fetchCharacter = async (name) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${name}&status=alive`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Ooops!",
                    text: `${name} does not exist`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.results]);
            setCharacter([...data.results]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Server Error`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [characters, loading];
};