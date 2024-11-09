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

const PackageDetails = () => {
  return (
    <>
      <Helmet>
        <title>اسعار باقات التشطيب في مصر</title>
        <meta
          name="description"
          content="تقدم شركة ديكور مصر العديد من انظمة التشطيب فى مصر من خلال تقديم اسعار باقات التشطيب 2023 تناسب جميع الفئات السعريه. تسطيع معرفة تكلفة تشطيب فيلا فى مصر او شقه من خلال سعر متر التشطيب فى مصر الموضحه فى الباقه ادناه."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-center text-4xl font-extrabold mb-6 text-[#BAAD87]" data-aos="fade-up">
          اسعار باقات التشطيب في مصر
        </h1>

        <p className="text-lg text-right mb-10" data-aos="fade-up">
          تقدم شركة ديكور مصر العديد من انظمة التشطيب فى مصر من خلال تقديم اسعار باقات
          التشطيب 2023 تناسب جميع الفئات السعريه. تسطيع معرفة تكلفة تشطيب فيلا فى مصر او
          شقه من خلال سعر متر التشطيب فى مصر الموضحه فى الباقه ادناه. نقدم لك تصميمات
          عصريه تناسب ذوقك الخاص واسعار منافسه بالنسبه لجوده التسليم والخامات المستخدمه
          فى التشطيب.
        </p>

        {/* Package 1: باقة تشطيب لوكس */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 mb-10 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-[#BAAD87] text-right flex items-center">
            <ToolsIcon className="mr-2" /> باقة تشطيب لوكس
          </h2>

          <div className="mt-4">
            <h3 className="text-xl text-right font-medium text-[#9E9195] flex items-center">
              <ElectricalIcon className="mr-2" /> الكهرباء
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>تأسيس جميع الاسلاك السويدي الأصلي ⚡️.</li>
              <li>اسلاك 6 ملم للتكييفات والسخانات.</li>
              <li>علب ماجيك وخراطيم علاء الدين الاصلي.</li>
              <li>لوحة فينوس 12 خط او 24 خط حسب الجهد.</li>
              <li>تأسيس وتركيب لوحة خدمات للراوتر والدش.</li>
              <li>تأسيس الجبسن بورد اسلاك 2 ملم للأسبوتات.</li>
              <li>تركيب ليد دوبل لبيت النور الداخلي 💡.</li>
              <li>تركيب اوشاش صانش وفيش ومفاتيح كهرباء.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <BathIcon className="mr-2" /> السباكة
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>مواسير مياه بي آر الماني 🚰.</li>
              <li>صرف لبلاعات البلكونات وتأسيس مخارج فلتر.</li>
              <li>تركيب خلاطات ايديال استنادرد للحمامات.</li>
              <li>تركيب احواض ديروفيت وقواعد ايديال ستاندرد.</li>
              <li>الاحواض بها تقفيلات رخام غاطس ويو بي في سي.</li>
              <li>بانيو الطيب وكابينة شاور ان وجد.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <PaintIcon className="mr-2" /> دهان وديكور
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>تجليخ الحوائط بحجر جلخ ⚒️.</li>
              <li>دهان مادة سيلر مائى لتثبيت الاسطح.</li>
              <li>سحب 4 طبقات معجون وواجهين بطانه ووجهين تشطيب.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <SettingsIcon className="mr-2" /> محارة وجبس
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>محارة الموقع بالكامل علي الأداة 🛠️.</li>
              <li>تركيب اسلاك فواصل بين الجدران.</li>
              <li>دهارة اسقف الوحدة بالكامل بمادة كيمازيت من مواد البناء الحديث.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <BathIcon className="mr-2" /> البلاط
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>عزل الحمام والمطبخ بمادة سيكا 107 من كيماويات البناء الحديث.</li>
              <li>سيراميك كيلوباترا قطع ليزر لارضيات الغرف 🏠.</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <button
              className="bg-[#BAAD87] text-white py-3 px-8 rounded-full hover:bg-[#9E9195] transition-colors duration-300"
              onClick={() => window.location.href = "tel:+201208136809"}
            >
              <PhoneIcon className="mr-2" /> اتصل بنا للحصول على المزيد من التفاصيل
            </button>
          </div>
        </div>

        {/* Package 2: باقة تشطيب سوبر لوكس */}
        <div
          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold text-[#BAAD87] text-right flex items-center">
            <ToolsIcon className="mr-2" /> باقة تشطيب سوبر لوكس
          </h2>

          <div className="mt-4">
            <h3 className="text-xl text-right font-medium text-[#9E9195] flex items-center">
              <ElectricalIcon className="mr-2" /> الكهرباء
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>تأسيس جميع الاسلاك السويدي الأصلي ⚡️.</li>
              <li>اسلاك 6 ملم للتكييفات والسخانات.</li>
              <li>علب ماجيك وخراطيم علاء الدين الاصلي.</li>
              <li>لوحة فينوس 24 خط.</li>
              <li>تأسيس وتركيب لوحة خدمات للراوتر والدش.</li>
              <li>تأسيس الجبسن بورد اسلاك 2 ملم للأسبوتات.</li>
              <li>تركيب ليد دوبل لبيت النور الداخلي 💡.</li>
              <li>تركيب اوشاش صانش وفيش ومفاتيح كهرباء اسباني.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <BathIcon className="mr-2" /> السباكة
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>مواسير مياه اكوا ثيرم 🚰.</li>
              <li>صرف لبلاعات البلكونات وتأسيس مخارج فلتر.</li>
              <li>تركيب خلاطات ايديال استنادرد للحمامات.</li>
              <li>تركيب احواض ديروفيت وقواعد ايديال ستاندرد.</li>
              <li>الاحواض بها تقفيلات رخام غاطس ويو بي في سي.</li>
              <li>بانيو الطيب وكابينة شاور ان وجد.</li>
            </ul>

            <h3 className="text-xl text-right font-medium text-[#9E9195] mt-6 flex items-center">
              <PaintIcon className="mr-2" /> دهان وديكور
            </h3>
            <ul className="list-disc list-inside text-right text-lg text-[#9E9195]">
              <li>تجليخ الحوائط بحجر جلخ ⚒️.</li>
              <li>دهان مادة سيلر مائى لتثبيت الاسطح.</li>
              <li>سحب 4 طبقات معجون وواجهين بطانه ووجهين تشطيب.</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <button
              className="bg-[#BAAD87] text-white py-3 px-8 rounded-full hover:bg-[#9E9195] transition-colors duration-300"
              onClick={() => window.location.href = "tel:+201208136809"}
            >
              <PhoneIcon className="mr-2" /> اتصل بنا للحصول على المزيد من التفاصيل
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
