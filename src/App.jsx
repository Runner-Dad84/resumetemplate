import { useState } from 'react'
import './App.css'


function App() {
  /*
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  */
  const [field, setField ] = useState({
    name:'', 
    email:'',
    phone:'',
    school:'',
    degree:'',
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
        <label>Name: 
          <input 
            name='name' 
            type="text" 
            value={field.name}
            onChange={handleField}
          />
        </label>
        <h2>{field.email}</h2>
        <label>Email: 
          <input 
            name='email' 
            type="email" 
            value={field.email}
            onChange={handleField}
          />
        </label>
        <h2>{field.phone}</h2>
        <label>Phone Number:
          <input 
            name='phone' 
            type="text" 
            value={field.phone}
            onChange={handleField}
          />
        </label>
      </div>
      <div className="edu">
        <h1>Education</h1>
        <h2>{field.school}</h2>
        <label htmlFor="Phone">School:
          <input 
            name='school' 
            type="text" 
            value={field.school}
            onChange={handleField}
          />
        </label>
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
