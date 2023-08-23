import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OutlinedInput, InputLabel, FormControl, Button, IconButton, InputAdornment, Alert } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordChecklist from "react-password-checklist"

function Register() {

  const [inputs, setInputs] = useState({Pass: "", confirmPass: ""});
  const [showInputs, setShowInputs] = useState({showPassword: false, showConfirmPassword: false});

  const navigate = useNavigate();
  const emailRe = new RegExp(/^([\w\d!#$%\^&*+\-=?_`{|}~]+\.)*[\w\d]+@[\w]+\.[\w]+$/, "gm");

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

  const trimOnBlur = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    inputs[name] = value.trim();
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //check if inputs have all the required information and there is no empty input
    if (Object.keys(inputs).length !== 7 || Object.values(inputs).some((x) => x === "")) {
      alert("Please fill in all the fields.")
      return;
    }

    //check if email is valid
    if (!emailRe.test(inputs.Email)) {
      alert("Please enter a valid email.")
      return;
    }

    if (inputs.Pass !== inputs.confirmPass) {
      alert("Passwords do not match.")
      return;
    }

    if (!/[A-Z]/.test(inputs.Pass) || inputs.Pass.length !== 8){
      alert("Please check that all password requirements are met")
      return;
    }
    
    delete inputs.confirmPass;
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
              <OutlinedInput id="fName" type="text" name="FirstName" className="registerText" label="First Name" value={inputs.FirstName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="lName">Last Name</InputLabel>
              <OutlinedInput id="lName" type="text" name="LastName" className="registerText" label="Last Name" value={inputs.LastName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput id="email" type="text" name="Email" className="registerTextSingle" label="Email" value={inputs.Email || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="pass">Password</InputLabel>
              <OutlinedInput id="pass" type={showInputs.showPassword ? "text" : "password"} name="Pass" className="registerText" label="Password" value={inputs.Pass || ""} onChange={handleChange} 
                endAdornment={
                  <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {showInputs.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
                }/>
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="confirmPass">Confirm Password</InputLabel>
              <OutlinedInput id="confirmPass" type={showInputs.showConfirmPassword ? "text" : "password"} name="confirmPass" className="registerText" label="Confirm Password" value={inputs.confirmPass || ""} onChange={handleChange} 
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
                  value={inputs.Pass}
                  valueAgain={inputs.confirmPass}
              />
            </div>
          </div>

          <h3 className="registerLeftText">Institution Details</h3>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="address">Address</InputLabel>
              <OutlinedInput id="address" type="text" name="Addr" className="registerTextSingle" label="Address" value={inputs.Addr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div className="registerLeftTextSingle">
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="details">Additional Details</InputLabel>
              <OutlinedInput id="details" type="text" name="Details" className="registerTextSingle" label="Additional Details" multiline maxRows={3} value={inputs.Details || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>


          {/* <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="address">Address</InputLabel>
              <OutlinedInput id="address" type="text" name="Addr" className="registerText" label="Address" value={inputs.Addr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="city">City</InputLabel>
              <OutlinedInput id="city" type="text" name="City" className="registerText" label="City" value={inputs.City || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="country">Country</InputLabel>
              <OutlinedInput id="country" type="text" name="Country" className="registerText" label="Country" value={inputs.Country || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="postal">Postal Code</InputLabel>
              <OutlinedInput id="postal" type="text" name="pCode" className="registerText" label="Postal Code" value={inputs.pCode || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div> */}

          <br/>

          <Button type="submit" value="Register" variant="contained" className="registerButton">Register</Button>
        </form>

        <h4>Have an account?</h4>
        <Button variant="contained" className="registerButton" onClick={() => navigate("/")}>Sign In</Button>
      </div>
    </div>
  )
}

export default Register;