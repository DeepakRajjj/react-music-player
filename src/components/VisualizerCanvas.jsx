import React, { useEffect, useRef } from 'react';

export default function VisualizerCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bars = 50;
    const barWidth = canvas.width / bars;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < bars; i++) {
        const height = Math.random() * canvas.height * 0.8;
        const x = i * barWidth;
        const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
        gradient.addColorStop(0, 'rgba(239, 68, 68, 0.2)');
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0.8)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvas.height - height, barWidth - 2, height);
      }
      
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={50}
      className="opacity-50"
    />
  );
}