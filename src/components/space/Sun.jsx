import React from 'react'

const Sun = () => {
  return (
    <mesh position={[-40, 15, -100]} scale={2}>
      <sphereGeometry />
      <meshStandardMaterial color={[20, 20, 20]} toneMapped={false}/>
    </mesh>
  )
}

export default Sun