import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon | ComponentType<{ size?: number; className?: string }>;
  label: string;
  name: string;
  colorClass: string;
  iconSize?: number;
  onClick?: () => void;
}

export const SocialButton = ({ href, icon: Icon, label, name, colorClass, iconSize = 28, onClick }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl ${colorClass} p-4 shadow-social hover:shadow-glow transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 w-full max-w-[180px] text-center`}
      aria-label={label}
    >
      <div className="relative z-10">
        <div className="flex justify-center mb-2">
          <Icon size={iconSize} className="text-white drop-shadow-lg" />
        </div>
        <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">{name}</h3>
        <p className="text-white/90 text-xs font-medium">{label}</p>
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
    </a>
  );
};