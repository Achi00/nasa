import { useThree } from '@react-three/fiber'
import { Text, Image } from '@react-three/drei'
import React from 'react'
import Img1 from '../../img/1.jpg'
import Img2 from '../../img/2.jpg'

const HomeContent = () => {
    const { width } = useThree((state) => state.viewport)
    return (
      <group position={[width / 10,0,9]}>
          <Text font='/Kanit-Regular.ttf' fontSize={width / 80} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
           {`Explore Newest \nPhotos, Technology\nand Inovations \nFrom Nasa`}
          </Text>
          <Text position={[-width / 4,1.1,0]} font='/Kanit-Regular.ttf' fontSize={width / 80} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
           {`Nasa / Space X`}
          </Text>
          <Text position={[-width / 5,0,0]} font='/Kanit-Regular.ttf' fontSize={width / 80} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
           {`Powered by NASA API`}
          </Text>
          <Image url={Img1} position={[-width / 8, -0.1, 5]} scale={width / 100}/>
          <Image url={Img2} position={[-width / 9, -0.1, 5]} scale={width / 100}/>
      </group>
    )
}

export default HomeContent