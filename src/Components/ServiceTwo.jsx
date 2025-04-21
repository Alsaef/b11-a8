import React from 'react';
import imag1 from '../assets/C002-assets/success-doctor.png';
import imag2 from '../assets/C002-assets/success-patients.png';
import imag3 from '../assets/C002-assets/success-review.png';
import imag4 from '../assets/C002-assets/success-staffs.png';
const Service = () => {
    return (
        <div className='mt-12 px-10  '>
            <h2 className='text-center text-3xl font-bold'>We Provide Best Law Services</h2>
            <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

            <div className='grid grid-cols-4 gap-3.5 mt-6'>



                <div className="card bg-gray-200 px-4 py-2  shadow-sm">
                    <div className='flex items-start'>
                        <img
                            src={imag1}
                            alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">199+</h2>
                        <p>Total Lawyer</p>
                      
                    </div>
                </div>




                
                <div className="card bg-gray-200 px-4 py-2  shadow-sm">
                <div className='flex items-start'>
                        <img
                            src={imag1}
                            alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">467+</h2>
                        <p>Total Reviews</p>
                     
                    </div>
                </div>





                
                <div className="card bg-gray-200 px-4 py-2  shadow-sm">
                <div className='flex items-start'>
                        <img
                            src={imag1}
                            alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">1900+</h2>
                        <p>Cases Initiated</p>
                       
                    </div>
                </div>




                
                <div className="card bg-gray-200 px-4 py-2  shadow-sm">
                <div className='flex items-start'>
                        <img
                            src={imag1}
                            alt="Shoes" />
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">300+</h2>
                        <p>Total Stuffs</p>
                        
                    </div>
                </div>





            </div>
        </div>
    );
};

export default Service;