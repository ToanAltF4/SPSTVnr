'use client';

import { useEffect, useState } from 'react';
import { SECTIONS } from '@/data/sections';

/**
 * Thanh dieu huong dinh dau trang.
 *  - Thanh tien do doc trang chinh la "vi tuyen 17"
 *  - Bam vao tung muc de nhay thang toi phan do
 *  - Tu highlight muc dang xem khi cuon (scroll spy)
 */
export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(SECTIONS[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setShow(window.scrollY > window.innerHeight * 0.62);

        // Scroll spy: muc nao co dinh gan mep tren nhat thi dang xem
        const line = window.innerHeight * 0.34;
        let current = SECTIONS[0].id;
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (el && el.getBoundingClientRect().top <= line) current = s.id;
        }
        setActive(current);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const jump = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <>
      <div className="progress" role="progressbar" aria-label="Tiến độ đọc" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100}>
        <i style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="nav" data-show={show} aria-label="Điều hướng các mục">
        <a className="mark" href="#top" onClick={(e) => jump(e, 'top')}>
          <i /> Vĩ tuyến 17
        </a>

        <button
          className="navtoggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Đóng' : 'Mục lục'}
        </button>

        <div className="navlinks" data-open={open}>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              className="navlink"
              href={`#${s.id}`}
              data-on={active === s.id}
              style={{ '--c': s.color }}
              onClick={(e) => jump(e, s.id)}
            >
              {s.nav}
            </a>
          ))}
          <a className="navcta" href="/trinh-chieu/">Chế độ trình chiếu</a>
        </div>
      </nav>
    </>
  );
}
