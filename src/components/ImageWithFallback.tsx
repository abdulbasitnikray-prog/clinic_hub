import React, { useState } from 'react';
import { Activity } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-clinic-navy/5 to-clinic-teal/10 flex flex-col items-center justify-center p-6 rounded-2xl border border-clinic-border ${aspectRatio} ${className}`}>
        <Activity className="w-12 h-12 text-clinic-teal animate-pulse mb-2" />
        <span className="text-xs text-clinic-textMuted font-medium text-center">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`object-cover transition-opacity duration-300 ${className}`}
      {...props}
    />
  );
};
