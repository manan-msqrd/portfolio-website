
import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function JSLogo(props:any) {
  const { nodes, materials } = useGLTF('/models/javascript_1.glb')
  return (
    <Float floatIntensity={0.1}>
        <group {...props} dispose={null}>
        <mesh
            position={[1, -4, 0]}
            rotation={[-0.3, 0.2, Math.PI / 2]}
            scale={[0.09, 0.09, 0.5]}
            geometry={(nodes.Object_2 as THREE.Mesh).geometry}
            material={materials.mat_3220964}
        />
        </group>
    </Float>
  )
}

useGLTF.preload('/modles/javascript_1.glb')