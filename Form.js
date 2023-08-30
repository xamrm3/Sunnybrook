import './Form.css';
import { useState } from 'react';
import { OutlinedInput, InputLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, FormHelperText } from "@mui/material";

function Form() {
  
  const [inputs, setInputs] = useState({ID: "", Report: "", Sample: "", Method: "", otherMethod: "", Panel: "", 
    Drug: "", Variant: "", Reference: "", Path: "", OpName: "", OpInst: "", InstAddr: ""})

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

    // only possible input for Reference
    inputs.Reference = "GRCh38"

    // if Other Method needs to be filled in, check if there are any empty fields
    if (inputs.Method === "Other" && Object.values(inputs).some((x) => x === "")) {
      alert("Please fill in all the fields.")
      return;
    }

    // temporarily change Other Method so other inputs can be checked for empty
    const otherMethodCopy = inputs.otherMethod;
    inputs.otherMethod = " ";

    // check if all inputs are filled in
    if (Object.values(inputs).some((x) => x === "")){
      inputs.otherMethod = otherMethodCopy;
      alert("Please fill in all the fields.")
      return;
    }

    // update Method if Other Method is selected
    if (inputs.Method === "Other"){
      inputs.Method = otherMethodCopy;
    }
    delete inputs.otherMethod;

  }

  return (
    <div className="Form">

      <header>
        <h1>Pharmacogenetics Testing with Pgxtools</h1>
        <p>The Pgx tools is a Bioformatics pipeline for Pharmacogenetics testing with cloud-native technologies. The pipeline applies a predefined set of genetic variants 
          with clinical significance (actionable / potential) to the genetic / genomic test result of a patient. A report is generated to predict drug response and to 
          provide advice on the patient's personalized drug treatement plan.</p>
        <p>A user manual <a href="">Pgxtools.Manual.md</a> can be found right next to this pipeline (Pgxtools.ipymb).</p>
      </header>

      <h2>Pharmacogenetics Testing</h2>

      <div className="formInputs">
        <form onSubmit={handleSubmit}>
          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }} variant="outlined">
              <InputLabel htmlFor="SID">Sample ID</InputLabel>
              <OutlinedInput id="SID" type="text" name="ID" label="Sample ID" required value={inputs.ID || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="Report">Report Type:</FormLabel>
              <RadioGroup name="Report" value={inputs.Report || ""} onChange={handleChange}>
                <FormControlLabel value="Variants" control={<Radio required={true} />} label="Variants" />
                <FormControlLabel value="ClinInterp" control={<Radio required={true} />} label="Variants and Clinical Interpretation" />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="Sample">Report Type:</FormLabel>
              <RadioGroup name="Sample" value={inputs.Sample || ""} onChange={handleChange}>
                <FormControlLabel value="BAM" control={<Radio required={true} />} label="BAM" />
                <FormControlLabel value="VCF" control={<Radio required={true} />} label="VCF" />
              </RadioGroup>
            </FormControl>
          </div>
         
          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }}>
              <InputLabel id="Method">Method</InputLabel>
              <Select labelId="Method" value={inputs.Method || ""} name="Method" autowidth="true" required onChange={handleChange} label="Method">
                <MenuItem value="Illumina Short Read">Illumina Short Read</MenuItem>
                <MenuItem value="Illumina Long Read">Illumina Long Read</MenuItem>
                <MenuItem value="Pacbio Short Read">Pacbio Short Read</MenuItem>
                <MenuItem value="Pacbio Long Read">Pacbio Long Read</MenuItem>
                <MenuItem value="Other">Other (Type Below)</MenuItem>
              </Select>
            </FormControl>
          </div>
          
          <div>
          <FormControl sx={{ mt: 2, width: 65/100 }} variant="outlined">
            <InputLabel htmlFor="otherMethod">Other Method</InputLabel>
            <OutlinedInput id="otherMethod" type="text" name="otherMethod" label="Other Method" disabled={inputs.Method === "Other" ? false : true} required={inputs.Method === "Other" ? true : false} value={inputs.otherMethod || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            <FormHelperText>If Other is selected for the above Method, please enter the method here</FormHelperText>
          </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }}>
              <InputLabel id="PGP">Pgx Gene Panel</InputLabel>
              <Select labelId="PGP" value={inputs.Panel || ""} name="Panel" autowidth="true" required onChange={handleChange} label="Pgx Gene Panel">
                <MenuItem value="COMT">COMT</MenuItem>
                <MenuItem value="Other Gene Panel">Other Gene Panel</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }}>
              <InputLabel id="Drug">Drug</InputLabel>
              <Select labelId="Drug" value={inputs.Drug || ""} name="Drug" autowidth="true" required onChange={handleChange} label="Drug">
                <MenuItem value="All Drugs">All Drugs</MenuItem>
                <MenuItem value="Other Drugs">Other Drugs</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="Variant">VariantType:</FormLabel>
              <RadioGroup name="Variant" value={inputs.Variant || ""} onChange={handleChange}>
                <FormControlLabel value="Actionable" control={<Radio required={true} />} label="Actionable" />
                <FormControlLabel value="All" control={<Radio required={true} />} label="All Relevant" />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2 }}>
              <FormLabel id="Reference">Reference:</FormLabel>
              <RadioGroup name="Reference" value={inputs.Reference || ""} onChange={handleChange}>
                <FormControlLabel value="GRCh38" control={<Radio required={true} />} checked={true} label="GRCh38" />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }}>
              <InputLabel id="InputPath">Input Path</InputLabel>
              <Select labelId="InputPath" value={inputs.Path || ""} name="Path" required onChange={handleChange} label="Input Path">
                <MenuItem value="Path 1">Path 1</MenuItem>
                <MenuItem value="Path 2">Path 2</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }} variant="outlined">
              <InputLabel htmlFor="ON">Operator Name</InputLabel>
              <OutlinedInput id="ON" type="text" name="OpName" label="Operator Name" required value={inputs.OpName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{mt: 2, width: 65/100 }} variant="outlined">
              <InputLabel htmlFor="OI">Operator Institution</InputLabel>
              <OutlinedInput id="OI" type="text" name="OpInst" label="Operator Institution" required value={inputs.OpInst || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>

          <div>
            <FormControl sx={{ mt: 2, width: 65/100 }} variant="outlined">
              <InputLabel htmlFor="IA">Institution Address</InputLabel>
              <OutlinedInput id="IA" type="text" name="InstAddr" label="Institution Address" required value={inputs.InstAddr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
            </FormControl>
          </div>
          
          <br/>
          
          <div><input type="submit" value="Submit" className="formButton"/></div>
        </form>
      </div>
    </div>
  );
}

export default Form;