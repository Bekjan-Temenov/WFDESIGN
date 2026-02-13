import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string; // Добавил возможность прокидывать доп классы
}

export const Button = ({ children, variant = 'primary', onClick, className = '' }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`
      w-auto md:w-[200px] 
      h-[43px] 
      rounded-[8px] 
      uppercase 
      text-[12px] 
      font-semibold 
      cursor-pointer 
      transition-all 
      duration-300 
      flex px-7 py-2
      items-center 
      justify-center
      whitespace-nowrap 
      ${variant === 'primary' 
        ? 'bg-[#3F25FF] text-white hover:opacity-90 hover:bg-transparent border border-[#3F25FF] hover:text-[#3F25FF]' 
        : 'border border-[#3F25FF] text-white hover:bg-[#3F25FF] hover:text-white'}
      
      ${className}
    `}>
      {children}
    </button>
  );
};