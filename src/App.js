

import './App.css';
import {useState} from "react"

function App() {

  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")

  // function handleSubmit(e){
  //   e.preventDefault()
  //   // const form = e.target
  //   const formData = new FormData();

  //   formData.append("FirstName",FirstName);
  //   formData.append("LastName",LastName);
  //   formData.append("Email",Email);
  //   formData.append("Password",Password);

  //   const inputObject = Object.fromEntries(formData);

  //   console.log(JSON.stringify(inputObject));

  //   // console.log({FirstName,LastName,Email,Password})
  // }

  function handleSubmit(e){
    e.preventDefault()
    // const form = e.target
    // console.log(Object.fromEntries(form))
    // data = new FormData(form)
    // console.log(data)
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
      
    <form method='POST' onSubmit={handleSubmit}>
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
