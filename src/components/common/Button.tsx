import React from 'react';

interface ButtonProps {
  link: string;
  name: string;
  variant?: 'border' | 'fill';  // Default is 'fill'
}

const Button: React.FC<ButtonProps> = ({ link, name, variant = 'fill' }) => {
  const baseStyle = "w-full sm:w-auto h-fit px-4 py-2 flex justify-center items-center rounded-lg text-center text-black font-bold font-['Tajawal'] leading-[55px] text-lg sm:text-xl transition duration-300";

  // Conditional styles based on 'variant'
  const fillStyle = "bg-[#DCE4EC] hover:bg-[#9e9e4e]"; // Background color with hover effect
  const borderStyle = "border-2 border-[#DCE4EC] text-light hover:bg-[#DCE4EC]/10"; // Border with no fill

  const buttonStyle = variant === 'fill' ? `${baseStyle} ${fillStyle}` : `${baseStyle} ${borderStyle}`;

  return (
    <a href={link} className={buttonStyle}>
      {name}
    </a>
  );
};

export default Button;
