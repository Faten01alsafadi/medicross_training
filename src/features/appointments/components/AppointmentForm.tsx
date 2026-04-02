import { useState } from "react"

const doctors=[
    {
        id:1,
        name:"dr. John Doe",
    },{
        id:2,
        name:"dr. Jane Smith",
    }
]
const services=[
    {
        id:1,
        name:"general ",
    },
    {
        id:2,
        name:"dental",
    }
]

function AppointmentForm() {
    const [form,setForm]=useState(
        {
            name:"",
            email:"",
            phone:"",
            service:"",
            doctor:"",
            date:""
            
        }
    )
    const handleChange =()=>{

    }
 
  return (
    <section>
      <h2>book</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
<form action="">
    <input onChange={handleChange} type="text" placeholder="name" required/>
    <input onChange={handleChange} type="email" name="" id="" placeholder="email"/>
    <input onChange={handleChange} type="tel" placeholder="phone"/>
    <select name="" id="">
        <option value="">select service</option>
        { services.map((service,index)=>( 
<option value="" key={index}> {service.name}</option>
        ))}
         
  
    </select>
    <select name="" id="" onChange={handleChange}>
        <option value="">select doctor</option>
{doctors.map((doctor,index)=>(
    <option value="" key={index}>{doctor.name}</option>
))} 

    </select>
    <input type="date" />
    <button type="submit">Book Appointment</button>
</form>
    </section>
  )
}

export default AppointmentForm
