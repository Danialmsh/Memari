'use client';
import { useState } from 'react';

export default function ImageCarousel({ images }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setI((p) => (p + 1) % images.length);

  return (
    <div className="carousel-box">
      <img src={images[i]} alt={`slide-${i}`} />
      <button onClick={prev} className="carousel-nav left">‹</button>
      <button onClick={next} className="carousel-nav right">›</button>
    </div>
  );
}
