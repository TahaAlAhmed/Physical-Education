import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
  color?: string;
}

export const SocialIcon = ({ href, icon: Icon, label, color = "text-primary" }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center w-14 h-14 rounded-full bg-card shadow-card hover:shadow-glow transition-smooth animate-scale-hover ${color}`}
      aria-label={label}
    >
      <Icon size={24} className="group-hover:scale-110 transition-smooth" />
    </a>
  );
};