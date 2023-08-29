import './Signin.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OutlinedInput, InputLabel, FormControl, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Signin() {

  const [inputs, setInputs] = useState({Email: "", Password:""});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
    if (Object.values(inputs).some((x) => x === "")) {
      alert("Please fill in all the fields.")
      return;
    }
    
    //const emailRe = new RegExp(/^([\w\d!#$%\^&*+\-=?_`{|}~]+\.)*[\w\d]+@[\w]+\.[\w]+$/, "gm");
    //check if email is valid
    // if (!emailRe.test(inputs.Email)) {
    //   alert("Please enter a valid email.")
    //   return;
    // }
    
    console.log(inputs);
    navigate("/Form");
  };

  return (
     
    <div className="Signin">

      <header>
        <h1>Sign into Pharmacogenetics Testing with Pgxtools</h1>
      </header>

      <div className="signinCentre">
        <form onSubmit={handleSubmit}>   
          
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput id="email" type="email" name="Email" className="signinText" label="Email" required value={inputs.Email} onChange={handleChange} onBlur={trimOnBlur}/>
          </FormControl>

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput id="password" type={showPassword ? "text" : "password"} name="Password" className="signinText" label="Password" value={inputs.Password} onChange={handleChange}  
              endAdornment={
                <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
              }/>
          </FormControl>

          <br/><br/>

          <input type="submit" value="Sign In" className="signinButton"></input>
        </form>

        <h4>Don't have an account?</h4>
        <button value="Register" className="signinButton" onClick={() => navigate("/Register")}>Register</button>
      </div>
    </div>
  )
}

export default Signin;