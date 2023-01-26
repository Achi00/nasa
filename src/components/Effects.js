import { useLoader } from '@react-three/fiber'
import { EffectComposer, SSR, Bloom, LUT, DepthOfField } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { LUTCubeLoader } from 'postprocessing'

export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube')
  return (
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={2} />
        <LUT lut={texture} />
        <DepthOfField target={[0, 0, 0]} focalLength={2} bokehScale={10} height={1000} />
      </EffectComposer>
  )
}
