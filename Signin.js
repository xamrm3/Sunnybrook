import './Signin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";



function Signin() {

  const [inputs, setInputs] = useState({showPassword: false});
  const navigate = useNavigate();
  const emailRe = new RegExp(/^([\w\d!#$%\^&*+\-=?_`{|}~]+\.)*[\w\d]+@[\w]+\.[\w]+$/, "gm");

  const handleClickShowPassword = () => {
    setInputs({ ...inputs, showPassword: !inputs.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
     
    <div className="Signin">

      <header>
        <h1>Sign into Pharmacogenetics Testing with Pgxtools</h1>
      </header>

      <div className="centre">
        <form onSubmit={handleSubmit}>   
          
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" type="text" name="Email" className="signinText" label="Email" value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput id="password" type={inputs.showPassword ? "text" : "password"} name="Pass" className="signinText" label="Password" onChange={handleChange} value={inputs.Pass || ""} 
              endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {inputs.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }/>
          </FormControl>

          <br/><br/>

          <Button type="submit" value="Sign In" variant="contained" className="signinButton">Sign In</Button>
        </form>

        <h4>Don't have an account?</h4>
        <Button variant="contained" className="signinButton" onClick={() => navigate("/Register")}>Register</Button>
      </div>
    </div>
  )
}

export default Signin;