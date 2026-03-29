import type React from "react";

interface ButtonDefaultProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "cursor-pointer inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

  const variants = {
    default:
      "bg-[#32C369] text-[#1F212A] shadow-md hover:bg-[#28a857] hover:shadow-lg focus-visible:ring-[#32C369]",
    outline:
      "bg-[#1F212A] text-emerald-500 ring-[0.5px] ring-emerald-300 shadow-sm hover:bg-[#1F212A] hover:text-[#32C369] hover:shadow-lg focus-visible:ring-[#1F212A]",
  };

  const sizes = {
    sm: "h-7 px-3 py-1 text-xs",
    md: "h-9 px-4 py-2 text-sm",
    lg: "h-11 px-6 py-3 text-base",
    icon: "h-9 w-9 p-0 text-sm",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;
