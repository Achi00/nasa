import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const Lights = () => {
  return (
    <Environment resolution={256}>    
      {/* Sides */}
      <Lightformer intensity={20} rotation-y={Math.PI / 2} position={[-50, -2, -20]} scale={[100, 2, 1]} />
      <Lightformer intensity={10} rotation-y={-Math.PI / 2} position={[50, -2, -20]} scale={[100, 2, 1]} />
      {/* Key */}
      <Lightformer form="ring" color={[2, 2, 2]} intensity={2} scale={10} position={[-10, 5, -5]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      <Lightformer form="ring" color="white" intensity={2} scale={10} position={[-10, 5, -5]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
    </Environment>
  )
}

export default Lights