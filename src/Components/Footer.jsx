import React from 'react'
import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { pole_bottom,pole_top,triangulorect,triangulorectblue,triangulorectred,redbox,bluebox, location,originalLogo,face_icon,insta_icon,whats_icon,
agende,a_barbearia,produtos,dia_do_noivo,selected_agende,selected_produtos,selected_dia_do_noivo,selected_a_barbearia} from "../assets"


  
const Footer = () => {

  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);


  // Função para controlar a animação com base no scroll
  const handleScroll = () => {
    const scrollY = (window.scrollY)   || (window.pageYOffset);
    controls.start({ width: `${scrollY}px` });
  };


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  


  return (

    
    
    <div className='flex flex-col  w-full h-fit overflow-x-hidden overflow-y-hidden font-quantico'>
    <div className='flex  bg-[#000000] w-full h-fit  '>




    
    <div className='flex bg-black w-[100%] h-[1600px] m-10 '>
      

        <div className='flex flex-col bg-black w-[fit] h-[100%] ml-auto '>

          <img src={pole_top} className=''></img>

<div className='flex bg-black w-[100%] h-[100%] justify-center relative'>

  <div className='flex w-[45%] h-full absolute justify-center items-center z-30 mr-[200%] mt-[5px] '>
<img src={originalLogo} className='ml-[100px]'></img>
<img src={originalLogo} className='ml-[100px]'></img>
<img src={originalLogo} className='ml-[100px]'></img>
<img src={originalLogo} className='ml-[100px]'></img>
</div>

<div className='flex flex-col bg-white w-[100%] h-[100%] ms-10 me-10 relative'>

  


<img src={triangulorectred} className='w-full mt-[10px]'></img>


<div className='relative'>

<motion.div
  className='flex bg-[#FF5656] w-[232%] h-[200px] ml-auto right-[100%] absolute'
  initial={{ width: '0px' }}
  animate={controls}
>
  <div className='flex w-[500px] h-[200px] mt-[-53px] ml-[-400px] justify-center items-center'>
    <p className='absolute text-white'></p>
    <img src={redbox} className='w-[500px] h-[200px]' style={{ objectFit: 'cover' }}></img>
  </div>

  <div className='flex flex-col z-40 w-fit h-fit mr-[-420px] align-middle justify-center relative'>
    
    <img
      src={a_barbearia}
      className='w-[110%] h-[110%] ml-auto mr-[20px]  mt-[20px]  cursor-pointer'
      onMouseOver={(e) => {
        e.currentTarget.src = selected_a_barbearia;
      }}
      onMouseOut={(e) => {
        e.currentTarget.src = a_barbearia;
      }}
    ></img>

<img
      src={dia_do_noivo}
      className='w-auto h-[100%] mr-[10px] mt-[240px] z-20 absolute  cursor-pointer'
      onMouseOver={(e) => {
        e.currentTarget.src = selected_dia_do_noivo;
      }}
      onMouseOut={(e) => {
        e.currentTarget.src = dia_do_noivo;
      }}
    ></img>

<motion.img
        src={isHovered ? selected_agende : agende}
        className="w-[90%] h-[90%]  ml-[110%] mt-[240px] z-10 absolute  cursor-pointer"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        alt="Agende"
      />

<img
      src={produtos}
      className='w-w-[90%] h-[100%]  ml-[110%] mt-[30px] z-10 absolute  cursor-pointer'
      onMouseOver={(e) => {
        e.currentTarget.src = selected_produtos;
      }}
      onMouseOut={(e) => {
        e.currentTarget.src = produtos;
      }}
    ></img>

    {/* Resto das imagens com propriedades semelhantes */}
  </div>
</motion.div>

<div className='flex bg-[#FF5656] w-full h-[200px]  absolute p-[10px]'>




</div>




</div>



<img src={triangulorectblue} className='w-full mt-[210px]'></img>

<div className='relative'>

<div className='flex bg-[#4951FF] w-[205%] h-[200px] ml-auto right-[100%] absolute '>

  
<div className='flex w-fit h-fit mt-[-53px] ml-[-400px] justify-center items-center'>

<p className='absolute text-white'>



</p>

<img src={bluebox} className='w-[500px]'></img>

</div>

</div>

<div className='flex bg-[#4951FF] w-full h-[200px]  absolute '/>

</div>

<img src={triangulorectred} className='w-full mt-[210px]'></img>

<div className='relative'>

<div className='flex bg-[#FF5656] w-[100%] h-[200px] ml-auto right-[100%] absolute '>

<div className='flex w-fit h-fit mt-[-53px] ml-[-400px] justify-center items-center'>

<p className='absolute text-white'>


</p>

<img src={redbox} className='w-[500px]'></img>

</div>

</div>

<div className='flex bg-[#FF5656] w-full h-[200px]  absolute p-[10px]'>

<div className='flex w-[200%] h-[100%] bg-[#FF5656] ml-[-100%] justify-between pl-[50px] pr-[75px] z-40'>
  

<img src={face_icon} className='w-[128px] hover:scale-90 transition-transform transform-gpu  cursor-pointer'></img>
<img src={insta_icon} className='w-[128px] hover:scale-90 transition-transform transform-gpu  cursor-pointer'></img>
<img src={whats_icon} className='w-[128px] hover:scale-90 transition-transform transform-gpu  cursor-pointer'></img>


</div>


</div>

</div>

<img src={triangulorectblue} className='w-full mt-auto'></img>
  


<div className='absolute w-full h-full bg-black z-40 ml-[100%] '>


</div>

</div>

</div>

          <img src={pole_bottom} className='justify-center z-20'></img>


          
        </div>

        

</div>



    </div>

    <div className='flex w-full h-[250px] bg-black mt-[-160px] z-10 mb-10'> 

<div className='flex w-full h-full bg-[#4951FF] mr-20 ml-20 '>
<div className='flex bg-[#4951FF] w-full h-full  justify-center ml-[290px]'>

  <div className='flex flex-col items-center justify-center'>



  <div className='flex w-fit h-fit bg-[#4951FF] '>
    <img src={location} className='mr-5'></img>
  <p className='text-white text-3xl'>Barbearia Don Canutto</p>
  </div>

  <p className='text-white text-3xl mt-3'>André Perine, 680 - Vila Santa Rita - Assis/SP</p>
  <p className='text-white text-3xl mt-3'>CNPJ: 00.000.000/0001-00</p>
  <p className='text-white text-3xl mt-3'>Copyright © Don Canutto - 2023. Todos os Direitos Reservados.</p>
  
  </div>

  </div>
<img src={triangulorect} className='ml-auto mr-[-2px] h-fit'></img>

</div>

</div>

    </div>
    
  )
}




export default Footer
