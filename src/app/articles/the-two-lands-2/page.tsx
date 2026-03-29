import React from 'react';

export const metadata = {
    title: 'الأرضان - مركز الحكمة المصري',
    description: 'اكتشف المفهوم العميق لـ "الأرضين" في مصر القديمة، والذي يتجاوز التقسيم الجغرافي ليمثل التوازن الميتافيزيقي والارتباط بالقرين.',
};

export default function TwoLandsPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    الأرضان
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-12 prose-p:mt-0 prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans prose-img:rounded-md prose-img:shadow-sm">
                <p>لطالما لُقِّب فرعون مصر بسيد الأرضين. وقد زعمت الأوساط الأكاديمية الغربية أن الأرضين هما مصر العليا ومصر السفلى حرفيًا وجغرافيًا، ولا يوجد أي مرجع مصري قديم يشير إلى هذا الزعم أو إلى ما يفصل بين مصر العليا ومصر السفلى.</p>

                <p>نجد العديد من الرموز المتعلقة بطقوس توحيد الأرضين في مختلف المعابد المصرية القديمة، حيث يظهر اثنان من النطرون وهما يربطان نبات البردي وزهرة اللوتس، ولا ينتمي أي من هذين النباتين إلى منطقة محددة في مصر. والتمثيل الأكثر شيوعًا هو النطرون حابي وقرينه (صورة معكوسة لبعضهما البعض)؛ كل منهما محايد جنسيًا، وله ثدي واحد.</p>

                <div className="my-12">
                    <img
                        src="/images/articles/the-two-lands-2/uniting-the-two-lands.jpg"
                        alt="Uniting the Two Lands Symbolism"
                        className="w-full max-w-[200px] mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">رمزية توحيد الأرضين - النطرون حابي وقرينه</p>
                </div>

                <p>مصطلح "الأرضان" مألوف جدًا لدى المصريين البلدي فهم يستخدمونه في حياتهم اليومية. وهم يؤمنون بوجود أرضين: الأرض التي نعيش عليها جميعًا، وأخرى يعيش فيها القرين المماثل لكل منا من الجنس الآخر. يخضع كل منا وقرينه لنفس الخبرات منذ الولادة وحتى الوفاة.</p>
                <p>أنت وقرينك الذي تنفصل عنه عند الولادة ستلتقيان مجددًا في لحظة الوفاة. تصف العدادات المصريات البلدي في رثائهم بعد وفاة شخص ما كيف يتم تجهيز المتوفى للانضمام إلى نظيره من الجنس الآخر كما لو كان حفل زفاف. وهذا يذكرنا بالرسوم الرمزية في مصر القديمة للربط بين الأرضين، فالزواج هو هذا الربط.</p>

                <div className="my-10 border-t pt-10 space-y-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                        <div className="text-center">
                            <img
                                src="/images/articles/the-two-lands-2/egyptian-culture-revealed.jpg"
                                alt="Ancient Egyptian Culture Revealed Book Cover"
                                className="w-full max-w-[180px] mx-auto block h-auto rounded-lg shadow-lg mb-4"
                            />
                        </div>
                        <div className="text-center">
                            <img
                                src="/images/articles/the-two-lands-2/egyptian-cosmology.jpg"
                                alt="Egyptian Cosmology Book Cover"
                                className="w-full max-w-[180px] mx-auto block h-auto rounded-lg shadow-lg mb-4"
                            />
                        </div>
                    </div>
                    <p className="text-center text-sm font-bold text-ewc-blue">
                        بحث وكتابة: مصطفى جاد الله
                    </p>
                </div>
            </div>
        </article>
    );
}
