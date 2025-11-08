
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ToTop() {
    const location = useLocation();
    const pathname = location.pathname;
   
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, [pathname]);
  
return null;

}

export default ToTop