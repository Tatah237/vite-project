import { useEffect, useRef, useState } from 'react';
import "./App.css";

function Hello({ name }) {
  return (
    <h1>Hello {name}!</h1>
  )
}
function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [userInfor, setUserInfor] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  })
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const logUserInfor = e => {
    e.preventDefault()
    console.log(userInfor)
  }
  return (
    <div>
      <div>
        <p>User Infor</p>
        <form action="" onSubmit={logUserInfor}>
          <input
            onChange={handleFirstName}
            value={firstName}
            type="text"
            placeholder="Input First Name"
          />
          <br />
          <input
            onChange={handleLastName}
            value={lastName}
            type="text"
            placeholder="Input Last Name"
          />
          <br />
          <input
            onChange={handleGender}
            value={gender}
            type='text'
            placeholder='Input Gender'
          />
          <br />
          <button type='submit'>submit</button>
        </form>
      </div>
      <div>
        <p>Firs tName: {firstName}</p>
        <p>Last Name:  {lastName}</p>
        <p>Gender:{gender}</p>
      </div>
    </div>
  );
}
export default App