import { Link, useOutletContext } from 'react-router-dom';;
import { useEffect } from 'react';



const NotFound = () => {
    const [setNotFound] = useOutletContext();

    useEffect(() => {
        setNotFound(true);
        return () => setNotFound(false); 
    }, [setNotFound]);

 

  return (
    <div className=" flex flex-col items-center justify-center px-4  text-center">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small_2x/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
        alt="404"
        className="w-80 h-80 object-contain mb-6"
      />
      <h1 className="text-4xl font-bold text-[#0EA106] mb-2">Oops! Page not found</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link
        to="/"
        className="bg-[#0EA106] text-white px-6 py-2 rounded-full hover:bg-[#0EA106] transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
