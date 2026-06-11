'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * CursorArrow, draws a branded amber curved arrow from the cursor
 * to any element marked with data-cursor-target="true".
 * Drop this anywhere in a layout; it paints on a fixed full-screen canvas.
 */
export default function CursorArrow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const rafRef = useRef<number | null>(null);

  const drawArrow = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const target = document.querySelector('[data-cursor-target]') as HTMLElement | null;
    if (!target) return;

    const { x: x0, y: y0 } = mouseRef.current;
    if (x0 === null || y0 === null) return;

    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    // Arrow tip stops just outside the target border
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 14);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 14);

    const dist = Math.hypot(x1 - x0, y1 - y0);
    const minDist = Math.max(rect.width, rect.height) * 0.6;
    const opacity = Math.min(0.85, Math.max(0, (dist - minDist) / 420));

    if (opacity <= 0.01) return;

    // Curved control point, bows the arrow
    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(180, dist * 0.45);
    const tilt = Math.max(-1, Math.min(1, (y0 - y1) / 220));
    const controlX = midX;
    const controlY = midY + offset * tilt;

    // ── Arrow line ────────────────────────────────────────────────
    ctx.save();
    ctx.strokeStyle = `rgba(245,166,35,${opacity})`; // Brand amber
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.setLineDash([10, 6]);
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.stroke();
    ctx.restore();

    // ── Arrowhead ─────────────────────────────────────────────────
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLen = 13;
    ctx.save();
    ctx.strokeStyle = `rgba(245,166,35,${opacity})`;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLen * Math.cos(angle - Math.PI / 6),
      y1 - headLen * Math.sin(angle - Math.PI / 6),
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLen * Math.cos(angle + Math.PI / 6),
      y1 - headLen * Math.sin(angle + Math.PI / 6),
    );
    ctx.stroke();
    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      // Only track mouse when inside the hero section
      const hero = document.querySelector('[data-hero-section]') as HTMLElement | null;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom && e.clientX >= rect.left && e.clientX <= rect.right) {
          mouseRef.current = { x: e.clientX, y: e.clientY };
        } else {
          mouseRef.current = { x: null, y: null };
        }
      } else {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }
    };
    const loop = () => {
      drawArrow();
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawArrow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 45 }}
    />
  );
}
