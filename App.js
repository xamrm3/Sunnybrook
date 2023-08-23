import { Routes,Route } from 'react-router-dom';
import Form from './Form';
import Register from './Register';
import Signin from './Signin';

function App(){

    return(
        <Routes>
            <Route path="/" element={<Signin />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Form" element={<Form />}/>
        </Routes>
    )

}

export default App;
