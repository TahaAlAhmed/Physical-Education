import React from "react";

interface SnapchatIconProps {
  size?: number;
  className?: string;
}

export const SnapchatIcon: React.FC<SnapchatIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Proper Snapchat Ghost Logo */}
      {/* Snapchat Ghost Body */}
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
      />
      {/* Snapchat Ghost Eyes */}
      <circle cx="9" cy="10" r="1.5" fill="white"/>
      <circle cx="15" cy="10" r="1.5" fill="white"/>
      {/* Snapchat Ghost Mouth */}
      <path
        d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="white"
      />
    </svg>
  );
};