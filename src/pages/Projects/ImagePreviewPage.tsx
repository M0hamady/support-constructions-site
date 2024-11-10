import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import MUI icons
import { ContentCopy, Facebook, Twitter, WhatsApp } from '@mui/icons-material';

const ImagePreviewPage: React.FC = () => {
  const location = useLocation();
  const imageUrl = new URLSearchParams(location.search).get('image'); // Retrieve image URL from query params

  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(imageUrl || '').then(() => {
      alert('Image URL copied to clipboard!');
    });
  };

  const shareImage = (platform: string) => {
    const url = encodeURIComponent(imageUrl || '');
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${url}`;
        break;
      default:
        break;
    }

    window.open(shareUrl, '_blank');
  };

  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Helmet>
        <title>Image Preview</title>
        <meta name="description" content="Preview the selected image with optional filters." />
        <meta property="og:title" content="Image Preview" />
        <meta property="og:description" content="Preview the selected image with optional filters." />
        <meta property="og:image" content={imageUrl || 'path/to/default-image.jpg'} />
        <meta property="og:url" content={`${window.location.origin}${location.pathname}?image=${imageUrl}`} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1 className="text-4xl font-bold text-gray-800 mb-6">Image Preview</h1>
      <div className="flex flex-col items-center">
        <img
          src={imageUrl || ''}
          alt="Preview"
          className="w-full h-auto rounded-lg shadow-lg mb-8 z-10"
          style={filterStyle}
        />
        <div className="flex gap-6 z-50">
          <div>
            <label className="block mb-2">Brightness</label>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-64"
            />
          </div>
          <div>
            <label className="block mb-2">Contrast</label>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-64"
            />
          </div>
          <div>
            <label className="block mb-2">Saturation</label>
            <input
              type="range"
              min="0"
              max="200"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-64"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={handleCopyToClipboard}
          >
            <ContentCopy />
            Copy URL
          </button>
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => shareImage('facebook')}
          >
            <Facebook />
            Share on Facebook
          </button>
          <button
            className="flex items-center gap-2 text-blue-500"
            onClick={() => shareImage('twitter')}
          >
            <Twitter />
            Share on Twitter
          </button>
          <button
            className="flex items-center gap-2 text-green-500"
            onClick={() => shareImage('whatsapp')}
          >
            <WhatsApp />
            Share on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewPage;
