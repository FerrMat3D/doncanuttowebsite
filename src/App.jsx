
import Footer from "./Components/Footer";
import React, { useRef, useEffect, useState } from 'react';
import VipHero from './Components/VipHero';
import Menu from "./Components/Menu";






function App() {
  



  const [shouldRender, setShouldRender] = useState(false);

  // Defina o atraso desejado em milissegundos
  const delayMilliseconds = 2000; // Atraso de 1 segundo

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delayMilliseconds);

    return () => clearTimeout(timer);
  }, []);







  return (

    
<>




<Menu/>

<VipHero/>


                      
{shouldRender && (
<Footer/>
  
)}


</>

  )
}

export default App
