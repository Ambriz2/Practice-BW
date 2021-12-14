
import { useState } from "react";
import ShowCharacters from "./components/ShowCharacters";
import Forms from "./components/Forms"

const App = () => {
    
    const[name, setName] = useState('');

    return (
        <div className="container bg-light">
            <h1 className="text-center">Rick and Morty API</h1>
            <Forms setName={setName}/>
            <button className="btn btn-secondary mt-2" onClick={()=> setName("")}>Reset</button>
            <ShowCharacters name={name} />
        </div>
    )
}

export default App;
