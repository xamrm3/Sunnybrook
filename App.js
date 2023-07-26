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

    //this should be better lol
    //check if typeInputs, selectInputs and buttonInputs are filled
    if(typeInputs.ID === undefined || typeInputs.Method === undefined || typeInputs.OpName === undefined || 
      buttonInputs.Report === undefined || buttonInputs.Sample === undefined || buttonInputs.Variant === undefined || buttonInputs.Reference === undefined || 
      selectInputs.Panel === undefined || selectInputs.Drug === undefined || selectInputs.Path === undefined ||
      selectInputs.Panel === "" || selectInputs.Drug === "" || selectInputs.Path === ""){
      alert("Please fill in all the fields")
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
          <label>Report Type: </label>
          <input type="radio" value="Basic" name="Report" 
            onChange={handleChangeButton} /> Basic
          <input type="radio" value="Drugs" name="Report"  
            onChange={handleChangeButton} /> Drugs summary
          <input type="radio" value="Genes" name="Report" 
            onChange={handleChangeButton} /> Genes summary
          <input type="radio" value="Final" name="Report" 
            onChange={handleChangeButton} /> Final summary
        </div>

        <div value={buttonInputs.Sample}> 
          <label>Sample Type: </label>
          <input type="radio" value="bam" name="Sample" 
            onChange={handleChangeButton} /> bam
          <input type="radio" value="vcf" name="Sample"  
            onChange={handleChangeButton} /> vcf
        </div>

        <label>Method: </label>
         <input 
         type="text"
         name="Method"
         value={typeInputs.Method || ""}
         onChange={handleChangeType} />

        <label> Pgx gene panel </label>
          <select name="Panel" value={selectInputs.Panel} onChange={handleChangeSelect}>
            <option value=""></option>
            <option value="COMT">COMT</option>
            <option value="ABCD">ABCD</option>
          </select>

        <label> Drug </label>
          <select name="Drug" value={selectInputs.Drug} onChange={handleChangeSelect}>
            <option value=""></option>
            <option value="All drugs">All drugs</option>
            <option value="Some drugs">Some drugs</option>
          </select>
        
        <div value={buttonInputs.Variant}> 
          <label>Variant Type: </label>
          <input type="radio" value="actionable" name="Variant" 
            onChange={handleChangeButton} /> Actionable
          <input type="radio" value="potential" name="Variant"  
            onChange={handleChangeButton} /> Potential
        </div>

        <div value={buttonInputs.Reference}> 
          <label>Reference: </label>
          <input type="radio" value="GRCh37" name="Reference" 
            onChange={handleChangeButton} /> GRCh37
          <input type="radio" value="GRCh38" name="Reference"  
            onChange={handleChangeButton} /> GRCh38
        </div>

        <label> Input path </label>
          <select name="Path" value={selectInputs.Path} onChange={handleChangeSelect}>
            <option value=""></option>
            <option value="Path 1">Path 1</option>
            <option value="Path 2">Path 2</option>
          </select>

        <label>Operator Name: </label>
         <input 
         type="text"
         name="OpName"
         value={typeInputs.OpName || ""}
         onChange={handleChangeType} />

        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;

{/* <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.afds
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */} 