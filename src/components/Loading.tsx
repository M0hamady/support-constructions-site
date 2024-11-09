import React from 'react';

const LoadingComponent: React.FC = () => {
  return (
    <div className='flex justify-center items-center w-full h-[100vh] max-w-[99vw] '>
      <div className="spinner-container">
        <div className="spinner"></div>
        <div className="text-container text-primary mt-2">
          Support Construction
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
