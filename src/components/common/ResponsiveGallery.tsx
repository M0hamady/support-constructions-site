import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { useProjectContext } from "../../context/ProjectContext";

export type Image = {
  id: number;
  image: string;
  description: string;
};

type Comment = {
  id: number;
  number: number;
  message: string;
};

type Section = {
  id: number;
  name: string;
  images: Image[];
  comments: Comment[];
};

type ResponsiveGalleryProps = {
  sections: Section[];
  project: { id: number }; // Assuming project data is passed as prop
  onSectionChange: (sectionId: number) => void;
};

const ResponsiveGallery: React.FC<ResponsiveGalleryProps> = ({
  sections,
  project,
  onSectionChange,
}) => {
  const { addCommentToSection } = useProjectContext(); // Accessing context
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [newComment, setNewComment] = useState<{ message: string; number: string }>({
    message: "",
    number: "",
  });

  const handleSectionClick = (index: number) => {
    setActiveSectionIndex(index);
    onSectionChange(sections[index].id); // Notify parent component
  };

  const handleNext = () => {
    if (activeSectionIndex < sections.length - 1) {
      handleSectionClick(activeSectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeSectionIndex > 0) {
      handleSectionClick(activeSectionIndex - 1);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    const activeSection = sections[activeSectionIndex];

    // Convert phone number to a number
    const phoneNumberAsNumber = parseInt(newComment.number, 10);
    const commentData = { message: newComment.message, number: phoneNumberAsNumber };

    // Add the comment to the section using the context function
    addCommentToSection(project.id, activeSection.id, commentData);

    // Clear form inputs after submission
    setNewComment({ message: "", number: "" });
  };

  const activeSection = sections[activeSectionIndex];

  const renderSectionContent = (section: Section) => (
    <div className="w-full space-y-6" key={section.id}>
      <div className="flex w-full justify-between items-center py-4">
        <h2 className="text-2xl font-bold font-[Tajawal] text-gray-800">{section.name}</h2>
      </div>

      {/* Comments Section */}
      <div className="w-full border-t border-gray-300 mt-4 pt-4 px-5 py-5">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">التعليقات</h3>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-4"
        >
          {section.comments.map((comment) => (
            <SwiperSlide
              key={comment.id}
              className="flex flex-col space-y-2 p-4 bg-white border rounded-lg shadow-md"
            >
              <div className="text-base font-semibold text-gray-600">
                رقم الهاتف: {comment.number}
              </div>
              <p className="text-gray-700 text-sm">{comment.message}</p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mt-6 space-y-4 max-sm:py-5 max-sm:px-5">
          <div>
            <label htmlFor="number" className="block text-gray-700 text-sm font-semibold mb-2">
              رقم الهاتف:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={newComment.number}
              onChange={handleCommentChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
              الرسالة:
            </label>
            <textarea
              id="message"
              name="message"
              value={newComment.message}
              onChange={handleCommentChange}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white  hover:bg-black-600"
          >
            إرسال التعليق
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center space-y-8  border-2 border-black">
      {/* Section Thumbnails */}
      <div className="bg-gray-900 w-full text-white  py-3 text-center font-bold text-lg md:text-2xl">
        قد يعجبك هذا ...
      </div>
      {/* Navigation Buttons */}
      <div className="w-full flex flex-wrap justify-center items-center gap-6 mb-8 ">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`cursor-pointer flex flex-col items-center space-y-3 transition-all duration-300 transform hover:scale-105 ${
              activeSectionIndex === index
                ? "border-2 border-blue-500 rounded-lg"
                : ""
            } w-full max-w-[300px] sm:w-[250px] md:w-[200px] lg:w-[180px]`}
            onClick={() => handleSectionClick(index)}
          >
            <img
              src={section.images[0]?.image || ""}
              alt={section.name}
              className="w-full h-[200px] object-cover rounded-md shadow-lg"
            />
            <p className="text-base font-medium text-center text-gray-800">
              {section.name}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between flex-row-reverse items-center mt-6 w-full max-sm:px-5 px-5">
        <button
          onClick={handlePrevious}
          disabled={activeSectionIndex === 0}
          className={`px-4 py-2 font-bold text-black border-2 border-black shadow-md transition-opacity ${
            activeSectionIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          السابق
          <ArrowForwardIosOutlined className="rotate-180 text-black" />
        </button>
        <button
          onClick={handleNext}
          disabled={activeSectionIndex === sections.length - 1}
          className={`px-4 py-2 font-bold text-black  border-2 border-black shadow-md transition-opacity ${
            activeSectionIndex === sections.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          }`}
        >
          <ArrowForwardIosOutlined />
          التالي
        </button>
      </div>

      {/* Section Content */}
      <div className="w-full space-y-6">{renderSectionContent(activeSection)}</div>
    </div>
  );
};

export default ResponsiveGallery;
