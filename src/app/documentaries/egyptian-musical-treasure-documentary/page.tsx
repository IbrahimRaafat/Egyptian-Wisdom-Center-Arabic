import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الكنز الموسيقي المصري - فيلم وثائقي',
  description: 'أحد عشر ساعة من فيلم وثائقي شامل، غني بالمعلومات وممتع عن الكنز الموسيقي المصري - مُتاح الآن مجاناً.',
};

export default function EgyptianMusicalTreasureDocumentary() {
  return (
    <div className="container mx-auto px-4 py-8 mt-20" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#dbae89]">فيلم وثائقي: الكنز الموسيقي المصري</h1>
      
      <article className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-center italic mb-8 text-gray-500 font-medium">
          [متاح الآن باللغة الإنجليزية، ولاحقاً في الأشهر/السنوات القادمة باللغة الفرنسية ولغات أخرى]
        </p>

        <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2f639d]">
            فيلم وثائقي شامل وغني بالمعلومات وممتع [11 ساعة] – متاح الآن مجاناً!
          </h2>
          <p className="mb-4 text-lg/relaxed text-gray-800">
            يسعدني أن أطرح هذا الفيلم الوثائقي للجمهور مجاناً. الفيلم الوثائقي كامل وشامل في مضمونه. وفي الأشهر القادمة، سيتم صقله بصور ومقاطع فيديو أفضل.
          </p>
          <p className="text-lg/relaxed text-gray-800 font-medium">
            الفيلم الوثائقي طويل ولكنه ليس مملاً أو مكرراً! لقد وفرت رابطاً منفصلاً لكل قسم من أقسامه الستة لتسهيل الوصول إليها. يمكنك مشاهدتها بترتيب الأقسام أو بأي ترتيب تريده.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Segment 1 */}
          <a href="https://drive.google.com/file/d/14AgzXzqMJUpMSmh7QruGrInRZtVP_Y24/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم الأول:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">الألحان المصرية الفريدة</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          {/* Segment 2 */}
          <a href="https://drive.google.com/file/d/14ELpOmPNSJD9P-nq6uBunAyML-vKZpnN/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم الثاني:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">تشكيلات الفرق الموسيقية التقليدية</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          {/* Segment 3 */}
          <a href="https://drive.google.com/file/d/14L-vkedegn4JCTTQ67nYoH-Rg2UwrCsH/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم الثالث:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">الآلات الموسيقية المصرية التقليدية</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          {/* Segment 4 */}
          <a href="https://drive.google.com/file/d/1-7m1uH-FcHg2JOo2fCTVwHuS1jWZp3F6/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم الرابع:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">المواضيع، والأنماط، والقوالب الموسيقية المصرية</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          {/* Segment 5 */}
          <a href="https://drive.google.com/file/d/14GM4BAGGCKTBEbPwxp9RymoAc0UR0cOg/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم الخامس:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">الدورة الحياتية الأرضية الشخصية، والدورة اليومية، والطبيعة المحيطة</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>

          {/* Segment 6 */}
          <a href="https://drive.google.com/file/d/14GkVWKFeQpK4yOJfCNNrXLuI8rKj6Y5v/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
            className="group block p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-[#2f639d] border-b border-gray-100 pb-2">القسم السادس:</h3>
            <p className="font-normal text-gray-700 min-h-[48px]">أنشطة العمال، وأنشطة الشوارع، والاحتفالات العامة</p>
            <span className="inline-flex items-center mt-4 text-[#dbae89] font-bold group-hover:text-[#c49a75]">
              مشاهدة الآن
              <svg className="w-4 h-4 mr-2 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </a>
        </div>
      </article>
    </div>
  );
}
