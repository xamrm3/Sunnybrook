import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Register() {

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
    navigate("/");
  };

  return (
     
    <div className="Register">

      <header>
        <h1>Register for Pharmacogenetics Testing with Pgxtools</h1>
      </header>

      <div className="registerCentre">
        <form onSubmit={handleSubmit}>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="fName">First Name</InputLabel>
            <OutlinedInput id="fName" type="text" name="FirstName" className="registerText" label="First Name" value={inputs.FirstName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>
          
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="lName">Last Name</InputLabel>
            <OutlinedInput id="lName" type="text" name="LastName" className="registerText" label="Last Name" value={inputs.LastName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" type="text" name="Email" className="registerText" label="Email" value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="pass">Password</InputLabel>
            <OutlinedInput id="pass" type="password" name="Pass" className="registerText" label="Password" value={inputs.Pass || ""} onChange={handleChange} 
              endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {inputs.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="confirmPass">Confirm Password</InputLabel>
            <OutlinedInput id="confirmPass" type="password" name="confirmPass" className="registerText" label="Confirm Password" value={inputs.confirmPass || ""} onChange={handleChange} 
              endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {inputs.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }/>
          </FormControl>

          

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="address">Institution Address</InputLabel>
            <OutlinedInput id="address" type="text" name="InstAddr" className="registerText" label="Institution Address" value={inputs.InstAddr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="addressInfo">Additional Address Information</InputLabel>
            <OutlinedInput id="addressInfo" type="text" name="addrInfo" className="registerText" label="Additional Address Information" multiline maxRows={4} value={inputs.addrInfo || ""} onChange={handleChange} onBlur={trimOnBlur}/>
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