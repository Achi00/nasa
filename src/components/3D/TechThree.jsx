import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Effects } from '../Effects'
import { Satellite } from '../space/Satellite'
import TechStar from '../space/TechStar'
import Lights from '../Lights'
import Sun from '../space/Sun'
import TechContent from '../content/TechContent'

const TechThree = () => {
  return (
    <Canvas style={{borderRadius: '25px'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <TechContent />
      <TechStar />
      <Satellite />
      <Lights />
      <Effects />
  </Canvas>
  )
}

export default TechThree