import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import React from 'react';

export function PythonLogo(props: any) {
  const { nodes, materials } = useGLTF('/models/python.glb')

  const pythonMaterial = materials.Python as THREE.MeshStandardMaterial;

  if (materials.Python) {
    pythonMaterial.metalness = 0.4;
    pythonMaterial.roughness = 0.4; 
  }
  
  const groupRef = React.useRef<THREE.Group>(null!)

  // Rotate the group on the Y-axis
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; // Adjust the speed of rotation here
    }
  })

  return (
    <>
      <pointLight intensity={100} position={[-20, 10, 25]} color="#ffffff" />
      <group {...props} dispose={null} ref={groupRef}>
        <group scale={0.05}>
          <mesh
            castShadow
            receiveShadow
            position={[10, -120, 0]}
            geometry={(nodes.Python_Python_0 as THREE.Mesh).geometry}
            material={materials.Python}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.6}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models/python.glb')
