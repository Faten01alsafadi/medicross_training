export const ROUTES ={
    // main pages
    HOME:"/",
    ABOUT:"/about",
    CONTACT:"/contact",
    SERVICES:"/services",
    // features pages
    DOCTORS:"/doctors",
    DOCTOR_DETAILS:(id:number|string)=>`/doctors/${id}`,

}