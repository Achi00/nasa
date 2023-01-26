import { Canvas } from '@react-three/fiber'
import Lights from '../Lights'
import ApodStar from '../space/ApodStar'
import { Effects } from '../Effects'
import React from 'react'
import { Float, Gltf } from '@react-three/drei'
import HomeContent from '../content/HomeContent'

const HomeThree = () => {
  return (
    <Canvas style={{borderRadius: '25px'}} gl={{ logarithmicDepthBuffer: true, antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
      <color attach="background" args={['#15151a']} />
      <ApodStar />
      <Lights />
      <Effects />
      <Float
        speed={0.1} 
        rotationIntensity={0.2}
        floatIntensity={0.1} 
        floatingRange={[0.1, 0.3]}
      >
      <group position={[-0.7, 0.1, 13]} rotation={[-1, 0, -1]}>
        <Gltf src="/models/falcon.glb" scale={0.1}  receiveShadow castShadow />
    </group>
    </Float>
    <HomeContent />
  </Canvas>
  )
}

export default HomeThree