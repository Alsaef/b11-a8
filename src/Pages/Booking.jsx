import React, { useContext, useEffect, useState } from 'react';
import Rechart from '../Components/Rechart';
import { AppointmentContext } from '../Provider/AppointmentProvider ';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Booking = () => {
  const [loading, setLoading] = useState(true)
  const { appointments ,removeAppointment} = useContext(AppointmentContext)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800);
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    )
  }



  const handelRemove=(id)=>{
    removeAppointment(id)
    toast.error('Lawyer Has Been Removed')
    console.log(id);
  }



  if (appointments.length===0) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center'>
       <h2 className='lg:text-3xl text-xl font-bold text-center'>You Have Not Booked Any Appointment Yet!</h2>
       <Link to='/'><button className='btn bg-blue-500 text-white mt-5 rounded-2xl'>Book An Appointment</button></Link>
      </div>
    )
  }

  return (
    <div>
      <div className='flex flex-col items-center'>
        <Rechart></Rechart>
      </div>

      <div className='mt-10'>
        {
          appointments.map(appointment => (
            <div className='border border-gray-300 px-7 py-6 my-5 mx-auto w-[95%] rounded-2xl '>


              <div className='flex lg:flex-row flex-col justify-between items-center'>

                <div>
                  <p className='py-2 font-bold'>{appointment.name}</p>
                  <p>{appointment.Speciality}</p>
                </div>

                <div>
                  <p>Appointment Fee :  {appointment.Fee} Taka</p>
                </div>

              </div>
              <hr className='my-2' />

              <button onClick={()=>handelRemove(appointment.id)} className='btn w-full mt-6 text-red-500 border-red-500 rounded-full'>Cancel Appointment</button>



            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Booking;