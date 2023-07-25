import logo from './logo.svg';
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
    setSelectInputs(values => ({...values, [name]: value}))
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(typeInputs)
    alert(selectInputs)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Sample ID:
         <input 
         type="text"
         name="ID"
         value={typeInputs.ID || ""}
         onChange={handleChangeType} />
        </label>

        

        <label>Method:
         <input 
         type="text"
         name="method"
         value={typeInputs.method || ""}
         onChange={handleChangeType} />
        </label>

        <label> Pgx gene panel
          <select value={selectInputs.panel} onChange={handleChangeSelect}>
            <option value="COMT">COMT</option>
            <option value="ABCD">ABCD</option>
          </select>
        </label>

        <label> Drug
          <select value={selectInputs.drug} onChange={handleChangeSelect}>
            <option value="All drugs">All drugs</option>
            <option value="Some drugs">Some drugs</option>
          </select>
        </label>

        <label> Input path
          <select value={selectInputs.path} onChange={handleChangeSelect}>
            <option value="Path 1">Path 1</option>
            <option value="Path 2">Path 2</option>
          </select>
        </label>

        <label>Operator Name:
         <input 
         type="text"
         name="OpName"
         value={typeInputs.OpName || ""}
         onChange={handleChangeType} />
        </label>

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