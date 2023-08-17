import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const emailRe = new RegExp(/^[A-Za-z0-9.]+@[A-Za-z]+.[A-Za-z]+$/, "gm");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(inputs).length !== 3 || Object.values(inputs).indexOf("") > -1) {
            alert("Please fill in all the fields.")
            return;
        }
        if (!emailRe.test(inputs.Email)) {
            alert("Please enter a valid email.")
            return;
        }
        
        // check if inputs are valid
        console.log(inputs);
        navigate("/Form");
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    return (
       
        <div className="Form">
            <form onSubmit={ handleSubmit }>
                <label>Name: </label>
                <input type="text" name="Name" value={inputs.Name || ""} onChange={handleChange} /> <br/>
                
                <label>Email: </label>
                <input type="text" name="Email" value={inputs.Email || ""} onChange={handleChange} /> <br/>
                
                <label>Institution: </label>
                <input type="text" name="Inst" value={inputs.Inst || ""} onChange={handleChange} /> <br/>

                <br />

                <input type="submit" />
            </form>
        </div>

    )
}

export default Register;