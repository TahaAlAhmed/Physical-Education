interface TikTokIconProps {
  size?: number;
  className?: string;
}

export const TikTokIcon = ({ size = 24, className = "" }: TikTokIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.248-1.815-1.488-2.855H12.19v14.21c0 2.015-1.644 3.66-3.66 3.66s-3.66-1.645-3.66-3.66c0-2.016 1.644-3.66 3.66-3.66.202 0 .399.017.591.049v-4.1a7.639 7.639 0 0 0-.591-.024c-4.26 0-7.71 3.45-7.71 7.71s3.45 7.71 7.71 7.71 7.71-3.45 7.71-7.71V9.06a10.19 10.19 0 0 0 5.94 1.905V6.847c-1.415 0-2.73-.518-3.77-1.285z"/>
    </svg>
  );
};