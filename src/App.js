import React,{useState} from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'
import './App.css';

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))
  
  const handleSubmit = (e) => {
    e.preventDefault()
    try{
      const colors = new Values(color).all(10)
      setList(colors)
      console.log(...list);
    }
    catch(error){
      setError(true)
    }
    
  }
  return (
    <section className="container">
      <div className="header">
      <h1 className="heading">
        Color Generator:
      </h1>
      <form onSubmit={handleSubmit} >
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} 
        className = {`input ${error ? 'input-error' : ''}`} placeholder='#f15025'
        />
        <button className='submit-btn' type='submit'>Submit</button>
      </form>
      </div>
      <SingleColor list={list} {...list} />
    </section>
  );
}

export default App;
