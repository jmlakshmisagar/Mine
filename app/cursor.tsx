'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    const handleMouseDown = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
    };

    const handleMouseUp = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return null;
}