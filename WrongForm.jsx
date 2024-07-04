import React, { useState } from 'react';




const WrongForm = () => {


let a = [1,2,3]
a.push(4)
let b = a;
b.push(7)
let c = [...a]
c.push(a)
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState();
   
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue(''); // This line should be after the alert
    alert(`Submitted Value: ${submittedValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
<form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Last Submitted Value: {submittedValue}</p>
    </div>
  );
}

export default WrongForm;