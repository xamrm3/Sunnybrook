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
    alert(typeInputs)
    alert(selectInputs)
    alert(buttonInputs)
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
          <input type="radio" value="Basic" name="report" 
            onChange={handleChangeButton} /> Basic
          <input type="radio" value="Drugs" name="report"  
            onChange={handleChangeButton} /> Drugs summary
          <input type="radio" value="Genes" name="report" 
            onChange={handleChangeButton} /> Genes summary
          <input type="radio" value="Final" name="report" 
            onChange={handleChangeButton} /> Final summary
        </div>

        <div value={buttonInputs.Sample}> 
          <label>Sample Type: </label>
          <input type="radio" value="bam" name="sample" 
            onChange={handleChangeButton} /> bam
          <input type="radio" value="vcf" name="sample"  
            onChange={handleChangeButton} /> vcf
        </div>

        <label>Method: </label>
         <input 
         type="text"
         name="method"
         value={typeInputs.method || ""}
         onChange={handleChangeType} />

        <label> Pgx gene panel </label>
          <select value={selectInputs.panel} onChange={handleChangeSelect}>
            <option value="COMT">COMT</option>
            <option value="ABCD">ABCD</option>
          </select>

        <label> Drug </label>
          <select value={selectInputs.drug} onChange={handleChangeSelect}>
            <option value="All drugs">All drugs</option>
            <option value="Some drugs">Some drugs</option>
          </select>
        
        <div value={buttonInputs.Variant}> 
          <label>Variant Type: </label>
          <input type="radio" value="actionable" name="variant" 
            onChange={handleChangeButton} /> Actionable
          <input type="radio" value="potential" name="variant"  
            onChange={handleChangeButton} /> Potential
        </div>

        <div value={buttonInputs.Reference}> 
          <label>Reference: </label>
          <input type="radio" value="GRCh37" name="reference" 
            onChange={handleChangeButton} /> GRCh37
          <input type="radio" value="GRCh38" name="reference"  
            onChange={handleChangeButton} /> GRCh38
        </div>

        <label> Input path </label>
          <select value={selectInputs.path} onChange={handleChangeSelect}>
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