import { useState } from 'react';

const useNotFound = () => {
   const [notfound, setNotFound] = useState(false);

   const handleNotFound = (status) => {
        setNotFound(status); 
   };

   return [notfound, handleNotFound];
};

export default useNotFound;
