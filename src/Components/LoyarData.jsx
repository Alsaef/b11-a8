import { use, useState } from "react";
import { Link } from "react-router-dom";


const LoyarData = ({ lowyers }) => {

    const [view,setView]=useState(6)

    return (
        <div className="px-10 mt-10">
            <h2 className="py-4 text-center text-3xl font-bold">Our Best Lawyers</h2>
            <p className="text-center">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

            <div className="grid lg:grid-cols-2 grid-cols-1  gap-4 mt-9">
                {
                    lowyers?.slice(0,view).map(lawyer => (
                        <div>

                            <div className="lg:card flex lg:flex-row flex-col items-center card-side bg-base-100 border px-4 py-3.5">
                                <figure>
                                    <img
                                    className="w-[150px] rounded-lg h-[180px]"
                                        src={lawyer.Image}
                                        alt="Movie" />
                                </figure>
                                <div className="card-body">
                                    <div className="flex items-center gap-3.5">
                                        <button className="text-green-400 bg-green-100 px-2 py-1 rounded-lg">{lawyer.Available}</button>
                                        <button className="text-blue-400 bg-blue-100 px-2 py-1 rounded-lg">{lawyer.Experience}</button>
                                    </div>
                                    <h2 className="card-title">{lawyer.Name}</h2>
                                    <p>{lawyer.Speciality}</p>
                                    <p>{lawyer.LicenseNumber}</p>
                                    <div className="r">
                                       <Link to={`/lawyer/${lawyer.id}`}> <button className="btn border-blue-400 w-[90%] rounded-full text-blue-400 ">View Details</button></Link>
                                    </div>
                                </div>
                            </div>



                        </div>
                    ))
                }

               
            </div>
           <div className="flex flex-col items-center my-5">
           {
             view===6&&<button onClick={()=>setView(view + 6)} className="btn bg-[#0EA106] text-white rounded-lg">Show All Lawyer</button>
           }
           </div>
        </div>
    );
};

export default LoyarData;