import './App.css';
import { useState } from 'react';

function App() {
  const [typeInputs, setInputs] = useState({})
  const [selectInputs, setSelectInputs] = useState({})
  const [buttonInputs, setButtonInputs] = useState({})

  const handleChangeType = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleChangeSelect = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSelectInputs(values => ({...values, [name]: value}))
  }

  const handleChangeButton = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setButtonInputs(values => ({...values, [name]: value}))
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();

    buttonInputs.Reference = "GRCh38"

    //this should be better
    //check if typeInputs, selectInputs and buttonInputs are filled
    if(typeInputs.ID === undefined || typeInputs.OpName === undefined || 
      buttonInputs.Report === undefined || buttonInputs.Sample === undefined || buttonInputs.Variant === undefined || buttonInputs.Reference === undefined || 
      selectInputs.Panel === undefined || selectInputs.Drug === undefined || selectInputs.Path === undefined ||
      selectInputs.Panel === "" || selectInputs.Drug === "" || selectInputs.Path === ""){
      alert("Please fill in all the fields.")
      return;
    }


    console.log(typeInputs)
    console.log(selectInputs)
    console.log(buttonInputs)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        
        <label>Sample ID: </label>
         <input 
         type="text"
         name="ID"
         value={typeInputs.ID || ""}
         onChange={handleChangeType} />

        <div value={buttonInputs.Report}> 
          <label>Report Type: </label> <br/>
          <input type="radio" value="Variants" name="Report" 
            onChange={handleChangeButton} /> Variants <br/>
          <input type="radio" value="ClinInterp" name="Report"  
            onChange={handleChangeButton} /> Variants and Clinical Interpretation
        </div>

        <div value={buttonInputs.Sample}> 
          <label>Sample Type: </label> <br/>
          <input type="radio" value="bam" name="Sample" 
            onChange={handleChangeButton} /> bam <br/>
          <input type="radio" value="vcf" name="Sample"  
            onChange={handleChangeButton} /> vcf
        </div>

        <div>
          <label> Method: </label>
            <input type="text" name="Method" list="methods" onChange={handleChangeType}/>
            <datalist id="methods" name="Method">
              <option value="Illumina Short Read"></option>
              <option value="Illumina Long Read"></option>
              <option value="Pacbio Short Read"></option>
              <option value="Pacbio Long Read"></option>
            </datalist>
        </div>
        
        <div>
          <label> Pgx gene panel: </label>
            <select name="Panel" value={selectInputs.Panel} onChange={handleChangeSelect}>
              <option value=""></option>
              <option value="COMT">COMT</option>
              <option value="ABCD">ABCD</option>
            </select>
        </div>

        <div>
          <label> Drug: </label>
            <select name="Drug" value={selectInputs.Drug} onChange={handleChangeSelect}>
              <option value=""></option>
              <option value="All drugs">All drugs</option>
              <option value="Some drugs">Some drugs</option>
            </select>
        </div>
        
        <div value={buttonInputs.Variant}> 
          <label>Variant Type: </label> <br/>
          <input type="radio" value="Actionable" name="Variant" 
            onChange={handleChangeButton} /> Actionable <br/>
          <input type="radio" value="All" name="Variant"  
            onChange={handleChangeButton} /> All Relevant
        </div>

        <div value={buttonInputs.Reference}> 
          <label>Reference: </label> <br/>
          <input type="radio" value="GRCh38" name="Reference" checked={true} 
            onChange={handleChangeButton} /> GRCh38
        </div>
        
        <div>
          <label> Input path: </label>
            <select name="Path" value={selectInputs.Path} onChange={handleChangeSelect}>
              <option value=""></option>
              <option value="Path 1">Path 1</option>
              <option value="Path 2">Path 2</option>
            </select>
        </div>

        <div>
          <label>Operator Name: </label>
          <input 
          type="text"
          name="OpName"
          value={typeInputs.OpName || ""}
          onChange={handleChangeType} />
        </div>

        <div>
          <label>Operator Institution: </label>
          <input 
          type="text"
          name="OpInst"
          value={typeInputs.OpInst || ""}
          onChange={handleChangeType} />
        </div>

        <div>
          <label>Institution Address: </label>
          <input 
          type="text"
          name="InstAddr"
          value={typeInputs.InstAddr  || ""}
          onChange={handleChangeType} />
        </div>
        
        <br/>
        
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;