import React from 'react';

interface SectionSeparatorProps {
  className?: string;
  variant?: 'default' | 'green' | 'hotwhite'; // Extend with more variants as needed
  pulse?: boolean;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ 
  className = '', 
  variant = 'default',
  pulse = false
}) => {
  const baseClasses = "relative flex items-center justify-center my-16"; // Increased margin for thickness
  let separatorClasses = "";

  switch (variant) {
    case 'green':
      separatorClasses = `fluoro-edge--green ${pulse ? 'fluoro-edge--green-pulse' : ''}`;
      break;
    case 'hotwhite':
      separatorClasses = `fluoro-edge--hotwhite ${pulse ? 'fluoro-edge--hotwhite-pulse' : ''}`; // Assuming a hotwhite pulse variant will be added
      break;
    case 'default':
    default:
      separatorClasses = `fluoro-edge ${pulse ? 'fluoro-edge--pulse' : ''}`;
      break;
  }

  return (
    <div className={`${baseClasses} ${separatorClasses} ${className}`}>
      {/* The ::before and ::after pseudo-elements in globals.css will create the actual lines */}
    </div>
  );
};

export default SectionSeparator;
