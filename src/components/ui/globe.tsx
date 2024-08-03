"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    let phi = 0;

    const resizeGlobe = () => {
      if (!canvasRef.current) {
        console.error("Canvas ref is not available");
        return;
      }

      const width = canvasRef.current.parentElement?.clientWidth || 600;
      const height = width;

      canvasRef.current.width = width * 2;
      canvasRef.current.height = height * 2;

      if (globeRef.current) {
        globeRef.current.destroy();
      }

      try {
        globeRef.current = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width * 2,
          height: height * 2,
          phi: 0,
          theta: 0,
          dark: resolvedTheme === "dark" ? 0 : 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [1, 1, 1],
          markerColor: [1, 0.4, 0.1],
          glowColor: resolvedTheme === "dark" ? [1, 1, 1] : [0, 0, 0],
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
        console.log("Globe created successfully");
      } catch (error) {
        console.error("Error creating globe:", error);
      }
    };

    resizeGlobe();

    resizeObserverRef.current = new ResizeObserver(() => {
      resizeGlobe();
    });

    if (canvasRef.current?.parentElement) {
      resizeObserverRef.current.observe(canvasRef.current.parentElement);
    }

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
      }
      if (resizeObserverRef.current && canvasRef.current?.parentElement) {
        resizeObserverRef.current.unobserve(canvasRef.current.parentElement);
      }
    };
  }, [resolvedTheme]);

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
