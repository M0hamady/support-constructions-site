import React, { useState } from "react";

export type Image = {
  id: number;
  image: string;
  description: string;
};

type ImageGalleryProps = {
  images?: Image[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openModal = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {images.map((img) => (
          <div key={img.id} className="relative">
            <img
              src={img.image}
              alt={img.description}
              className="h-[400px] object-cover shadow-lg w-[400px] cursor-pointer"
              onClick={() => openModal(img)}
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 w-full text-white text-center p-2">
              {img.description}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 shadow-lg max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.description}
              className="w-full h-auto rounded-md object-contain max-h-[80vh]"
            />
            <p className="mt-4 text-center text-gray-700">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
