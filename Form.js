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

      <div className="inputs">
        <form onSubmit={handleSubmit}>
          
          <div id="SIDLabel"><label htmlFor="SID">Sample ID: </label></div>
          <div id="SIDInput"><input id="SID" type="text" name="ID" className="formRectInput" value={inputs.ID || ""} onChange={handleChange} onBlur={trimOnBlur}/></div>

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

            <input id="ST2" type="radio" value="VCF" name="Sample" onChange={handleChange} /> 
            <label htmlFor="ST2">VCF</label> <br/>
          </div>

          <div id="MethodLabel"><label>Method: </label></div>
          <div id="MethodInput">
            <input type="text" name="Method" list="methods" placeholder="Type or select a method" className="formRectInput" onChange={handleChange} onBlur={trimOnBlur}/>
          </div>
          <datalist id="methods" name="Method">
            <option value="Illumina Short Read"></option>
            <option value="Illumina Long Read"></option>
            <option value="Pacbio Short Read"></option>
            <option value="Pacbio Long Read"></option>
          </datalist>
          
          <div id="PGPLabel"><label>Pgx Gene Panel: </label></div>
          <div id="PGPInput">
            <select name="Panel" className="formRectInput" value={inputs.Panel} onChange={handleChange}>
              <option value=""></option>
              <option value="COMT">COMT</option>
              <option value="ABCD">ABCD</option>
            </select>
          </div>

          <div id="DrugLabel"><label>Drug: </label></div>
          <div id="DrugInput">
            <select name="Drug" className="formRectInput" value={inputs.Drug} onChange={handleChange}>
              <option value=""></option>
              <option value="All drugs">All drugs</option>
              <option value="Some drugs">Some drugs</option>
            </select>
          </div>
          
          <div value={inputs.Variant}> 
            <label>Variant Type: </label> <br/>
            <input id="VT1" type="radio" value="Actionable" name="Variant" onChange={handleChange} />
            <label htmlFor="VT1">Actionable</label> <br/>

            <input id="VT2" type="radio" value="All" name="Variant" onChange={handleChange} />
            <label htmlFor="VT2">All Relevant</label> <br/>
          </div>

          <div value={inputs.Reference}> 
            <label>Reference: </label> <br/>
            <input id="Rf1" type="radio" value="GRCh38" name="Reference" checked={true} onChange={handleChange} />
            <label htmlFor="Rf1">GRCh38</label>
          </div>
          
          <div id="IPLabel"><label>Input Path: </label></div>
          <div id="IPInput">
            <select name="Path" className="formRectInput" value={inputs.Path} onChange={handleChange}>
              <option value=""></option>
              <option value="Path 1">Path 1</option>
              <option value="Path 2">Path 2</option>
            </select>
          </div>

          <div id="ONLabel"><label>Operator Name: </label></div>
          <div id="ONInput"><input type="text" name="OpName" className="formRectInput" value={inputs.OpName || ""} onChange={handleChange} onBlur={trimOnBlur}/></div>

          <div id="OILabel"><label>Operator Institution: </label></div>
          <div id="OIInput"><input type="text" name="OpInst" className="formRectInput" value={inputs.OpInst || ""} onChange={handleChange} onBlur={trimOnBlur}/></div>

          <div id="IALabel"><label>Institution Address: </label></div>
          <div id="IAInput"><input type="text" name="InstAddr" className="formRectInput" value={inputs.InstAddr || ""} onChange={handleChange} onBlur={trimOnBlur}/></div>
          
          <br/>
          
          <input type="submit" value="Submit" className="formButton"/>
        </form>
      </div>
    </div>
  );
}

export default Form;