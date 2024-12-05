import { useState } from 'react'
import './App.css'


function App() {
  
  const [field, setField ] = useState({
    name:'', 
    email:'',
    phone:'',
    school:'',
    discipline:'',
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
        <h3>{field.discipline} {field.degree}</h3>
        <label>Discipline:
          <input 
            name='discipline' 
            type="text" 
            value={field.discipline}
            onChange={handleField}
          />
        </label>
        <label>Degree:
          <select 
            name='degree' 
            value={field.degree} 
            onChange={handleField}>

            <option value='none'></option>
            <option value='B.A.'>B.A.</option>
            <option value='B.S.'>M.S.</option>
            <option value='M.A.'>M.A.</option>
            <option value='M.S.'>M.S.</option>
          </select>
        </label>
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
