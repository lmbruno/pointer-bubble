import { useEffect, useState } from 'react';

export const FollowMouse = () => {
  const [activeBubble, setActiveBubble] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.classList.toggle('no-cursor', activeBubble);
    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [activeBubble]);
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
    if (activeBubble) {
      window.addEventListener('mousemove', handleMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, [activeBubble]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setActiveBubble(!activeBubble)}>
        Activate bubble
      </button>
    </>
  );
};
