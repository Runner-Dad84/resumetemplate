import { useState } from 'react'
import './App.css'


function App() {
  
  const [name, setText ] = useState('');
  const handleInput = (event) => {
        setText(event.target.value)
    }

return (
    <>
    
      <div className='personal'>
        <h1>{name}</h1>
        <label htmlFor="name">Name</label>
        <input 
        id='name' 
        type="text" 
        value={name}
        onChange={handleInput}
        />
        
        <h2>johnsmith@gmail.com</h2>
        <h2>555-555-5555</h2>
      </div>
      <div className="edu">
        <h1>Education</h1>
        <h2>State Universtiy</h2>
        <h3>BA Psychology</h3>
        <p>Description about course wrok and achivements</p>
      </div>
      <div className="work">
       <h1>Professional Experience</h1>
       <h2>Company 1</h2>
       <h3>Job Title</h3>
       <p>Brief description of job</p>
      </div>
      <button>Edit</button>
    </>
  )
}

export default App
