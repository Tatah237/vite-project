import { useEffect, useRef, useState } from 'react';
import "./App.css";

function Hello({ name }) {
  return (
    <h1>Hello {name}!</h1>
  )
}
function App() {
  const [name, setName] = useState("John")
  const [anotherName, setAnotherName] = useState("");

  const handleChangeName = () => {
    setName(anotherName);
  };
  const handleInputChange = (e) => {
    setAnotherName(e.target.value);
  };

  return (
  <div>
    <Hello name={name} />
    <div>
      <input onChange={handleInputChange}
        value={anotherName}
        type="text"
        placeholder="Input Name"
      />
      </div>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
    );
}
export default App