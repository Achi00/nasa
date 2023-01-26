
import React, { Suspense, useRef } from "react";
import { BakeShadows, Gltf, useGLTF } from "@react-three/drei";

export function MarsLand(props) {
  const { nodes, materials } = useGLTF("/models/mars-land.glb");
  return (
    <Suspense>
    <group position={[-1.4, -2.2, 7]} rotation={[0, -0.55, 0]}>
      <group scale={1} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material}
        position={[-3.21, 3.01, -3.65]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mars_mars_0.geometry}
        material={materials.mars}
      />
    </group>
    <group position={[2.5, 2.4, 2.5]}>
        <Gltf src="/models/nexus.glb" scale={0.002} receiveShadow castShadow />
    </group>
    </group>
    <BakeShadows />
    </Suspense>
  );
}

useGLTF.preload("/models/mars-land.glb");