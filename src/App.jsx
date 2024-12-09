import { useState } from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'
import './App.css'

function App() {
  
  const [fieldData, setFieldData ] = useState({
    name:'', 
    email:'',
    phone:'',
    school:'',
    discipline:'',
    degree:'',
    company:'',
  });

  const fields = [
    { label: 'Name', name:'name', type:'text', class:'personal', },
    { label: 'Email', name:'email', type:'text', class:'personal', },
    { label: 'Phone', name:'phone', type:'text', class:'personal', },
    { label: 'School', name:'school', type:'text', class: 'edu', },
    { label: 'Discipline', name:'discipline', type:'text', class: 'edu', },
    { label: 'Degree', name:'degree', type:'select', class: 'edu', 
      options: [
        {label: 'B.A.', value: 'B.A.'},
        {label: 'B.S.', value: 'B.S.'},
        {label: 'M.A.', value: 'M.A.'},
        {label: 'M.S.', value: 'M.S.'},
      ] },
  ];

  const handleField = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFieldData((prev) => {
       const updated = { ...prev, [name]: value }
       console.log('Updated state:', updated)
       return updated;
  })};

return (
  <form>
    { fields.map((field) => (
      <div key = {field.name}>
        {field.type === 'text' ? (
        <InputComponent
          label = {field.label}
          name = {field.name}
          type = {field.type}
          value = {fieldData[field.name]}
          onChange = {handleField}
          className = {field.class}
        /> ) : (
          <SelectComponent
          label = {field.label}
          name = {field.name}
          type = {field.type}
          value = {fieldData[field.name]}
          onChange = {handleField}
          className = {field.class}
          options = {field.options}
        /> )}
        <h2>{fieldData[field.name]}</h2>
      </div>
    ))}
    <button type='submit'>Edit</button>
  </form>
)
}

export default App
