'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES, getSections } from '@/data/slides';
import '@/app/deck.css';

const SECS = getSections();
const NAME = {
  A: 'A · Mở đầu & Đặt vấn đề',
  B: 'B · Bóc trần thủ đoạn',
  C: 'C · Mục đích & Hệ quả',
  D: 'D · Sự lãnh đạo của Đảng',
};
const COLOR = { A: 'var(--m-a)', B: 'var(--m-b)', C: 'var(--m-c)', D: 'var(--m-d)' };

export default function Deck() {
  const [i, setI] = useState(0);
  const [ov, setOv] = useState(false);
  const [notes, setNotes] = useState(false);
  const [t, setT] = useState(0);
  const [running, setRunning] = useState(false);
  const touch = useRef(null);

  const s = SLIDES[i];
  const go = useCallback((n) => setI(Math.max(0, Math.min(SLIDES.length - 1, n))), []);

  /* Dong ho tap noi — muc tieu 20 phut */
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setT((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  /* Ban phim */
  useEffect(() => {
    const onKey = (e) => {
      const k = e.key;
      if (k === 'Escape') { setOv(false); setNotes(false); return; }
      if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); go(i + 1); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(i - 1); }
      else if (k === 'Home') go(0);
      else if (k === 'End') go(SLIDES.length - 1);
      else if (k === 'o' || k === 'O') setOv((v) => !v);
      else if (k === 's' || k === 'S') setNotes((v) => !v);
      else if (k === 't' || k === 'T') setRunning((v) => !v);
      else if (k === 'f' || k === 'F') {
        document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [i, go]);

  const mm = String(Math.floor(t / 60)).padStart(2, '0');
  const ss = String(t % 60).padStart(2, '0');
  const state = !running && t === 0 ? 'idle' : t >= 1200 ? 'over' : t >= 1020 ? 'warn' : 'run';

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="parallel"><i style={{ width: `${((i + 1) / SLIDES.length) * 100}%` }} /></div>

      {/* Thanh dieu huong theo muc */}
      <div className="topbar">
        <div className="brand">
          <span>VNR202 · Chương 2 · Mục II.1</span>
          <b>Vĩ tuyến 17</b>
        </div>

        <div className="secnav">
          {SECS.map((sec) => (
            <button
              key={sec.m}
              className="sec"
              style={{ '--c': COLOR[sec.m] }}
              data-on={s.m === sec.m}
              onClick={() => go(sec.start)}
              title={`${sec.name} — slide ${sec.start + 1}–${sec.end + 1}`}
            >
              <span className="sk">{sec.m} · {String(sec.start + 1).padStart(2, '0')}–{String(sec.end + 1).padStart(2, '0')}</span>
              <span className="sn">{sec.name}</span>
            </button>
          ))}
        </div>

        <div className="tools">
          <button className="tool" data-on={ov} onClick={() => setOv((v) => !v)}>Mục lục</button>
          <button className="tool" data-on={notes} onClick={() => setNotes((v) => !v)}>Ghi chú</button>
          <button className="tool" data-on={running} onClick={() => setRunning((v) => !v)}>Hẹn giờ</button>
          <a className="tool" href="/">← Trang chủ</a>
        </div>
      </div>

      {/* San khau */}
      <main
        className="stage"
        onClick={(e) => {
          if (e.target.closest('figure,table,a,button')) return;
          go(e.clientX > window.innerWidth * 0.5 ? i + 1 : i - 1);
        }}
        onTouchStart={(e) => { touch.current = e.changedTouches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touch.current === null) return;
          const d = e.changedTouches[0].clientX - touch.current;
          if (Math.abs(d) > 52) go(d < 0 ? i + 1 : i - 1);
          touch.current = null;
        }}
      >
        <section
          key={i}
          className="slide"
          aria-label={`Slide ${i + 1}: ${s.t}`}
          dangerouslySetInnerHTML={{ __html: s.h }}
        />
      </main>

      {/* Chan */}
      <div className="foot">
        <div className="who" style={{ '--c': COLOR[s.m] }}>
          <span className="dot" />
          <span>{NAME[s.m]}</span>
        </div>
        <div className="rt">
          <span className="clock" data-s={state}>{mm}:{ss}</span>
          <span className="count">{String(i + 1).padStart(2, '0')} / {SLIDES.length}</span>
        </div>
      </div>

      <div className="help">
        <kbd>←</kbd><kbd>→</kbd> chuyển · <kbd>O</kbd> mục lục · <kbd>S</kbd> ghi chú · <kbd>T</kbd> giờ · <kbd>F</kbd> toàn màn
      </div>

      {/* Muc luc */}
      {ov && (
        <div className="ov" role="dialog" aria-label="Mục lục slide" onClick={() => setOv(false)}>
          <h4>Mục lục — {SLIDES.length} slide · 4 thành viên</h4>
          {SECS.map((sec) => (
            <div key={sec.m} onClick={(e) => e.stopPropagation()}>
              <div className="ovsec" style={{ '--c': COLOR[sec.m] }}>
                {sec.name} <span>{sec.count} slide</span>
              </div>
              <div className="ovg">
                {SLIDES.map((sl, n) =>
                  sl.m !== sec.m ? null : (
                    <button
                      key={n}
                      className="ovc"
                      style={{ '--c': COLOR[sec.m] }}
                      data-on={n === i}
                      onClick={() => { go(n); setOv(false); }}
                    >
                      <div className="n">{String(n + 1).padStart(2, '0')} · {sec.m}</div>
                      <div className="t">{sl.t}</div>
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ghi chu nguoi noi */}
      {notes && (
        <aside className="notes">
          <div className="k">Ghi chú người nói — slide {String(i + 1).padStart(2, '0')}</div>
          <p>{s.n || '—'}</p>
        </aside>
      )}
    </div>
  );
}
