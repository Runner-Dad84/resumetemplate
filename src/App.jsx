import { useState } from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'
import TextAreaComp from './TextAreaComp'
import './App.css'

function App() {


  //Resume Fields
  const [fieldData, setFieldData ] = useState({
    name:'',
  });
  //button press
  const [activeClass, setActiveClass ] = useState({
    status: true,
    value: 'Print',
 });
  //class
  const [classType, setClassType] = useState('active')


  //Field Data
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
    { label: 'Degree Desciption', name:'SchDesc', type:'message', class: '', },
    { label: 'Company', name:'company', type:'text', class:'', },
    { label: 'Title', name:'title', type:'text', class:'professional', },
    { label: 'Employment Start', name:'startDate', type:'date', class:'', },
    { label: 'Employment End', name:'endDate', type:'date', class:'', },
    { label: 'Job Description', name:'JobDesc', type:'message', class:'', },
    
    
  ];
  //Update h2 resume fields from value of input field
  const handleField = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFieldData((prev) => {
       const updated = { ...prev, [name]: value }
       console.log('Updated state:', updated)
       return updated;
  })};
//if button press switch true/false, if true then active..
  const isActive = ()=>{
    console.log('click');
    { if (activeClass.status === true) {
      setActiveClass(false);
      setClassType('inactive');

    } else {
      setActiveClass(true);
      setClassType('active');
    }
    }};
  

return (
  <form>
    { fields.map((field) => (
      <div key = {field.name}>
        { (field.type === 'text' || field.type === 'date' ) ? (
        <InputComponent
          label = {field.label}
          name = {field.name}
          type = {field.type}
          value = {fieldData[field.name]}
          onChange = {handleField}
          className = {classType}
        /> ) : field.type === 'select' ? (
          <SelectComponent
          label = {field.label}
          name = {field.name}
          type = {field.type}
          value = {fieldData[activeClass.name]}
          onChange = {handleField}
          className = {classType}
          options = {field.options}
        /> ) : (
          <TextAreaComp
          label = {field.label}
          id = {field.name}
          name = {field.name}
          type = {field.type}
          value = {fieldData[activeClass.name]}
          onChange = {handleField}
          className = {classType}
        /> 
        ) }
        <h2
          className={`resume-${field.class}`}
        >{fieldData[field.name]}</h2>
      </div>
    ))}
    <button type='button' onClick={isActive}>{activeClass.value}</button>
  </form>
)
}

export default App
