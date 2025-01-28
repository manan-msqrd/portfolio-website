
import gsap from 'gsap';
import * as THREE from 'three';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = ({ ...props }) => {
  const { nodes, materials }: any = useGLTF('models/react.glb');
  const cubeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (cubeRef.current) {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(cubeRef.current.rotation, {
          y: hovered ? '+=2' : `+=${Math.PI * 2}`,
          x: hovered ? '+=2' : `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        });
    }
  });

  return (
    <Float floatIntensity={2}>
      <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.4} dispose={null} {...props}>
        <mesh
            geometry={(nodes['React-Logo_Material002_0'] as THREE.Mesh).geometry}
            material={materials['Material.002']}
            position={[0, 0.79, 0.181]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.39, 0.39, 0.]}
          ref={cubeRef}
          castShadow
          receiveShadow
        //   geometry={nodes.Cube.geometry}
        //   material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}>
          {/* <meshMatcapMaterial matcap={texture} toneMapped={false} /> */}
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;