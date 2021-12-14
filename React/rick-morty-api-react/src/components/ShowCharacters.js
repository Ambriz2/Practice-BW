

import { useFetch } from "../hooks/useFetch";
import Characters from "./Characters";
import Loading from "./Loading";

const ShowCharacters = ({ name }) => {
    const [characters, loading] = useFetch(name);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="row mt-2">
            {characters.map((item) => (
                <Characters key={item.id} character={item} />
            ))}
        </div>
    );
};

export default ShowCharacters;
    