// src/components/Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-background">
      <div className="animate-spin h-16 w-16 border-t-4 border-primary border-solid rounded-full"></div>
      <p className="text-white mt-4 text-lg font-semibold">جارٍ التحميل...</p>
    </div>
  );
};

export default Loading;
