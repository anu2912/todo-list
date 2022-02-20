import React , {useState} from 'react';

export default function Todoform({addTask}) {

    // State
    const [input, setInput] = useState('');

    const handlechange = e => {
        setInput(e.target.value)
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        addTask({
            id:Math.floor(Math.random()*1000000),
            text:input,
            isComplete : false
        })
        setInput('')
    
    }
  return(
  
  <form className='todo-form'>
      <input type='text' placeholder='Enter a Todo...' onChange={handlechange} className='todo-input' value={input} name='text'/>
      <button type='submit' onClick={handlesubmit} className='todo-btn'>Add</button>

  </form>
  );
}
