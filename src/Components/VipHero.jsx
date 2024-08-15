import React from 'react'
import { useRef, useEffect, useState } from 'react';
import styles from '../style.css?inline';
import '../styles/animations.css'; // Importe o arquivo de estilo
import { motion } from 'framer-motion';
import { texto_vip_01 } from "../assets/textos.js"
import { Vector3, Raycaster } from 'three';

import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree,useFrame  } from '@react-three/fiber';
import { Cadeira } from "../3DModels/Cadeira"
import { xadrez,borda,btn_sejavip,btn_sejavip_pressed,faixa_vip } from '../assets';

const CameraControls = () => {
  const { camera } = useThree();
  
  // Ajustando as propriedades da câmera
  camera.position.z = 1.5;
  camera.position.y = 2;
  camera.position.x = -1.5;


  return null;
};



const VipHero = () => {

  const [shouldRender, setShouldRender] = useState(false);

  // Defina o atraso desejado em milissegundos
  const delayMilliseconds = 2000; // Atraso de 1 segundo

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delayMilliseconds);

    return () => clearTimeout(timer);
  }, []);




  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= texto_vip_01.length) {
        setTypedText(texto_vip_01.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="flex items-center justify-center  ml-10 mr-10 mb-5  ">


    <motion.div className="w-[100%] h-[650px]   bg-black   flex items-center justify-center"
    >
    
    <motion.div className={`w-[50%] h-[100%]  flex items-center justify-center  bg-repeat  border-white border-[2px]`} 
    style={{ backgroundImage: `url('${xadrez}')`, backgroundSize: '100px' , animation: 'moveBackground 3s linear infinite'} } 
    
    initial={{ x: "-100%" }}
    animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}>
    
    
    {shouldRender && (
    
    <Canvas raycaster={true} className=" ">
    
    <CameraControls />
    <ambientLight intensity={ 1  } />
    <pointLight castShadow={false} distance={50} power={30} color="White" intensity={3} position={[5, 5, 0]} />
    
    
    <Cadeira position={[-2,1.5,0]} rotation={[Math.PI / 2, 0, -1]}/>
    
    
    </Canvas>
    
    )}
    
    <img src={btn_sejavip} className="w-[20%] h-[20%]  absolute hover:scale-90 transition-transform transform-gpu ms-[500px] mb-[150px]  cursor-pointer" onMouseOver={(e) => {
              e.currentTarget.src = btn_sejavip_pressed;
            }}
            onMouseOut={(e) => {
              e.currentTarget.src = btn_sejavip
            }}></img>
    
    
    </motion.div>
    
    <motion.div className="w-[50%]  h-[100%] bg-[#000000] text-white  flex items-center justify-center" 
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }} >
    
    <div className="flex  bg-black w-[100%] h-[100%] ms-[20px] relative  justify-center border-[2px] border-white items-center ">
    
    
    <img src={faixa_vip} className="absolute mt-[-50%]"></img>
    
    
      
    
    <div className="absolute top-0 left-0 ">
    <img src={borda} className="w-16 h-16 transform scale-x-[1]"  />
    </div>
    
    <div className="absolute top-0 right-0 ">
    <img src={borda} className="w-16 h-16 transform scale-x-[-1]"  />
    </div>
    
    <div className="absolute bottom-0 left-0 ">
    <img src={borda} className="w-16 h-16 transform scale-y-[-1] scale-x-[1]"  />
    </div>
    
    <div className="absolute bottom-0 right-0 ">
    <img src={borda} className="w-16 h-16 transform scale-y-[-1] scale-x-[-1]"  />
    </div>
    
    <div className="text-center">
    
    
    <motion.p
            className="text-center ml-[50px] mr-[50px] mt-[100px] text-3xl font-quantico"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span dangerouslySetInnerHTML={{ __html: typedText }} />
          </motion.p>
    
    </div>
    
    
    
    </div>
    
    
    </motion.div>
    
    
    
    </motion.div>
    
    
    
    </div>


  )
}

export default VipHero
