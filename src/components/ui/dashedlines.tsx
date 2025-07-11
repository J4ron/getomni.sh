import React from 'react';

interface DashedLinesProps {
  orientation: 'hr' | 'vr';
  className?: string;
  style?: React.CSSProperties;
}

const DashedLines: React.FC<DashedLinesProps> = ({ orientation, className = '', style }) => {
  return orientation === 'hr' ? (
    <div
      className={`absolute top-0 left-0 w-full border-t-2 border-dashed border-white pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  ) : (
    <div
      className={`absolute top-0 left-0 h-full border-l-2 border-dashed border-white pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};

export default DashedLines;
