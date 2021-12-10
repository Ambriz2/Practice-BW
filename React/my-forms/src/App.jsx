import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./ControlledForm";

const App = () => {
    return (
        <div className="bg bg-secondary p-3">
         
         <h1>forms</h1>     
         <UncontrolledForm /> 
        <ControlledForm />
        </div>
    )
}

export default App;
