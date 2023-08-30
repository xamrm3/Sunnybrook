import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OutlinedInput, InputLabel, FormControl, IconButton, InputAdornment, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordChecklist from "react-password-checklist";

function Register() {

  const [inputs, setInputs] = useState({FirstName: "", LastName: "", Email: "", Password: "", Addr: "", Details: ""});
  const [confirmPassword, setConfirmPass] = useState("");
  const [showInputs, setShowInputs] = useState({showPassword: false, showConfirmPassword: false});

  const navigate = useNavigate();
  
  const handleClickShowPassword = () => {
    setShowInputs({ ...showInputs, showPassword: !showInputs.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setShowInputs({ ...showInputs, showConfirmPassword: !showInputs.showConfirmPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleConfirmPassChange = (event) => {
    const value = event.target.value;
    setConfirmPass(value);
  }

  const trimOnBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    inputs[name] = value.trim();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //check if inputs have all the required information and there is no empty input
    if (Object.values(inputs).some((x) => x === "")) {
      alert("Please fill in all the fields.");
      return;
    }

    if (inputs.Password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!/[A-Z]/.test(inputs.Password) || inputs.Password.length < 8){
      alert("Please check that all password requirements are met");
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

          <h3 className="registerLeftText">User Information</h3>
          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="fName">First Name</InputLabel>
              <OutlinedInput id="fName" type="text" name="FirstName" label="First Name" required value={inputs.FirstName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="lName">Last Name</InputLabel>
              <OutlinedInput id="lName" type="text" name="LastName" label="Last Name" required value={inputs.LastName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" type="email">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" type="email" name="Email" className="registerTextSingle" label="Email" required value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput id="password" type={showInputs.showPassword ? "text" : "password"} name="Password" label="Password" required value={inputs.Password || ""} onChange={handleChange} 
                endAdornment={
                  <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {showInputs.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
                }/>
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <OutlinedInput id="confirmPassword" type={showInputs.showConfirmPassword ? "text" : "password"} name="confirmPassword" label="Confirm Password" required value={confirmPassword} onChange={handleConfirmPassChange} 
                endAdornment={
                  <InputAdornment position="end">
                      <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownPassword}>
                        {showInputs.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
                }/>
            </FormControl>
            <div className="registerLeftText">
              <PasswordChecklist
                  rules={["minLength", "capital", "match"]}
                  minLength={8}
                  value={inputs.Password}
                  valueAgain={confirmPassword}
              />
            </div>
          </div>

          <h3 className="registerLeftText">Institution Details</h3>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="address">Address</InputLabel>
              <OutlinedInput id="address" type="text" name="Addr" className="registerTextSingle" label="Address" required value={inputs.Addr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="details">Additional Details</InputLabel>
              <OutlinedInput id="details" type="text" name="Details" className="registerTextSingle" label="Additional Details" multiline maxRows={3} required value={inputs.Details || ""} onChange={handleChange} onBlur={trimOnBlur}/>
              <FormHelperText className="registerTextSingle">Enter details such as Country, City, Postal/Zip Code, etc.</FormHelperText>
            </FormControl>
          </div>

          <br/>
          
          <input type="submit" value="Create Account" className="registerButton"></input>
        </form>

        <h4>Have an account?</h4>
        <button value="SignIn" className="registerButton" onClick={() => navigate("/")}>Sign In</button>
      </div>
    </div>
  )
}

export default Register;