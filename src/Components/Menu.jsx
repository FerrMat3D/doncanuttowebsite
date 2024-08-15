import React from 'react'
import {  doncannuto,menu, instagram, linkedin, whatsapp, facebook,hat, bigodin,faixa_preta,menu_agende,faixa_item_hover } from '../assets';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HollowText from "../styles/HollowText";


const Button = ({ text }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className="relative inline-block cursor-pointer"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative z-10">
          {isHovered ? (
            <h1 className="text-6xl font-wallpoet cursor-pointer text-[#FFBD00]">{text}</h1>
          ) : (
            <HollowText text={text} color="white" />
          )}
          <div className="absolute inset-0 flex justify-center items-center mt-5">
            <motion.img
              src={faixa_item_hover}
              alt="Hover Image"
              className="transform origin-center"
              initial={{ scaleX: isHovered ? 0 : 1.3 }}
              animate={{ scaleX: isHovered ? 1.3 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    );
  };
  

const Menu = () => {

    const buttons = ["A BARBEARIA", "# PRODUTOS #", "DIA DO NOIVO"];
  

    const [hue, setHue] = useState(0);
    const [key, setKey] = useState(0); // Chave única para forçar a atualização
  
    useEffect(() => {
      const interval = setInterval(() => {
        setHue((hue + 1) % 360);
        setKey(key + 1); // Atualiza a chave única
      }, 1);
  
      return () => clearInterval(interval);
    }, [hue, key]); // Adicione a chave ao array de dependências
  
    const color = `hsl(${hue}, 100%, 50%)`;
  
  
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
    <div className="flex w-full h-full  items-center justify-between">

<div className="w-full  sm:h-[180px] h-[100px] bg-[#000000  ]   mt-5 ml-10 mr-10  flex justify-start items-center" >

<div className="sm:w-[352px] min-w-[200px]
 h-[100%]
   bg-black   
   flex flex-col items-center justify-center">

<img src={hat} className="sm:w-[120px] w-[60px]
 min-w-[150px]  p-[20px] pt-0 "/>

<img src={bigodin} className="sm:w-[130px] w-[50px]
   "/>



</div>


<img src={doncannuto} className="w-[1800px] sm:ms-[20px] ms-[5px] me-[10px] min-w-[160px]"></img>

<div className="h-[150px] w-[100%]  flex justify-end items-right m-[50px]">

<motion.div className="flex flex-col w-fit h-full items-center mt-[30px]  cursor-pointer"
whileHover={{ scale: 1.1 }} // Escala ao passar o mouse
transition={{ duration: 0.2 }} // Duração da animação
>
<img src={faixa_preta} className=""></img>
<motion.h1
        key={key} // Aplica a chave única ao componente
        className="text-6xl font-wallpoet mt-[-21%]"
        style={{ color: color }}
        
      >
        AGENDE
      </motion.h1>
</motion.div>


</div>

</div>

</div>


<div className="flex w-full h-full ">
      <div className="flex w-full h-[80px] bg-black ml-20 mr-20 mt-5 mb-5 items-center justify-between">
        {buttons.map((buttonText, index) => (
          <Button key={index} text={buttonText} />
        ))}
      </div>
    </div>

    </>
  )


}

export default Menu
