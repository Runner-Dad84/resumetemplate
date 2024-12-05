import { useState } from 'react'
import './App.css'


function App() {
  /*
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  */
  const [field, setField ] = useState({
    name:'', 
    email:''
  }
  );

  const handleField = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setField((prev) => {
       const updated = { ...prev, [name]: value }
       console.log('Updated state:', updated)
       return updated;
  })}


  const handleSubmit = (event) => {
    event.preventDefault();
  }


/*
  const handleInput = (field) => (event) => {
    

    const value = event.target.value;
        if (field === 'name') {
          setName(value)
        }
        if (field === 'email') {
          setEmail(value)
        }
    }
*/
return (
    <form>
    
      <div className='personal'>
        <h1>{field.name}</h1>
        <label htmlFor="name">Name: </label>
        <input 
        name='name' 
        type="text" 
        value={field.name}
        onChange={handleField}
        placeholder='name'
        />
        
        <h2>{field.email}</h2>
        <label htmlFor="email">Email</label>
        <input 
        name='email' 
        type="email" 
        value={field.email}
        onChange={handleField}
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
      <button type='submit'>Edit</button>
    </form>
  )
}

export default App
