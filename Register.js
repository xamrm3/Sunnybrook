import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const emailRe = new RegExp(/^([\w\d!#$%\^&*+\-=?_`{|}~]+\.)*[\w\d]+@[\w]+\.[\w]+$/, "gm");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const trimOnBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    inputs[name] = value.trim();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //check if inputs have all the required information and there is no empty input
    if (Object.keys(inputs).length !== 3 || Object.values(inputs).some((x) => x === "")) {
      alert("Please fill in all the fields.")
      return;
    }

    //check if email is valid
    if (!emailRe.test(inputs.Email)) {
      alert("Please enter a valid email.")
      return;
    }
    
    console.log(inputs);
    navigate("/Form");
  };

  return (
     
    <div className="Form">

      <header>
        <h1>Register for Pharmacogenetics Testing with Pgxtools</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="Name" value={inputs.Name || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/>
        
        <label>Email: </label>
        <input type="text" name="Email" value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/>
        
        <label>Institution: </label>
        <input type="text" name="Inst" value={inputs.Inst || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/>

        <br />

        <input type="submit" />
      </form>
    </div>

  )
}

export default Register;