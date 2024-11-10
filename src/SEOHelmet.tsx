import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet: React.FC = () => {
  return (
    <Helmet>
      {/* HTML Lang Attribute */}
      <html lang="ar" />

      {/* Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
      <meta name="theme-color" content="#000000" />
      
      {/* SEO Improvements */}
      <meta
        name="description"
        content="سابورت كونستركشن - شركة تشطيب في مصر تقدم أفكارًا إبداعية مبتكرة في تصميمات الديكور والتشطيب لجميع أنواع الوحدات السكنية والتجارية والفلل والقصور."
      />
      <meta
        name="keywords"
        content="سابورت كونستركشن, شركة تشطيب, تشطيب الشقق, تشطيب الفلل, تصميم الديكور, تشطيب الوحدات السكنية, تشطيب الوحدات التجارية, تصميم داخلي"
      />
      <meta name="author" content="سابورت كونستركشن" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="سابورت كونستركشن - شركة تشطيب في مصر بأفكار إبداعية مبتكرة" />
      <meta
        property="og:description"
        content="شركة سابورت كونستركشن تقدم أفكارًا إبداعية مبتكرة في تصميمات الديكور والتشطيب لجميع أنواع الوحدات السكنية والتجارية والفلل والقصور."
      />
      <meta property="og:image" content="https://example.com/your-image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="سابورت كونستركشن - شركة تشطيب في مصر بأفكار إبداعية مبتكرة" />
      <meta
        name="twitter:description"
        content="شركة سابورت كونستركشن تقدم أفكارًا إبداعية مبتكرة في تصميمات الديكور والتشطيب لجميع أنواع الوحدات السكنية والتجارية والفلل والقصور."
      />
      <meta name="twitter:image" content="https://example.com/your-image.jpg" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://yourwebsite.com" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Favicon and App Icons */}
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      {/* Manifest for PWA */}
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      {/* Title */}
      <title>سابورت كونستركشن - شركة تشطيب في مصر</title>
    </Helmet>
  );
};

export default SEOHelmet;
