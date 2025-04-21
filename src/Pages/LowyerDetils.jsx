import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AppointmentContext } from '../Provider/AppointmentProvider ';

const LowyerDetils = () => {
    const lawyer = useLoaderData()
    const navigate=useNavigate()
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const isAvailableToday = lawyer.Availability.includes(today);

    const {appointments,addAppointment}=useContext(AppointmentContext)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    const handelBook=(lawyer)=>{

        const exists = appointments.find(item => item.id === lawyer.id);
        if (exists) {
          alert("This lawyer is already booked!");
          return;
        }

         console.log(lawyer);
         addAppointment(lawyer)
         navigate('/booking')
         alert('Successfully booking')
    }
    return (
        <div>
            <div className="card  bg-gray-200 card-sm shadow-sm py-10 mx-auto w-[95%] rounded-lg mt-5">
                <div className="card-body flex flex-col items-center">
                    <h2 className="text-3xl font-bold py-4">Lawyer’s Profile Details</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum <br /> magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
                </div>
            </div>



            <div className="flex lg:flex-row flex-col items-center justify-start gap-4 py-8 px-8 mx-auto w-[95%] mt-7 border-[1px] rounded-2xl ">
                <img
                    src={lawyer.Image}
                    className="h-[280px] rounded-lg"
                />
                <div className='flex flex-col items-start'>
                    <p className=' text-[#176AE5]  bg-blue-200 px-3 py-1 rounded-full mb-2'>{lawyer.Experience}</p>
                    <h2 className='lg:text-3xl text-2xl font-bold py-4'>{lawyer.Name}</h2>

                    <div className='flex items-center gap-4 my-4'>
                        <p>Criminal Expert</p>
                        <p className='flex items-center gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 3.125C6.70304 3.125 3.625 6.20304 3.625 10C3.625 13.7969 6.70304 16.875 10.5 16.875C14.2969 16.875 17.375 13.7969 17.375 10C17.375 6.20304 14.2969 3.125 10.5 3.125ZM2.375 10C2.375 5.51269 6.01269 1.875 10.5 1.875C14.9873 1.875 18.625 5.51269 18.625 10C18.625 14.4873 14.9873 18.125 10.5 18.125C6.01269 18.125 2.375 14.4873 2.375 10Z" fill="#141414" fill-opacity="0.7" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6.875C8 6.52981 8.27981 6.25 8.625 6.25H11.125C11.7881 6.25 12.4239 6.51338 12.8927 6.98225C13.3616 7.45106 13.625 8.08694 13.625 8.75C13.625 9.41306 13.3616 10.0489 12.8927 10.5177C12.4239 10.9866 11.7881 11.25 11.125 11.25H9.25V13.125C9.25 13.4702 8.97019 13.75 8.625 13.75C8.27981 13.75 8 13.4702 8 13.125V6.875ZM9.25 10H11.125C11.4565 10 11.7744 9.86831 12.0089 9.63387C12.2433 9.39944 12.375 9.0815 12.375 8.75C12.375 8.4185 12.2433 8.10056 12.0089 7.86613C11.7744 7.63169 11.4565 7.5 11.125 7.5H9.25V10Z" fill="#141414" fill-opacity="0.7" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8924 10.1046C11.1754 9.90706 11.5651 9.97637 11.7626 10.2594L13.5126 12.7672C13.7101 13.0503 13.6408 13.4399 13.3577 13.6375C13.0746 13.835 12.6851 13.7657 12.4875 13.4826L10.7375 10.9748C10.54 10.6917 10.6093 10.3021 10.8924 10.1046Z" fill="#141414" fill-opacity="0.7" />
                        </svg></span> License No: BD 12451254</p>
                    </div>

                    <div className='flex items-center gap-4 my-2'>
                        <p>Availability:</p>
                        <p className='flex items-center lg:flex-row flex-col gap-4'>{lawyer.Availability.map(a => <span className='text-[#FFA000] bg-[#FFA0001A] px-3 py-1 rounded-full'>{a}</span>)}</p>
                    </div>

                    <p>Consultation Fee:  <span className='text-[#0EA106] font-bold'>Taka:{lawyer.Fee}</span></p>
                </div>
            </div>




            <div className='mt-12 mx-auto w-[95%] border-[1px] rounded-2xl px-4 py-9'>

                <h2 className='text-center text-3xl font-bold mb-5 pb-5'>Book an Appointment</h2>
                <hr />
                <div className='flex justify-between py-6'>
                    <p className='text-xl font-bold'>Availability</p>
                    <p className='text-[#09982F] bg-[#09982F1A] px-3 py-1 rounded-full'>{isAvailableToday?<>Lawyer  Available Today</>:<>Lawyer  Unavailable Today</>}</p>
                </div>
                <hr />
                <p className='flex items-center gap-1 ml-5 my-5 bg-[#FFA0001A] text-[#FFA000]  w-[90%] px-1 py-1 rounded-full'><span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g clip-path="url(#clip0_15_7531)">
                        <path d="M10.5 2.5C16.5 2.5 18 4 18 10C18 16 16.5 17.5 10.5 17.5C4.5 17.5 3 16 3 10C3 4 4.5 2.5 10.5 2.5Z" stroke="#FFA000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 6.66669V10" stroke="#FFA000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 13.3333H10.5083" stroke="#FFA000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15_7531">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                        </clipPath>
                    </defs>
                </svg></span> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>

                <div className='flex flex-col items-center mt-6  '>
                    <button onClick={()=>handelBook({name:lawyer.Name,Fee:lawyer.Fee,Speciality:lawyer.Speciality,id:lawyer.id})} className='btn w-[90%] rounded-full bg-[#0EA106] text-white'>Book Appointment Now</button>
                </div>

            </div>

        </div>
    );
};

export default LowyerDetils;