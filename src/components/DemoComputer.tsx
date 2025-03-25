import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useMemo, useRef } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_12: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial
  }
}
interface DemoComputerProps extends GroupProps {
  texture: string;
}

const DemoComputer = (props: DemoComputerProps) => {
  const { nodes, materials } = useGLTF('/models/demo-computer.glb') as GLTFResult
  
  const group = useRef<THREE.Group>(null);

  const customTexture = useMemo(() => {
    const texture = new THREE.TextureLoader().load(props.texture)
    // Adjust these values to control the zoom level.
    // Lower values zoom out (e.g., 0.5 means the image appears at half scale).
    texture.repeat.set(2, 2)
    // Ensure the texture wraps so that the whole image is visible
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    return texture
  }, [props.texture])

  const customMaterial = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({ map: customTexture });
    // Multiply the material's color by a factor less than 1 to darken it.
    mat.color.multiplyScalar(0.4); // Adjust 0.7 to a lower value for a darker effect.
    return mat;
  }, [customTexture]);

  useGSAP(() => {
    if (group.current) {
      gsap.from(group.current.rotation, {
        y: Math.PI / 2,
        duration: 1,
        ease: 'power3.out',
      })
    }
  }, [props.texture])

  return (
    <group {...props} dispose={null} ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.base}
        position={[-0.135, 1.001, -0.781]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.base}
        position={[-0.241, 0.102, 0.662]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.base}
        position={[0.82, 0.096, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.base}
        position={[-1.095, 0, 0.309]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.base}
        position={[0.864, 0, -1.493]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.base}
        position={[-0.241, 0.102, 0.662]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.base}
        position={[0.82, 0.096, 0.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.base}
        position={[-0.05, 0.087, -0.573]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={customMaterial} // Use your custom material here
        position={[-0.099, 0.884, -0.257]}
        scale={1.002}
      />
    </group>
  )
}

useGLTF.preload('/models/demo-computer.glb')

export default DemoComputer
