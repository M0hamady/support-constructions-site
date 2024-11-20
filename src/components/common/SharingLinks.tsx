import React from "react";
import { Facebook, Twitter, WhatsApp, Telegram, Email, ContentCopy, Share } from "@mui/icons-material";

type SharingLinksProps = {
  projectId: number;
  projectName: string;
  projectDescription: string;
};

const SharingLinks: React.FC<SharingLinksProps> = ({ projectId, projectName, projectDescription }) => {
  const projectUrl = `${window.location.origin}/projects/${projectId}`;

  const sharingLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(projectName)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(projectUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(projectName)}`,
    email: `mailto:?subject=${encodeURIComponent(projectName)}&body=${encodeURIComponent(`Check out this project: ${projectUrl}`)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(projectUrl);
    alert("Short link copied to clipboard!");
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: projectName,
          text: projectDescription,
          url: projectUrl,
        })
        .catch(console.error);
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center items-center space-x-6 border-2 border-black p-4 ">
      <a href={sharingLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-700 flex flex-row gap-3 items-center">
        <Facebook fontSize="large" />
        <span className="text-sm mt-1">Facebook</span>
      </a>
      <a href={sharingLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex flex-row gap-3 items-center">
        <Twitter fontSize="large" />
        <span className="text-sm mt-1">Twitter</span>
      </a>
      <a href={sharingLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-green-500 flex flex-row gap-3 items-center">
        <WhatsApp fontSize="large" />
        <span className="text-sm mt-1">WhatsApp</span>
      </a>
      <a href={sharingLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex flex-row gap-3 items-center">
        <Telegram fontSize="large" />
        <span className="text-sm mt-1">Telegram</span>
      </a>
      <a href={sharingLinks.email} target="_blank" rel="noopener noreferrer" className="text-red-600 flex flex-row gap-3 items-center">
        <Email fontSize="large" />
        <span className="text-sm mt-1">Email</span>
      </a>
      <button onClick={handleCopyLink} className="text-gray-600 flex flex-row gap-3 items-center">
        <ContentCopy fontSize="large" />
        <span className="text-sm mt-1">Copy Link</span>
      </button>
      <button onClick={handleNativeShare} className="text-gray-600 flex flex-row gap-3 items-center">
        <Share fontSize="large" />
        <span className="text-sm mt-1">Share</span>
      </button>
    </div>
  );
};

export default SharingLinks;
