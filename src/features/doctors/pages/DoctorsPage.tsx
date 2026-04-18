
import React, { useState } from 'react' 
const doctors =[
  {
    id:1,
    name:"Dr. John Doe",
    specialty:"Cardiologist", 
    department:"Cardiology"
  },{
    id:2,
    name:"Dr. Jane Smith",
    specialty:"Dermatologist",
    department:"Dermatology"
  },{
    id:3,
    name:"Dr. Emily Johnson",
    specialty:"Pediatrician",
    department:"Dermatology"
  }
]

function DoctorsPage() {





  const [select, setSelect] = useState(""); 
   const [search, setSearch] = useState(""); 
//    const filteredDoctors =()=>{
//   return(doctors.filter((doctor)=>select===""? true:doctor.department===select) )
//   doctors.filter((doctor)=>doctor.name.toLowerCase().includes(search.toLowerCase())) 
// }      
const filteredDoctors =   doctors.filter((doctor)=>select===""? true:doctor.department===select) 
  doctors.filter((doctor)=>doctor.name.toLowerCase().includes(search.toLowerCase()))                                                                                
 
            
  return (
    <div>  
  <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <select  onChange={(e)=>setSelect(e.target.value)} name="" id="">
        <option value="">select department</option> 
        <option value="Cardiology">Cardiology</option>
        <option value="Dermatology">Dermatology</option>
         
       
      </select>
   <div className='flex gap-5 mt-2'>
{filteredDoctors.map((doctor) =>(
  <div className='p-3 border rounded ' key={doctor.id}>
    <h2>{doctor.name}</h2>
    <p>{doctor.specialty}</p>
  </div>
))} 
   </div>
    </div>
  )
}

export default DoctorsPage
