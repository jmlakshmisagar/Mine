'use client';

import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        if (!isVisible) {
          cursor.style.opacity = '1';
          isVisible = true;
        }
        requestAnimationFrame(() => {
          if (cursor instanceof HTMLElement) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
          }
        });
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

    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = {
        'ArrowUp': 'top',
        'ArrowRight': 'right',
        'ArrowDown': 'bottom',
        'ArrowLeft': 'left'
      };

      if (e.key === 'Escape') {
        const closeButton = document.querySelector('.close-button') as HTMLElement;
        if (closeButton) {
          closeButton.click();
        }
        return;
      }

      const direction = sections[e.key as keyof typeof sections];
      if (direction) {
        const arrowElement = document.querySelector(`.arrow-${direction}`) as HTMLElement;
        if (arrowElement) {
          arrowElement.click();
        }
      }
    };

    // Optimize by using passive listeners where possible
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}