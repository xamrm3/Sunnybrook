import { Routes,Route } from 'react-router-dom';
import Form from './Form';
import Register from './Register';

function App(){

    return(
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/Form" element={<Form />}/>
        </Routes>
    )

}

export default App;
