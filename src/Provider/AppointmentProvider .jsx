import React, { createContext, useEffect, useState } from 'react';


export const AppointmentContext = createContext();

const AppointmentProvider  = ({children}) => {

    const [appointments, setAppointments] = useState(()=>{
        const storedAppointments = localStorage.getItem("appointments");
        return storedAppointments ? JSON.parse(storedAppointments) : [];
    });

  
    useEffect(() => {
        const saved = localStorage.getItem("appointments");
        if (saved) setAppointments(JSON.parse(saved));
      }, []);
    
      useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments));
      }, [appointments]);

      
      const addAppointment = (lawyer) => {
        setAppointments([...appointments, lawyer]);
      };

      const removeAppointment = (id) => {
        const filtered = appointments.filter(item => item.LicenseNumber !== id);
        setAppointments(filtered);
      };
    return (
        <AppointmentContext.Provider value={{ appointments, addAppointment,removeAppointment }}>
            {children}
        </AppointmentContext.Provider>
    );
};

export default AppointmentProvider ;