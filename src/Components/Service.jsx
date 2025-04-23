import React from 'react';
import imag1 from '../assets/C002-assets/success-doctor.png';
import imag2 from '../assets/C002-assets/success-patients.png';
import imag3 from '../assets/C002-assets/success-review.png';
import imag4 from '../assets/C002-assets/success-staffs.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,     
  });

  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      setKey(prev => prev + 1);
    }
  }, [inView]);

  return (
    <div className='mt-12 px-10' ref={ref}>
      <h2 className='text-center text-3xl font-bold'>We Provide Best Law Services</h2>
      <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mt-6'>

        {/* 1 */}
        <div className="card bg-gray-200 px-4 py-2 shadow-sm">
          <div className='flex items-start'>
            <img src={imag1} alt="Lawyer" />
          </div>
          <div className="py-3">
            <h2 className="text-3xl font-bold text-start">
              <CountUp key={key + '-1'} end={199} duration={2} />+
            </h2>
            <p>Total Lawyer</p>
          </div>
        </div>

        {/* 2 */}
        <div className="card bg-gray-200 px-4 py-2 shadow-sm">
          <div className='flex items-start'>
            <img src={imag2} alt="Review" />
          </div>
          <div className=" py-3">
            <h2 className="text-3xl font-bold">
              <CountUp key={key + '-2'} end={467} duration={2} />+
            </h2>
            <p>Total Reviews</p>
          </div>
        </div>

        {/* 3 */}
        <div className="card bg-gray-200 px-4 py-2 shadow-sm">
          <div className='flex items-start'>
            <img src={imag3} alt="Cases" />
          </div>
          <div className=" py-3">
            <h2 className="text-3xl font-bold">
              <CountUp key={key + '-3'} end={1900} duration={3} />+
            </h2>
            <p>Cases Initiated</p>
          </div>
        </div>

        {/* 4 */}
        <div className="card bg-gray-200 px-4 py-2 shadow-sm">
          <div className='flex items-start'>
            <img src={imag4} alt="Staff" />
          </div>
          <div className=" py-3">
            <h2 className="text-3xl font-bold">
              <CountUp key={key + '-4'} end={300} duration={2} />+
            </h2>
            <p>Total Staffs</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
