import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import Sun from './Sun'
import { MarsLand } from './Mars-Land'
import { Stars } from '@react-three/drei'

const MarsStar = () => {
    const starRef = useRef()
    const spaceRef = useRef()

    useFrame(() => {
      starRef.current.rotation.y += 0.0001
    //   spaceRef.current.rotation.z += 0.0004
    })
  return (
    <>
    <mesh ref={starRef}>
      <Stars radius={200} depth={10} count={5000} factor={1} saturation={10} speed={1} />
    </mesh>
    <Sun />
    <MarsLand />
    </>
  )
}

export default MarsStar