import { Text } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

const MarsContent = () => {
  const { width } = useThree((state) => state.viewport)
  return (
    <group position={[width / 10,1,9]}>
        <Text font='/Kanit-Regular.ttf' fontSize={width / 80} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
         {`Mars Rover Photos`}
        </Text>
    </group>
  )
}

export default MarsContent