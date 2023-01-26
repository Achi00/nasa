import { Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Moon } from './Moon'
import Sun from './Sun'

const Star = () => {
    const starRef = useRef()
    const spaceRef = useRef()

    useFrame(() => {
      starRef.current.rotation.z += 0.0005
      spaceRef.current.rotation.z += 0.0004
    })
  return (
    <>
    <mesh ref={starRef}>
      <Stars radius={200} depth={10} count={5000} factor={1} saturation={10} speed={1} />
    </mesh>
    <mesh ref={spaceRef}>
    <Moon position={[2, 1, 7]} scale={2}/>
    <Sun />
    </mesh>
    </>
  )
}

export default Star