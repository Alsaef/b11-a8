import React from 'react';
import Logo from '../assets/C002-assets/logo-footer.png';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-28'>
      <footer className="footer footer-horizontal footer-center bg-black text-white p-10">
        <aside className='flex items-center'>
          <img src={Logo} alt="" />
          <h2 className='text-white text-3xl font-bold'>Law.BD</h2>
        </aside>
        <nav>
          <div>

            <ul className='flex items-center lg:flex-row flex-col justify-center gap-8 my-4 '>
              <li ><NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2" : ""
              }>Home</NavLink></li>
              <li><NavLink to='/booking' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2" : ""
              }>Booking</NavLink></li>
              <li><NavLink to='/blogs' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2" : ""
              }>Blogs</NavLink></li>
              <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </ul>

          </div>
              <hr className='border-[1px dotted] border-white w-full' />
          <div className="grid grid-flow-col gap-4 mt-6">


            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 0C27.9411 0 36 8.05889 36 18C36 27.9411 27.9411 36 18 36C8.05889 36 0 27.9411 0 18C0 8.05889 8.05889 0 18 0Z" fill="url(#paint0_linear_13_1617)" />
                <path d="M20.3384 35.8491V21.9456H24.2581L24.7777 17.0522H20.3384L20.345 14.6028C20.345 13.3265 20.4663 12.643 22.2995 12.643H24.7502V7.74878H20.8296C16.1204 7.74878 14.4631 10.1225 14.4631 14.1149V17.0526H11.5275V21.9464H14.4631V35.652C15.6067 35.8798 16.789 36.0002 17.9996 36.0002C18.7817 36.0002 19.5629 35.9498 20.3384 35.8491Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_13_1617" x1="18" y1="-0.327978" x2="18" y2="37.535" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B2FF" />
                    <stop offset="1" stopColor="#006AFF" />
                  </linearGradient>
                </defs>
              </svg>
            </a>


            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <g clipPath="url(#clip0_13_1620)">
                  <path d="M0 0H36V36H0V0Z" fill="#0F0F0F" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5004 9H8.25L15.6607 18.7886L8.72408 27H11.929L17.1754 20.7894L21.834 26.9428H28.0844L20.4584 16.8698L20.4719 16.8872L27.038 9.11431H23.8331L18.9569 14.8866L14.5004 9ZM11.7001 10.7143H13.6459L24.6343 25.2285H22.6885L11.7001 10.7143Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_13_1620">
                    <rect width="36" height="36" rx="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>


            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <g clipPath="url(#clip0_13_1624)">
                  <path d="M18 0C8.05879 0 0 8.05879 0 18C0 27.9411 8.05879 35.9999 18 35.9999C27.9411 35.9999 36 27.9411 36 18C35.9999 8.05879 27.941 0 18 0ZM13.1975 26.7021H9.24546V13.9341H13.1975V26.7021ZM11.2027 12.262C9.91196 12.262 8.86562 11.2072 8.86562 9.90611C8.86562 8.60492 9.91211 7.55012 11.2027 7.55012C12.4932 7.55012 13.5396 8.60492 13.5396 9.90611C13.5396 11.2072 12.4933 12.262 11.2027 12.262ZM28.0079 26.7021H24.075V20C24.075 18.1618 23.3768 17.1357 21.9233 17.1357C20.3414 17.1357 19.5149 18.2043 19.5149 20V26.7021H15.7244V13.9341H19.5149V15.6537C19.5149 15.6537 20.6551 13.5446 23.3625 13.5446C26.0699 13.5446 28.008 15.1978 28.008 18.6176L28.0079 26.7021Z" fill="url(#paint0_linear_13_1624)" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_13_1624" x1="5.27206" y1="5.27206" x2="30.7279" y2="30.7279" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2489BE" />
                    <stop offset="1" stopColor="#0575B3" />
                  </linearGradient>
                  <clipPath id="clip0_13_1624">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <g clipPath="url(#clip0_13_1627)">
                  <path d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36Z" fill="#FF0000" />
                  <path d="M20.4964 18.007L15.5037 20.9036V15.0962L20.4964 18.007Z" fill="url(#paint0_linear_13_1627)" />
                  <path d="M35.6566 21.5099C34.9622 24.9949 33.2526 28.1968 30.743 30.7127C28.2335 33.2286 25.0359 34.9462 21.5527 35.6494L9.92371 24.0204C10.5509 24.5094 11.324 24.7737 12.1192 24.7712H23.8998C24.8489 24.7687 25.7583 24.3897 26.4283 23.7175C27.0984 23.0452 27.4743 22.1346 27.4737 21.1854V14.8144C27.4765 13.8817 27.1144 12.9849 26.4648 12.3157L35.6566 21.5099Z" fill="url(#paint1_linear_13_1627)" />
                  <path d="M23.8903 11.229H12.1097C11.6389 11.229 11.1728 11.3218 10.7379 11.502C10.3029 11.6822 9.90781 11.9464 9.57503 12.2794C9.24225 12.6124 8.97834 13.0077 8.7984 13.4427C8.61845 13.8778 8.526 14.344 8.52631 14.8148V21.1858C8.526 21.6566 8.61845 22.1229 8.7984 22.5579C8.97834 22.9929 9.24225 23.3882 9.57503 23.7212C9.90781 24.0542 10.3029 24.3184 10.7379 24.4986C11.1728 24.6789 11.6389 24.7716 12.1097 24.7716H23.8903C24.361 24.7716 24.8272 24.6789 25.2621 24.4986C25.697 24.3184 26.0922 24.0542 26.425 23.7212C26.7577 23.3882 27.0216 22.9929 27.2016 22.5579C27.3815 22.1229 27.474 21.6566 27.4737 21.1858V14.8148C27.474 14.344 27.3815 13.8778 27.2016 13.4427C27.0216 13.0077 26.7577 12.6124 26.425 12.2794C26.0922 11.9464 25.697 11.6822 25.2621 11.502C24.8272 11.3218 24.361 11.229 23.8903 11.229ZM15.5037 20.904V15.0966L20.4963 18.0003L15.5037 20.904Z" fill="white" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_13_1627" x1="14.5729" y1="16.027" x2="18.5235" y2="19.9799" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B71C1C" />
                    <stop offset="1" stopColor="#B71C1C" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_13_1627" x1="16.9769" y1="16.9578" x2="30.7374" y2="30.7159" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B71C1C" />
                    <stop offset="1" stopColor="#B71C1C" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_13_1627">
                    <rect width="36" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;