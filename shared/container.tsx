import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string; // Чтобы можно было добавить доп. стили если нужно
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`
        w-full mx-auto
        max-w-342      
        px-4 
        md:px-8
        lg:px-10
        ${className}
      `}
    >
      {children}
    </div>
  );
};
