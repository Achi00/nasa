import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Moon(props) {
  const { nodes, materials } = useGLTF("/models/the_moon.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Material__50}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/the_moon.glb");