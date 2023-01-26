import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Effects } from '../Effects'
import Lights from '../Lights'
import MarsStar from '../space/MarsStar'
import MarsContent from '../content/MarsContent'

const MarsThree = () => {
  return (
    <Canvas style={{borderRadius: '25px'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <MarsContent />
      <MarsStar />
      <Lights />
      <Effects />
    </Canvas>
  )
}

export default MarsThree