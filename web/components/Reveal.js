'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Boc noi dung de no truot len khi cuon toi.
 * Dung IntersectionObserver, chi kich hoat mot lan.
 *
 * @param {number} delay - do tre (ms) de xep tang khi nhieu phan tu canh nhau
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ton trong nguoi dung tat hieu ung chuyen dong
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSeen(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`rv ${className}`}
      data-in={seen}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
