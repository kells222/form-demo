

import './App.css';
import {useState} from "react"

function App() {

  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log({FirstName,LastName,Email,Password})
  }


  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }

    function handleLastNameChange(e){
    setLastName(e.target.value)
  }

    function handleEmailChange(e){
    setEmail(e.target.value)
  }

    function handlePasswordChange(e){
    setPassword(e.target.value)
  }

// console.log({FirstName,LastName,Email,Password})


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <label>
      FirstName:
      <input onChange={handleFirstNameChange} value={FirstName}  type='text'/>
      </label>
      <button type='submit'>submit</button>

      <label>
      LastName:
      <input onChange={handleLastNameChange} value={LastName}  type='text'/>
      </label>
      <button type='submit'>submit</button>

      <label>
      Email:
      <input onChange={handleEmailChange} value={Email}  type='text'/>
      </label>
      <button type='submit'>submit</button>

      <label>
      Password:
      <input onChange={handlePasswordChange} value={Password} type='text'/>
      </label>
      <button type='submit'>submit</button>
    </form>


    </div>
  );
}

export default App;
