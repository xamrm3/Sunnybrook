import './Form.css';
import { useState } from 'react';

function Form() {
  
  const [inputs, setInputs] = useState({})

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

    //check if inputs have all the required information and there is no empty input
    if(Object.keys(inputs).length !== 12 || Object.values(inputs).some((x) => x === "")){
      alert("Please fill in all the fields.")
      return;
    }

    console.log(inputs)
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

      <form onSubmit={handleSubmit}>
        
        <label>Sample ID: </label>
        <input type="text" name="ID" value={inputs.ID || ""} onChange={handleChange} onBlur={trimOnBlur}/>

        <div value={inputs.Report}> 
          <label>Report Type: </label> <br/>
          <input id ="RT1" type="radio" value="Variants" name="Report" onChange={handleChange} />
          <label htmlFor="RT1">Variants</label> <br/>

          <input id ="RT2" type="radio" value="ClinInterp" name="Report" onChange={handleChange} /> 
          <label htmlFor="RT2">Variants and Clinical Interpretation</label> <br/>

        </div>

        <div value={inputs.Sample}> 
          <label>Sample Type: </label> <br/>
          <input id ="ST1" type="radio" value="BAM" name="Sample" onChange={handleChange} />
          <label htmlFor="ST1">BAM</label> <br/>

          <input id="ST2"type="radio" value="VCF" name="Sample" onChange={handleChange} /> 
          <label htmlFor="ST2">VCF</label> <br/>
        </div>

        <div>
          <label> Method: </label>
            <input type="text" name="Method" list="methods" placeholder="Other" onChange={handleChange} onBlur={trimOnBlur}/>
            <datalist id="methods" name="Method">
              <option value="Illumina Short Read"></option>
              <option value="Illumina Long Read"></option>
              <option value="Pacbio Short Read"></option>
              <option value="Pacbio Long Read"></option>
            </datalist>
        </div>
        
        <div>
          <label> Pgx gene panel: </label>
            <select name="Panel" value={inputs.Panel} onChange={handleChange}>
              <option value=""></option>
              <option value="COMT">COMT</option>
              <option value="ABCD">ABCD</option>
            </select>
        </div>

        <div>
          <label> Drug: </label>
            <select name="Drug" value={inputs.Drug} onChange={handleChange}>
              <option value=""></option>
              <option value="All drugs">All drugs</option>
              <option value="Some drugs">Some drugs</option>
            </select>
        </div>
        
        <div value={inputs.Variant}> 
          <label>Variant Type: </label> <br/>
          <input id="VT1" type="radio" value="Actionable" name="Variant" onChange={handleChange} />
          <label htmlFor="VT1">Actionable</label> <br/>

          <input id="VT2"type="radio" value="All" name="Variant"  onChange={handleChange} />
          <label htmlFor="VT2">All Relevant</label> <br/>
        </div>

        <div value={inputs.Reference}> 
          <label>Reference: </label> <br/>
          <input id="Rf1" type="radio" value="GRCh38" name="Reference" checked={true} onChange={handleChange} />
          <label htmlFor="Rf1">GRCh38</label>
        </div>
        
        <div>
          <label> Input path: </label>
            <select name="Path" value={inputs.Path} onChange={handleChange}>
              <option value=""></option>
              <option value="Path 1">Path 1</option>
              <option value="Path 2">Path 2</option>
            </select>
        </div>

        <div>
          <label>Operator Name: </label>
          <input type="text" name="OpName" value={inputs.OpName || ""} onChange={handleChange} onBlur={trimOnBlur}/>
        </div>

        <div>
          <label>Operator Institution: </label>
          <input type="text" name="OpInst" value={inputs.OpInst || ""} onChange={handleChange} onBlur={trimOnBlur}/>
        </div>

        <div>
          <label>Institution Address: </label>
          <input type="text" name="InstAddr" value={inputs.InstAddr || ""} onChange={handleChange} onBlur={trimOnBlur}/>
        </div>
        
        <br/>
        
        <input type="submit"/>
      </form>
    </div>
  );
}

export default Form;