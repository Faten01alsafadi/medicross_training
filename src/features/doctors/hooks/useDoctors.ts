import { useEffect, useState } from "react"
import { getDoctors } from "../services/doctors.service";

export const useDoctors = ()=>{
const [doctors,setDoctors]=useState([]);
const [loading,setLoading]=useState(true)
useEffect(()=>{
    getDoctors().then(setDoctors).finally(()=>{setLoading(false)})
},[])

    return {doctors,loading}
}