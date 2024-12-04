import { useState } from 'react'
import './App.css'


function App() {
  
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');

  const handleInput = (field) => (event) => {
    const value = event.target.value;
        if (field === 'name') {
          setName(value)
        }
        if (field === 'email') {
          setEmail(value)
        }
    }

return (
    <>
    
      <div className='personal'>
        <h1>{name}</h1>
        <label htmlFor="name">Name: </label>
        <input 
        id='name' 
        type="text" 
        value={name}
        onChange={handleInput('name')}
        />
        
        <h2>{email}</h2>
        <label htmlFor="email">Email</label>
        <input 
        id='email' 
        type="email" 
        value={email}
        onChange={handleInput('email')}
        />

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
