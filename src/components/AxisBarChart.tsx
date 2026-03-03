import React from 'react';

interface AxisScores {
  OI: number;
  NB: number;
  VP: number;
  BD: number;
}

interface AxisBarChartProps {
  scores: AxisScores;
}

const axisConfigs = {
  OI: { left: '준비형', leftEn: 'Organized', right: '즉흥형', rightEn: 'Improvised', color: '#60A5FA' },
  NB: { left: '직관형', leftEn: 'Intuitive', right: '병맛형', rightEn: 'Abstract', color: '#A78BFA' },
  VP: { left: '말개그', leftEn: 'Verbal', right: '몸개그', rightEn: 'Physical', color: '#FFD60A' },
  BD: { left: '밝음',   leftEn: 'Bright',   right: '다크',   rightEn: 'Dark',     color: '#FF6B6B' },
} as const;

const AxisBarChart: React.FC<AxisBarChartProps> = ({ scores }) => {
  const axes = ['OI', 'NB', 'VP', 'BD'] as const;
  const isNeutralAll = scores.OI === 4 && scores.NB === 4 && scores.VP === 4 && scores.BD === 4;

  const getBarData = (value: number) => {
    const dist = Math.abs(value - 4) / 3;
    const pct = 50 + Math.round(dist * 50);
    const side: 'left' | 'right' = value >= 4 ? 'left' : 'right';
    const displayPct = value === 4 ? 51 : pct;
    return { pct: displayPct, side };
  };

  return (
    <div className="s-card p-6 mb-4 fu">
      <h3
        className="text-sm font-bold mb-5 uppercase tracking-widest text-center"
        style={{ color: 'var(--text-muted)' }}
      >
        개그코드 분석
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {axes.map((axis) => {
          const cfg = axisConfigs[axis];
          const { pct, side } = getBarData(scores[axis]);
          const isNeutralAxis = scores[axis] === 4;
          const activeLabel = side === 'left' ? cfg.left : cfg.right;
          const filledPct = side === 'left' ? pct : 100 - pct;
          const dotPos = side === 'left' ? `${pct}%` : `${100 - pct}%`;

          // When neutral all, show right-leaning indicator for P/I defaults
          const neutralLabel = (axis === 'OI' || axis === 'VP') ? cfg.right : cfg.left;

          return (
            <div key={axis}>
              <div className="flex justify-between items-baseline mb-2">
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600 }}>
                  {cfg.left}
                  <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}> / {cfg.right}</span>
                </span>
                <span style={{ color: cfg.color, fontSize: '0.75rem', fontWeight: 700 }}>
                  {pct}% {isNeutralAll ? neutralLabel : activeLabel}
                </span>
              </div>

              {/* Track */}
              <div className="axis-track" style={{ position: 'relative' }}>
                {/* Filled portion — always from left */}
                <div
                  className="axis-fill"
                  style={{
                    width: `${filledPct}%`,
                    background: cfg.color,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: 0.6,
                  }}
                />
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: dotPos,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: cfg.color,
                    boxShadow: `0 0 8px ${cfg.color}88`,
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AxisBarChart;
