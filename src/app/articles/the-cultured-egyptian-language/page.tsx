import React from 'react';

export const metadata = {
    title: 'اللغة المصرية الراقية - مركز الحكمة المصري',
    description: 'استكشف رقي اللغة المصرية القديمة، غناها بالاستعارات، وتنوع موضوعاتها من النصوص الدينية إلى الوثائق العلمية والأدبية.',
};

export default function CulturedLanguagePage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    اللغة المصرية الراقية
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                <p>تعكس النصوص المصرية القديمة رقيّ اللغة والشعب المصري. وقد كتب عالم المصريات الألماني أدولف إرمان Adolf Erman في كتابه "أدب المصريين القدماء":</p>
                <br />
                <p><strong>"منذ أقدم النصوص التي استطعنا الحصول عليها، تظهر في اللغة المصرية إشارات تدل على العناية الفائقة في إنشائها؛ فهي غنية بالاستعارات والمجازات، وهي لغة راقية تُلهم فكر كاتبها وتُثري كتاباته."</strong></p>
                <br />
                <p>كما كتب عالم المصريات البريطاني آلان غاردينر Alan Gardiner في كتابه "قواعد اللغة المصرية":</p>
                <br />
                <p><strong>"من أبرز سمات اللغة إيجازها؛ فالعبارات والجمل موجزة ومباشرة، ونادراً ما نجد تراكيب معقدة أو جمل طويلة. وتتميز اللغة المصرية القديمة بأن مفرداتها غنية جداً، وساعد نظام الكلمات الصارم الخاص بها على وضوحها."</strong></p>
                <br />
                <p>تتنوع الموضوعات التي تناولتها الكتابات المصرية القديمة تنوعًا واسعاً لتشمل كافّة جوانب الحياة:</p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pr-6">
                    <ul className="space-y-2 list-disc marker:text-ewc-red">
                        <li>نصوص دينية وجنائزية</li>
                        <li>سجلات تجارية وقانونية</li>
                        <li>مؤلفات ووثائق علمية</li>
                        <li>ملاحظات فلكية</li>
                        <li>مؤلفات طبية</li>
                        <li>أدب الحكمة</li>
                    </ul>
                    <ul className="space-y-2 list-disc marker:text-ewc-red">
                        <li>تأملات وفلسفة</li>
                        <li>رسائل شخصية</li>
                        <li>شعر وأغاني وترانيم</li>
                        <li>فنون السحر</li>
                        <li>قصص وأساطير</li>
                        <li>أدب السفر</li>
                    </ul>
                </div>
                <br />
                <p>ولأن المصريين القدماء لم يفرقوا بين المقدس والدنيوي، فإن تفسيرات النصوص المصرية تأثرت إلى حد كبير بتوجهات المترجمين؛ فقد قدم الأكاديميون الغربيون أحياناً تفسيرات سطحية، بينما قدم الباحثون المتعمقون رؤى تعكس عمق المعرفة المصرية.</p>
                <br />
                <p>ابتكر المصريون أدوات ممتازة للكتابة وصناعة الكتب، فاستخدموا الجلد والحجر والخشب ونبات البردي. وصنعوا الكتب عن طريق لصق أوراق البردي معاً في مخطوطات قد يصل طولها إلى 40 متراً، مستخدمين أقلاماً وحبراً ثابتاً لا يتلف، مما مكنهم من الكتابة برموز أنيقة ومستديرة وواضحة.</p>

                <div className="my-10 border-t pt-10">
                    <img 
                        src="/images/articles/the-cultured-egyptian-language/culture-revealed-cover.jpg" 
                        alt="Ancient Egyptian Culture Revealed Book Cover" 
                        className="w-full max-w-[200px] mx-auto block h-auto rounded-lg shadow-lg mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-ewc-blue">
                        مقتطف من كتاب "كشف الثقافة المصرية القديمة" لمصطفى جاد الله
                    </p>
                </div>
            </div>
        </article>
    );
}
