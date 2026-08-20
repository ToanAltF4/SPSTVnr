'use client';

import { useState } from 'react';
import { POSTERS } from '@/data/posters';

/**
 * TANG CHUNG TUONG TAC.
 *
 * Day la trung tam cua ca trang: nguoi xem bam vao tung diem tren
 * poster tuyen truyen cua dich, va phan tich thu doan hien ra ben canh.
 * Luan diem cua bai la "tam poster noi doi" — nen cach thuyet phuc
 * manh nhat la de nguoi xem tu boc tach no.
 */
export default function PosterExhibit() {
  const [pi, setPi] = useState(0);       // poster dang xem
  const [hi, setHi] = useState(0);       // diem dang chon
  const poster = POSTERS[pi];
  const spot = poster.spots[hi];

  const pick = (n) => {
    setPi(n);
    setHi(0);
  };

  return (
    <div>
      {/* Chon poster */}
      <div className="tabs" role="tablist" aria-label="Chọn tang chứng">
        {POSTERS.map((p, n) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={pi === n}
            className="tab"
            data-on={pi === n}
            onClick={() => pick(n)}
          >
            {p.tab}
          </button>
        ))}
      </div>

      <div className="exhibit">
        {/* Ben trai: poster + cac diem bam */}
        <figure className="frame exhibit-img" data-tag={poster.tag}>
          <img src={poster.src} alt={poster.alt} />
          {poster.spots.map((s, n) => (
            <button
              key={n}
              className="hotspot"
              data-on={hi === n}
              style={{ left: s.x, top: s.y }}
              aria-label={`Điểm ${n + 1}: ${s.title}`}
              onClick={() => setHi(n)}
              onMouseEnter={() => setHi(n)}
            >
              {n + 1}
            </button>
          ))}
          <figcaption dangerouslySetInnerHTML={{ __html: poster.caption }} />
        </figure>

        {/* Ben phai: phan tich diem dang chon */}
        <div className="readout" aria-live="polite">
          <div className="idx">
            Điểm {String(hi + 1).padStart(2, '0')} / {String(poster.spots.length).padStart(2, '0')}
          </div>
          <h3>{spot.title}</h3>

          {spot.quote && (
            <div className="doc" style={{ margin: '0 0 18px' }}>
              <q>{spot.quote}</q>
            </div>
          )}

          <p dangerouslySetInnerHTML={{ __html: spot.body }} />

          <div className="verdict">→ {spot.verdict}</div>
        </div>
      </div>

      <p className="mono dim" style={{ fontSize: 11, letterSpacing: '.06em', marginTop: 22 }}>
        Bấm vào các điểm đánh số trên poster để bóc tách từng thủ đoạn.
      </p>
    </div>
  );
}
