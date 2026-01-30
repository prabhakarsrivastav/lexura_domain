import React from "react";

type RatingStarsProps = {
  rating: number; // e.g. 4.5
  max?: number; // total stars, default 5
  size?: number; // pixel size per star (width/height)
  className?: string;
};

// SVG star path (5-pointed)
const STAR_PATH =
  "M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192L12 .587z";

const Star = ({ fillPercent = 100, size = 16, id }: { fillPercent?: number; size?: number; id: string }) => {
  // fillPercent 0..100
  const pct = Math.max(0, Math.min(100, fillPercent));
  const gradientId = `grad-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={`${pct}%`} stopColor="#000" />
          <stop offset={`${pct}%`} stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* filled portion using gradient */}
      <path d={STAR_PATH} fill={`url(#${gradientId})`} stroke="#000" strokeWidth={0.5} />
      {/* subtle inner highlight to mimic given image (optional) */}
    </svg>
  );
};

const RatingStars = ({ rating, max = 5, size = 14, className = "" }: RatingStarsProps) => {
  const stars = [] as React.ReactNode[];

  for (let i = 0; i < max; i++) {
    const starIndex = i + 1;
    let fill = 0;
    if (rating >= starIndex) {
      fill = 100;
    } else if (rating + 1 > starIndex) {
      // partial
      fill = Math.round((rating - i) * 100);
    } else {
      fill = 0;
    }

    // unique id for gradient
    const id = `${Math.round(rating * 100)}-${i}`;

    stars.push(
      <span key={i} style={{ display: "inline-block", marginRight: i === max - 1 ? 0 : 4 }}>
        <Star fillPercent={fill} size={size} id={id} />
      </span>
    );
  }

  return <div className={`rating-stars inline-flex items-center ${className}`}>{stars}</div>;
};

export default RatingStars;
