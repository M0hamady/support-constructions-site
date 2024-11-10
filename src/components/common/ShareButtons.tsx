import { Facebook, Twitter, LinkedIn, WhatsApp } from '@mui/icons-material';
import React from 'react';

const ShareButtons: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <Facebook fontSize="large" />
      </a>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
      >
        <Twitter fontSize="large" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
      >
        <LinkedIn fontSize="large" />
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${title} ${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700"
      >
        <WhatsApp fontSize="large" />
      </a>
    </div>
  );
};

export default ShareButtons;
