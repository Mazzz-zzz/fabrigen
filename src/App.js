import './App.css';
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from 'three';
import Image from 'image-js';
import { MeshBasicMaterial } from 'three';




function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  const newtexture = useLoader(TextureLoader, "texture1.jpg");
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={newtexture} color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}



function App() {
  return (
    <div className="App">
      <div className='CanvasContainer'>
        <Canvas width="100px" className='MainCanvas' >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
          <Suspense fallback={null}>
            <Model position={[0, -1, 3]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export function Model(props) {
  const { nodes, materials } = useGLTF("/glb4.glb");
  const newtexture = useLoader(TextureLoader, "texture1.jpg");
  const newmaterial = new THREE.MeshPhysicalMaterial({ map: newtexture});


  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.MatShape_4391_Node.geometry}
        material={materials.Material1389666}
        position={[0, 1.56, 0.04]}
        rotation={[1.81, 0.25, -0.02]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8762_Node.geometry}
        material={materials.Material647667}
        position={[0, 1.51, 0.06]}
        rotation={[1.15, -0.1, -0.08]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8770_Node.geometry}
        material={materials.Material647667}
        position={[0, 1.41, 0.09]}
        rotation={[1.22, -0.09, -0.14]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8778_Node.geometry}
        material={materials.Material647667}
        position={[0, 1.21, 0.13]}
        rotation={[1.35, -0.07, -0.49]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8786_Node.geometry}
        material={materials.Material647667}
        position={[0, 1.31, 0.11]}
        rotation={[1.39, -0.07, -0.2]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8794_Node.geometry}
        material={materials.Material647667}
        position={[-0.01, 1, 0.14]}
        rotation={[1.35, -0.02, -0.13]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_8802_Node.geometry}
        material={materials.Material647667}
        position={[-0.01, 1.1, 0.14]}
        rotation={[1.62, 0.09, 0.69]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_16887_Node.geometry}
        material={materials.Material643570}
        position={[-0.52, 1.14, -0.03]}
        rotation={[1.29, -0.62, 2.34]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_16895_Node.geometry}
        material={materials.Material643570}
        position={[0.52, 1.13, -0.03]}
        rotation={[1.26, 0.62, -2.37]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_17178_Node.geometry}
        material={materials.Material655120}
        position={[0.56, 1.08, -0.01]}
        rotation={[1.22, 0.52, -2.45]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_17186_Node.geometry}
        material={materials.Material655120}
        position={[-0.56, 1.08, -0.01]}
        rotation={[1.2, -0.55, 2.38]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.MatShape_18763_Node.geometry}
        material={materials.Material624886}
        position={[-0.06, 1.09, 0.13]}
        rotation={[1.87, 0, -0.32]}
        scale={[1.43, 1, 1.43]}
      />
      <mesh
        geometry={nodes.MatShape_18771_Node.geometry}
        material={materials.Material624886}
        position={[0.01, 1.09, 0.13]}
        rotation={[1.72, -0.01, -0.37]}
        scale={[1.43, 1, 1.43]}
      />
      <mesh
        geometry={nodes.MatShape_1348_Node.geometry}
        material={materials.Material1352}
        position={[-0.06, 0.96, 0.13]}
        rotation={[0.14, 0.84, 2.96]}
        scale={[1.36, 1.44, 1.57]}
      />
      <mesh
        geometry={nodes.MatShape_854834_Node.geometry}
        material={materials.Material854838}
        position={[0.01, 0.96, 0.13]}
        rotation={[0.13, 0.77, 3.09]}
        scale={[1.36, 1.44, 1.57]}
      />
      <mesh
        geometry={nodes.StitchMatShape_53483_Node.geometry}
        material={materials.Material3279}
      />
      <mesh
        geometry={nodes.StitchMatShape_53591_Node.geometry}
        material={materials.Material3279}
      />
      <mesh
        geometry={nodes.StitchMatShape_53801_Node.geometry}
        material={materials.Material3279}
      />
      <mesh
        geometry={nodes.StitchMatShape_54011_Node.geometry}
        material={materials.Material3279}
      />
      <mesh
        geometry={nodes.StitchMatShape_54052_Node.geometry}
        material={materials.Material3412}
      />
      <mesh
        geometry={nodes.StitchMatShape_54087_Node.geometry}
        material={materials.Material3412}
      />
      <mesh
        geometry={nodes.StitchMatShape_54137_Node.geometry}
        material={materials.Material3412}
      />
      <mesh
        geometry={nodes.StitchMatShape_54172_Node.geometry}
        material={materials.Material3412}
      />
      <mesh
        geometry={nodes.Collar_Stand_Node.geometry}
        material={materials.Collar_FRONT_2933}
      />
      <mesh
        geometry={nodes.Collar_Node.geometry}
        material={materials.Collar_FRONT_2933}
      />
      <mesh
        geometry={nodes.Body_Front_Node.geometry}
        material={materials.Body_F_FRONT_2938}
      />
      <mesh
        geometry={nodes.Body_Front_Node_1.geometry}
        material={newmaterial}
      />
      <mesh
        geometry={nodes.Body_Back_Node.geometry}
        material={materials.Body_B_FRONT_2943}
      />
      <mesh
        geometry={nodes.Body_Back_Yoke_Node.geometry}
        material={materials.Body_B_FRONT_2943}
      />
      <mesh
        geometry={nodes.Sleeves_Placket_Node.geometry}
        material={materials.Sleeve_Placket_FRONT_2953}
      />
      <mesh
        geometry={nodes.Sleeves_Node.geometry}
        material={materials.Sleeves_FRONT_2948}
      />
      <mesh
        geometry={nodes.Sleeves_Node_1.geometry}
        material={materials.Sleeves_FRONT_2948}
      />
      <mesh
        geometry={nodes.Sleeves_Placket_Node_1.geometry}
        material={materials.Sleeve_Placket_FRONT_2953}
      />
      <mesh
        geometry={nodes.Cuffs_Node.geometry}
        material={materials.Cuffs_FRONT_2958}
      />
      <mesh
        geometry={nodes.Cuffs_Node_1.geometry}
        material={materials.Cuffs_FRONT_2958}
      />
      <mesh
        geometry={nodes["ВПояс_бр-96-170178_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВЗаднполбрюк-96-170176_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВПередняя_половинка_брюк-96-170176_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВМанжета_бр-96-170176_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["Карман_1-96-170176_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["Карман_2-96-170176_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВЗаднполбрюк-96-170177_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВПередняя_половинка_брюк-96-170177_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВМанжета_бр-96-170177_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["Карман_2-96-170177_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["Карман_1-96-170177_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВПояс_бр-96-170179_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВПояс_бр-96-170180_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes["ВПояс_бр-96-170181_Node"].geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes.Pattern_662984_Node.geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes.Pattern_662985_Node.geometry}
        material={materials.Pants_FRONT_47919}
      />
      <mesh
        geometry={nodes.MatShape_53339_Node.geometry}
        material={materials.PT_FABRIC_FRONT_3081}
      />
      <primitive object={nodes.Joint} />
      <primitive object={nodes.body} />
      <primitive object={nodes.eye_L} />
      <primitive object={nodes.eye_R} />
      <primitive object={nodes.eyelash_L} />
      <primitive object={nodes.eyelash_R} />
      <primitive object={nodes.tooth} />
    </group>
  );
}

export default App;
