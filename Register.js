import './Register.css'
import { useState } from 'react';

function Register() {

    const [currentView, setCurrentView] = useState("view1");
    const [inputs, setInputs] = useState({});

    const handleSubmit = () => {
        if (Object.keys(inputs).length !== 3) {
            alert("Please fill in all the fields.")
            return;
        }
        
        // check if inputs are valid
        console.log(inputs);
        setCurrentView("view2");
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
    const ViewOne = () => (
        <div className="Form">
            <form onSubmit={ handleSubmit }>
                <label>Name: </label>
                <input type="text" name="Name" value={inputs.Name || ""} onChange={handleChange} /> <br/>
                
                <label>Email: </label>
                <input type="text" name="Email" value={inputs.Email || ""} onChange={handleChange} /> <br/>
                
                <label>Institution: </label>
                <input type="text" name="Inst" value={inputs.Inst || ""} onChange={handleChange} /> <br/>

                <input type="submit" />
            </form>
        </div>
    );
    
    const ViewTwo = () => (
        <div>
            <h1>View 2</h1>
        </div>
    );

    return (
        <div>
        {
          currentView === "view1" ? 
          <ViewOne onClick={page => setCurrentView(page)} /> : 
          <ViewTwo onClick={page => setCurrentView(page)} />
       }
      </div>
    )
}

export default Register;