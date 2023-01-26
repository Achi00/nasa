import { Canvas } from '@react-three/fiber'
import React from 'react'
import ApodContent from '../content/ApodContent'
import { Effects } from '../Effects'
import { Satellite } from '../space/Satellite'
import Star from '../space/ApodStar'
import Lights from '../Lights'

const Three = () => {
  return (
    <Canvas style={{borderRadius: '25px'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <ApodContent />
      <Star />
      <Satellite />
      <Lights />
      <Effects />
    </Canvas>
  )
}

export default Three