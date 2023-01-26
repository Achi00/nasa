import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Satellite(props) {
  const { nodes, materials } = useGLTF("/models/satellite.glb");
  const satelliteRef = useRef()

  useFrame(() => {
    satelliteRef.current.rotation.y += 0.001
    satelliteRef.current.rotation.x += 0.001
    satelliteRef.current.rotation.z += 0.0015
  })
  return (
    // <group>
    <group ref={satelliteRef} position={[1,0,10]} scale={0.3} rotation={[0,-Math.PI / 2,0]} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat_Solar_Panels_0.geometry}
        material={materials.Solar_Panels}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat002_Solar_Panels_0.geometry}
        material={materials.Solar_Panels}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel_Panel2_0.geometry}
        material={materials.Panel2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel_Panel3_0.geometry}
        material={materials.Panel3}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhandle__0.geometry}
        material={materials.panelhandle__0}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhole_Screws_0.geometry}
        material={materials.Screws}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel001_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel002_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel003_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel001_Panel2_0.geometry}
        material={materials.Panel2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel001_Panel3_0.geometry}
        material={materials.Panel3}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhandle001__0.geometry}
        material={materials.panelhandle__0}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhole001_Screws003_0.geometry}
        material={materials["Screws.003"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel004_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel005_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel006_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel007_Solar_Boards_2_0.geometry}
        material={materials.Solar_Boards_2}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel002_Panel2001_0.geometry}
        material={materials["Panel2.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel002_Panel3001_0.geometry}
        material={materials["Panel3.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhandle002__0.geometry}
        material={materials.panelhandle__0}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhole002_Screws004_0.geometry}
        material={materials["Screws.004"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel008_Solar_Boards_2001_0.geometry}
        material={materials["Solar_Boards_2.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel009_Solar_Boards_2001_0.geometry}
        material={materials["Solar_Boards_2.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel010_Solar_Boards_2001_0.geometry}
        material={materials["Solar_Boards_2.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel011_Solar_Boards_2001_0.geometry}
        material={materials["Solar_Boards_2.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel003_Panel2002_0.geometry}
        material={materials["Panel2.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel003_Panel3002_0.geometry}
        material={materials["Panel3.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhandle003__0.geometry}
        material={materials.panelhandle__0}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panelhole003_Screws005_0.geometry}
        material={materials["Screws.005"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel012_Solar_Boards_2002_0.geometry}
        material={materials["Solar_Boards_2.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel013_Solar_Boards_2002_0.geometry}
        material={materials["Solar_Boards_2.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel014_Solar_Boards_2002_0.geometry}
        material={materials["Solar_Boards_2.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.solarpanel015_Solar_Boards_2002_0.geometry}
        material={materials["Solar_Boards_2.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_Copper_Panel_0.geometry}
        material={materials.Copper_Panel}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel_Copper_Panel_0.geometry}
        material={materials.Copper_Panel}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel001_Copper_Panel_0.geometry}
        material={materials.Copper_Panel}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel002_Copper_Panel001_0.geometry}
        material={materials["Copper_Panel.001"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.panel003_Copper_Panel002_0.geometry}
        material={materials["Copper_Panel.002"]}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat_Cubesat_Base_0.geometry}
        material={materials.Cubesat_Base}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat001_Cubesat_Base_0.geometry}
        material={materials.Cubesat_Base}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat002_Cubesat_Base_0.geometry}
        material={materials.Cubesat_Base}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat_Panel_0.geometry}
        material={materials.Panel}
        position={[-1.5, 0.26, 3.39]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubesat002_Panel_0.geometry}
        material={materials.Panel}
        position={[-1.5, 0.26, 3.39]}
      />
    </group>
  );
}

useGLTF.preload("/models/satellite.glb");
