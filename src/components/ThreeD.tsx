"use client";

import React, { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Vector3 } from "three";

const vec1 = new Vector3();
const vec2 = new Vector3();

const Three = ({
  pointerStatus,
  canvasRef,
}: {
  pointerStatus: boolean;
  canvasRef: any;
}) => {
  const prof = useTexture("/profile.png");
  const mouse = useThree((state) => state.mouse);
  const camera = useThree((state) => state.camera);
  const lightRef = useRef<any>();

  useFrame(({ clock }) => {
    // lightRef.current.position.x = mouse.x * -3;
    // lightRef.current.position.y = mouse.y * -3;

    // if(!pointerStatus) {
    //   lightRef.current.position.x = 0;
    //   lightRef.current.position.y = 0;
    // }

    // With Smooth Transitions
    vec1.set(mouse.x * -3, mouse.y * -3, 15);
    if (!pointerStatus) vec1.set(0, 0, 19);
    lightRef.current.position.lerp(vec1, 0.1);

    // To Dynamically Change Sphere Visibility
    let size = Math.abs(canvasRef.current.scrollWidth / 100 - 9.7);
    vec2.set(0, 0, size);
    camera.position.lerp(vec2, 0.5);
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        position={[0, 0, 10]}
        intensity={990}
        penumbra={2}
        angle={0.118}
        decay={2}
        distance={500}
        map={prof}
      />
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial color="white" />
      </mesh>
    </>
  );
};

const Canva = () => {
  const [pointerStatus, setPointerStatus] = useState(false);
  const canvasRef = useRef<any>();

  return (
    <Canvas
      ref={canvasRef}
      className="hidden md:block rounded-xl border text-card-foreground shadow bg-primary/5 relative w-full h-full max-w-[32rem]"
      onPointerEnter={(e) => setPointerStatus(true)}
      onPointerLeave={(e) => setPointerStatus(false)}>
      {/* <ambientLight intensity={0.1} /> */}
      {/* <pointLight position={[0, 0, 1]} /> */}
      <Three pointerStatus={pointerStatus} canvasRef={canvasRef} />
    </Canvas>
  );
};

export default Canva;
