import React, { useEffect, useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { Canvas, useThree,useFrame  } from '@react-three/fiber';
import {Vector2, Vector3, Raycaster,Euler } from 'three';

export function Cadeira(props) {

  const { camera } = useThree();
  const modelRef = useRef();
  const raycasterRef = useRef(new Raycaster());
  const mousePosition = useRef(new Vector2());
  const targetRotation = useRef(new Euler());

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    raycasterRef.current.setFromCamera(mousePosition.current, camera);
    const intersects = raycasterRef.current.intersectObject(modelRef.current);

    if (intersects.length > 1) {
      const intersectionPoint = intersects[0].point;
      targetRotation.current.x = intersectionPoint.y * 0.15;
      targetRotation.current.y = intersectionPoint.x * 0.15;
    } else {
      targetRotation.current.x *= 0.95;
      targetRotation.current.y *= 0.95;
    }

    targetRotation.current.x = Math.max(-0.5, Math.min(targetRotation.current.x, 0.5));
    targetRotation.current.y = Math.max(-0.5, Math.min(targetRotation.current.y, 0.5));

    modelRef.current.rotation.x += (targetRotation.current.x - modelRef.current.rotation.x) * 0.05;
    modelRef.current.rotation.y += (targetRotation.current.y - modelRef.current.rotation.y) * 0.05;
  });

  const { nodes, materials } = useGLTF("./Cadeira.glb");
  return (

    <group ref={modelRef} >
    <group {...props} dispose={null} >
        
      <group   scale={0.01} >
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.ArmHolderBackL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArmHolderBackR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArmHolderFrontL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArmHolderFrontR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArmRestL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ArmRestR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Back_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 0, 1.44198596]}
          scale={[1.01411998, 1, 1.01411998]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCylinderL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackCylinderR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackSupportL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackSupportR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BaseTorus_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 0, -6.46636724]}
          scale={[5.47268486, 5.47268486, 6.06322622]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest1_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -3.70322299, -1.70999146]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest1Cushion_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -4.79444408, -1.76851261]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest2_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 39.60449982, 0.61256254]}
          rotation={[0.05357762, 0, 0]}
          scale={[45.8978157, 20.46121025, 47.21818542]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest2HolderL_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -3.70322299, -1.70999146]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest2HolderR_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -3.70322299, -1.70999146]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest3_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 76.44750214, -22.06505013]}
          rotation={[-0.25248148, 0, 0]}
          scale={[36.94224167, 24.157547, 4.11650324]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest3HolderL_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -3.70322299, -1.70999146]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footrest3HolderR_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -3.70322299, -1.70999146]}
          rotation={[0.0535776, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCylinderL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCylinderR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontSupportL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontSupportR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeadRest_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeadRestBase_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, -39.33731461, -132.43127441]}
          scale={[8.3167429, 2.11215067, 16.96956253]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lever_low.geometry}
          material={materials.BarberShopChair_01}
        />
           <mesh
      castShadow
      receiveShadow
      geometry={nodes.LeverCylinder_low.geometry}
      position={[-22.78879929, 0, -40.77973938]}
      rotation={[0, 1.57053468, 0]}
      scale={[1.43795037, 1.43795037, 15.99733543]}
    >
      <meshStandardMaterial
        color="black"
        metalness={0.5} // Ajuste esse valor para controlar o reflexo metálico (0 a 1)
        roughness={0.5} // Ajuste esse valor para controlar o brilho da superfície (0 a 1)
      />
    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MainCylinder_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 0, -25.74066162]}
          scale={[10.71728134, 10.71728134, 21.68713188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OrnamHolderL_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OrnamHolderR_low.geometry}
          material={materials.BarberShopChair_01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seat_low.geometry}
          material={materials.BarberShopChair_01}
          position={[0, 112.65394592, -108.0761795]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.10205007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SeatBase_low.geometry}
          material={materials.BarberShopChair_01}
        />
      </group>
    </group>
    </group>

  );
}

useGLTF.preload("./Cadeira.glb");