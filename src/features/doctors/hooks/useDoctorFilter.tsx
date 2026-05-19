import { useMemo, useState } from "react";

interface Doctor{
id:number;
name:string;
specialty:string;
department:string;
}
export const useDoctorFilter =(doctors:Doctor[])=>{
    const [select, setSelect] = useState(""); 
     const [search, setSearch] = useState(""); 
const filteredDoctors = useMemo(() =>{
    return   doctors.filter((doctor) =>(select === "" ? true : doctor.department === select) &&
       doctor.name.toLowerCase().includes(search.toLowerCase()))
  },[doctors, search, select]
);
     
     return{
      search,
      setSearch,
      setSelect,
      filteredDoctors
     }
}  

