'use client';

import { useEffect, useRef, useState } from 'react';

export default function Captcha({ onValidChange }: { onValidChange: (valid: boolean) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [code, setCode] = useState('');
  const [userInput, setUserInput] = useState('');

  const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTWXYZabcdefghjkmnpqrstwxyz0123456789';
    let newCode = '';
    for (let i = 0; i < 4; i++) {
      newCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(newCode);
    drawCode(newCode);
  };

  const drawCode = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#E3E3E3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = 'bold 23px Arial';
    ctx.fillStyle = '#2F373B';

    for (let i = 0; i < text.length; i++) {
      const x = 20 + i * 30;
      const y = 25 + Math.random() * 10 - 5;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.3);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    // Add some noise
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.3})`;
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
    }
  };

  useEffect(() => {
    generateCode();
  }, []);

  useEffect(() => {
    const isValid = userInput.toLowerCase() === code.toLowerCase();
    onValidChange(isValid);
  }, [userInput, code, onValidChange]);

  const handleRefresh = () => {
    generateCode();
    setUserInput('');
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      <canvas
        ref={canvasRef}
        width={300}
        height={40}
        onClick={handleRefresh}
        style={{ cursor: 'pointer', marginBottom: '8px', display: 'block' }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Digite o código acima"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ marginTop: '8px' }}
      />
    </div>
  );
}

