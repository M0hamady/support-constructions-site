import React from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ElectricalServices as ElectricalIcon,
  Bathtub as BathIcon,
  Brush as PaintIcon,
  Build as ToolsIcon,
  Settings as SettingsIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

AOS.init();

// Reusable Button Component
const ContactButton: React.FC = () => (
  <button
    className="bg-[#BAAD87] text-white py-3 px-8 rounded-full hover:bg-[#9E9195] transition-colors duration-300 flex items-center justify-center"
    onClick={() => window.location.href = "tel:+201208136809"}
  >
    <PhoneIcon className="mr-2" /> اتصل بنا للحصول على المزيد من التفاصيل
  </button>
);

// Service Section Component
const ServiceSection: React.FC<{ title: string; icon: React.ReactNode; items: string[] }> = ({ title, icon, items }) => (
  <div className="mt-6">
    <h3 className="text-xl text-right font-medium text-[#9E9195] flex items-center">
      {icon} <span className="mr-2">{title}</span>
    </h3>
    <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Package Component
const Package: React.FC<{ title: string; services: { title: string; icon: React.ReactNode; items: string[] }[] }> = ({ title, services }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-10 hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
    <h2 className="text-2xl font-semibold text-[#BAAD87] text-right flex items-center">
      <ToolsIcon className="mr-2" /> {title}
    </h2>
    {services.map((service, index) => (
      <ServiceSection key={index} title={service.title} icon={service.icon} items={service.items} />
    ))}
    <div className="mt-6 text-center">
      <ContactButton />
    </div>
  </div>
);

const PackageDetails: React.FC = () => (
  <>
    <Helmet>
      <title>اسعار باقات التشطيب في مصر</title>
      <meta
        name="description"
        content="تقدم شركة ديكور مصر العديد من انظمة التشطيب فى مصر من خلال تقديم اسعار باقات التشطيب 2023 تناسب جميع الفئات السعريه."
      />
    </Helmet>

    <div className="container mx-auto px-6 py-10">
      <h1 className="text-center text-4xl font-extrabold mb-6 text-[#BAAD87]" data-aos="fade-up">
        اسعار باقات التشطيب في مصر
      </h1>

      <p className="text-lg text-right mb-10" data-aos="fade-up">
        تقدم شركة ديكور مصر العديد من انظمة التشطيب فى مصر من خلال تقديم اسعار باقات التشطيب 2023 تناسب جميع الفئات السعريه...
      </p>

      {/* Packages */}
      <Package
        title="باقات التشطيب لوكس"
        services={[
          {
            title: 'الكهرباء',
            icon: <ElectricalIcon className="mr-2" />,
            items: [
              'تأسيس جميع الاسلاك السويدي الأصلي ⚡️.',
              'اسلاك 6 ملم للتكييفات والسخانات.',
              'علب ماجيك وخراطيم علاء الدين الاصلي.',
              'لوحة فينوس 12 خط او 24 خط حسب الجهد.',
              'تأسيس وتركيب لوحة خدمات للراوتر والدش.',
              'تأسيس الجبسن بورد اسلاك 2 ملم للأسبوتات.',
              'تركيب ليد دوبل لبيت النور الداخلي 💡.',
              'تركيب اوشاش صانش وفيش ومفاتيح كهرباء.'
            ]
          },
          {
            title: 'السباكة',
            icon: <BathIcon className="mr-2" />,
            items: [
              'مواسير مياه بي آر الماني 🚰.',
              'صرف لبلاعات البلكونات وتأسيس مخارج فلتر.',
              'تركيب خلاطات ايديال استنادرد للحمامات.',
              'تركيب احواض ديروفيت وقواعد ايديال ستاندرد.'
            ]
          },
          {
            title: 'دهان وديكور',
            icon: <PaintIcon className="mr-2" />,
            items: [
              'تجليخ الحوائط بحجر جلخ ⚒️.',
              'دهان مادة سيلر مائى لتثبيت الاسطح.',
              'سحب 4 طبقات معجون وواجهين بطانه ووجهين تشطيب.'
            ]
          },
          {
            title: 'محارة وجبس',
            icon: <SettingsIcon className="mr-2" />,
            items: [
              'محارة الموقع بالكامل علي الأداة 🛠️.',
              'تركيب اسلاك فواصل بين الجدران.',
              'دهارة اسقف الوحدة بالكامل بمادة كيمازيت من مواد البناء الحديث.'
            ]
          }
        ]}
      />

      <Package
        title="باقات التشطيب سوبر لوكس"
        services={[
          {
            title: 'الكهرباء',
            icon: <ElectricalIcon className="mr-2" />,
            items: [
              'تأسيس جميع الاسلاك السويدي الأصلي ⚡️.',
              'اسلاك 6 ملم للتكييفات والسخانات.',
              'علب ماجيك وخراطيم علاء الدين الاصلي.',
              'لوحة فينوس 24 خط.',
              'تأسيس وتركيب لوحة خدمات للراوتر والدش.'
            ]
          },
          {
            title: 'السباكة',
            icon: <BathIcon className="mr-2" />,
            items: [
              'مواسير مياه اكوا ثيرم 🚰.',
              'صرف لبلاعات البلكونات وتأسيس مخارج فلتر.',
              'تركيب خلاطات ايديال استنادرد للحمامات.'
            ]
          },
          {
            title: 'دهان وديكور',
            icon: <PaintIcon className="mr-2" />,
            items: [
              'تجليخ الحوائط بحجر جلخ ⚒️.',
              'دهان مادة سيلر مائى لتثبيت الاسطح.',
              'سحب 4 طبقات معجون وواجهين بطانه ووجهين تشطيب.'
            ]
          }
        ]}
      />
    </div>
  </>
);

export default PackageDetails;
