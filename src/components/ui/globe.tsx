"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const resizeGlobe = () => {
      if (!canvasRef.current) return;

      const width = canvasRef.current.parentElement?.clientWidth || 600;
      const height = width;

      if (canvasRef.current) {
        canvasRef.current.width = width * 2;
        canvasRef.current.height = height * 2;
      }

      createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
        phi: 0,
        theta: 0,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [1, 1, 1],
        markerColor: [1, 0.4, 0.1],
        glowColor: [1, 1, 1],
        markers: [
          // longitude latitude
          { location: [37.7595, -122.4367], size: 0.07 },
          { location: [40.7128, -74.006], size: 0.07 },
          { location: [19.076, 72.8777], size: 0.1 },
          { location: [52.52, 13.405], size: 0.07 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.01;
        },
      });
    };

    resizeGlobe();
    window.addEventListener("resize", resizeGlobe);

    return () => {
      window.removeEventListener("resize", resizeGlobe);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: 1,
      }}
      className={className}
    />
  );
};
