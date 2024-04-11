import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputarr, setInputarr]=useState([]);

  const [inputdata, setInputdata]=useState({
    name: "",
    id: "",
    password: "",
  });


function changehandle(e){

  setInputdata({...inputdata, [e.target.name]: e.target.value})
  
}

let {name,id,password} = inputdata;
function changhandle(){

  setInputarr([...inputarr, {name, id, password}])
  // console.log(inputarr);
  // console.log(inputdata);
  setInputdata({name:"", id:"", password:""})
}

  return (
    <div className="App">

      <div className='section1'>
        <h1>FORM</h1>
        <input 
        type='text'
        placeholder='Enter Name' 
        name='name' 
        autoComplete='off'
        value={inputdata.name}      
        onChange={changehandle} />

        <input 
        type='text' 
        placeholder='Enter Id' 
        name='id' 
        autoComplete='off'
        value={inputdata.id} 
        onChange={changehandle} />

        <input 
        type='text' 
        placeholder='Enter Password' 
        name='password' 
        autoComplete='off'
        value={inputdata.password} 
        onChange={changehandle} />

        <button onClick={changhandle}>SUBMIT</button>
        </div>

      <div className='section2'>
        <table border={1} cellPadding={10} width="50%">
          <tbody>
          <tr>
            <td>Name</td>
            <td>Id</td>
            <td>Password</td>
          </tr>
          {
            inputarr.map(
              (info, ind)=>{
                return(
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.id}</td>
                    <td>{info.password}</td>
                    
                  </tr>
                )
              }
            )
}
          </tbody>
        </table>
        </div>

    </div>
  );
}

export default App;
