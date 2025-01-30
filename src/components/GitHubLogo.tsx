
import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useRef } from 'react';
import * as THREE from 'three';

const GitHubLogo = (props:any) => {
  const { nodes, materials } = useGLTF('/models/3d_github_logo.glb')
  const targetRef = useRef<any>(null);

   useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position,
        {
          y:targetRef.current.position.y + 0.5,
          duration: 1.5,
          repeat: -1,
          yoyo: true
        }
      )
    }
  })

  return (
    <>
      <pointLight intensity={70} position={[-10, -9, 5]} color="#ffffff" />
      <group {...props} dispose={null} ref={targetRef}>
        <group position={[2, 0.945, 6.336]} rotation={[Math.PI / 2, 0, 0]} scale={35.364}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_4 as THREE.Mesh).geometry}
            material={materials.glossy_putih}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_5 as THREE.Mesh).geometry}
            material={materials.github}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models/3d_github_logo.glb')
export default GitHubLogo