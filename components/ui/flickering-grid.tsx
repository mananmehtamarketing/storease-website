'use client';

import React, { useEffect, useRef, useCallback } from 'react';

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = 'rgb(0, 0, 0)',
  width,
  height,
  className,
  maxOpacity = 0.3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const opacitiesRef = useRef<Float32Array | null>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  const parseColor = useCallback((colorStr: string) => {
    const temp = document.createElement('canvas');
    temp.width = temp.height = 1;
    const ctx = temp.getContext('2d')!;
    ctx.fillStyle = colorStr;
    ctx.fillRect(0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    return { r: data[0], g: data[1], b: data[2] };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalSize = squareSize + gridGap;
    let rgb = { r: 245, g: 166, b: 35 };

    try {
      rgb = parseColor(color);
    } catch {}

    const setupGrid = () => {
      const w = width || canvas.parentElement?.offsetWidth || 400;
      const h = height || canvas.parentElement?.offsetHeight || 400;
      canvas.width = w;
      canvas.height = h;
      colsRef.current = Math.ceil(w / totalSize);
      rowsRef.current = Math.ceil(h / totalSize);
      opacitiesRef.current = new Float32Array(colsRef.current * rowsRef.current);
      // Initialize with low random opacities
      for (let i = 0; i < opacitiesRef.current.length; i++) {
        opacitiesRef.current[i] = Math.random() * maxOpacity * 0.5;
      }
    };

    setupGrid();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let lastTime = 0;
    const animate = (time: number) => {
      const delta = time - lastTime;
      if (delta < 16) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      const opacities = opacitiesRef.current;
      if (!opacities) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const cols = colsRef.current;
      const rows = rowsRef.current;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i + j * cols;

          // Random flicker
          if (Math.random() < flickerChance * 0.05) {
            opacities[idx] = Math.random() * maxOpacity;
          } else {
            // Slow decay
            opacities[idx] *= 0.98;
          }

          // Mouse influence
          const cx = i * totalSize + squareSize / 2;
          const cy = j * totalSize + squareSize / 2;
          const dx = cx - mx;
          const dy = cy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 120);
          const boosted = Math.max(opacities[idx], influence * maxOpacity * 2.5);

          if (boosted > 0.005) {
            ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${boosted})`;
            ctx.fillRect(i * totalSize, j * totalSize, squareSize, squareSize);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => {
      setupGrid();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current !== undefined) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity, width, height, parseColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    />
  );
};

export default FlickeringGrid;
