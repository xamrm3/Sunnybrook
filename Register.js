import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

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
    navigate("/");
  };

  return (
     
    <div className="Register">

      <header>
        <h1>Register for Pharmacogenetics Testing with Pgxtools</h1>
      </header>

      <div className="centre">
        <form onSubmit={handleSubmit}>
          {/* <div className="registerLabel"><label>Name: </label> <br/></div>
          <Input type="text" name="Name" className="registerText" value={inputs.Name || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/> 
          
          

          <div className="registerLabel"><label>Email: </label> <br/></div>
          <Input type="text" name="Email" className="registerText" value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/>
          
          <div className="registerLabel"><label>Institution: </label> <br/></div> 
          <Input type="text" name="Inst" className="registerText" value={inputs.Inst || ""} onChange={handleChange} onBlur={trimOnBlur}/> <br/> */}

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput id="name" type="text" name="Name" className="registerText" label="Name" value={inputs.Name || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <br/><br/>

          <Button type="submit" value="Register" variant="contained" className="registerButton">Register</Button>
        </form>

        <h4>Have an account?</h4>
        <Button variant="contained" className="registerButton" onClick={() => navigate("/")}>Sign In</Button>
      </div>
    </div>
  )
}

export default Register;