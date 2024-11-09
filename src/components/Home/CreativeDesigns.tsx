import React, { useState } from 'react';
import { Button } from '@mui/material';

const ServiceCard: React.FC<{ title: string; description: string; buttonText: string }> = ({
  title,
  description,
  buttonText,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective w-full md:w-1/3 p-4 h-80 relative cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex justify-center items-center bg-[#baad87] rounded-lg shadow-lg backface-hidden">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#010101] text-white rounded-lg shadow-lg rotate-y-180 backface-hidden p-4">
          <h3 className="text-3xl font-bold text-[#baad87] mb-4">{title}</h3>
          <p className="text-center text-base leading-relaxed mb-6">{description}</p>
          <Button
            variant="contained"
            style={{ backgroundColor: '#baad87', color: '#000' }}
            className="font-bold rounded-full mt-4"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">خدماتنا</h2>
        <div className="w-16 h-1 mx-auto bg-[#baad87] mt-4"></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-stretch">
        <ServiceCard
          title="تصميمات داخلية"
          description="التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون المساحة."
          buttonText="طلب الخدمة"
        />
        <ServiceCard
          title="تصميمات خارجية"
          description="أعطي ضيوفك إنطباع أولي مذهل ودائم لدى رؤيتهم تصميم منزلك الخارجي الراقي والأنيق. إجعل التصميم الخارجي لمنزلك يعكس نمط شخصيتك."
          buttonText="طلب الخدمة"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
