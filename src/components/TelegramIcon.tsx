import React from "react";

interface TelegramIconProps {
  size?: number;
  className?: string;
}

// Simplified Telegram logo suitable for monochrome usage
export const TelegramIcon: React.FC<TelegramIconProps> = ({ size = 28, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M9.036 15.453 8.87 19.03c.31 0 .446-.133.608-.293l1.46-1.41 3.027 2.223c.555.306.95.145 1.102-.513l1.997-9.39c.204-.93-.355-1.293-.9-1.066L4.4 11.2c-.908.354-.894.864-.153 1.095l3.31 1.03 7.68-4.847c.362-.221.694-.1.422.12l-6.625 5.855Z" />
  </svg>
);

export default TelegramIcon;


