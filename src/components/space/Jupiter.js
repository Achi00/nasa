import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Jupiter(props) {
  const { nodes, materials } = useGLTF("/models/jupiter.glb");
  const rotateRef = useRef()
  useFrame(() => {
    rotateRef.current.rotation.y +=0.002
  })
  return (
    <group ref={rotateRef} position={[0, 2, 0]} {...props} dispose={null}>
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.JUPITER_0.geometry}
      material={materials.JUPITER}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.5}
    />
  </group>
  );
}


useGLTF.preload("/models/jupiter.glb");