import React from 'react';

export const metadata = {
    title: 'اللغة العربية: اللغة المصرية المسروقة - مركز الحكمة المصري',
    description: 'استكشف العلاقة العميقة بين اللغة العربية واللغة المصرية القديمة، وكيف تشترك اللغتان في الجذور والقواعد والنظام الصوتي.',
};

export default function StolenArabicPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    اللغة العربية: اللغة المصرية المسروقة
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                <p>أدى صعود القوى الإسلامية في القرن السابع الميلادي إلى الحاجة لتدوين القرآن. فاستخدم المسلمون الخط المصري القديم المتصل الشائع آنذاك في شمال الجزيرة العربية وحاولوا ابتكار لغة مستقلة منه.</p>
                <br />
                <p>حاولت اللغة العربية (القرآنية) أن تبدو مختلفة عن أصلها المصري القديم بإعادة ترتيب حروف الأبجدية، ومع ذلك، تبقى اللغة العربية لغة مصرية قديمة بكل المقاييس اللغوية والعلمية.</p>
                <br />
                <p>ذكر عالم المصريات البريطاني آلان غاردينر Alan Gardiner في كتابه "قواعد اللغة المصرية":</p>
                <br />
                <p className="bg-gray-50 p-6 border-r-4 border-ewc-red italic">
                    "لقد أُثْبِت أن النظام الصوتي للغة المصرية القديمة يشبه كثيرًا النظام الصوتي للغة العبرية أو العربية الحديثة."
                </p>
                <br />
                <p>أما بالنسبة لأركان اللغة كالنحو والصرف فهي متطابقة تمامًا مع قواعد اللغة المصرية القديمة. ويضيف غاردينر:</p>
                <br />
                <p className="bg-gray-50 p-6 border-r-4 border-ewc-red italic">
                    "لا ترتبط اللغة المصرية باللغات السامية فحسب، بل بالبنية العامة؛ إذ تشترك في السمة الرئيسية المتمثلة في أن جذور كلماتها تتكون من تراكيب من الحروف الساكنة، وعادةً ما يكون عددها ثلاثة. ويتم إحداث التصريف النحوي واختلاف المعاني عن طريق تغيير نطق الحركات الداخلية."
                </p>
                <br />
                <p>تستخدم اللغة العربية خطين أساسيين لهما جذور مصرية واضحة:</p>
                <br />
                <ul className="space-y-4 list-none pr-6 marker:text-ewc-red">
                    <li>1. <strong>خط "البصري":</strong> من "الرؤية"، وهو خط واضح بحروف مستديرة سهل القراءة.</li>
                    <li>2. <strong>خط "الكوفي":</strong> من "اليد"، وهو خط بحروف لها زوايا سهل الكتابة.</li>
                </ul>
                <br />
                <p>والقول بأن المصريين يتحدثون ويكتبون "العربية" هو محض افتراء؛ فالعكس هو الصحيح: لقد تبنى العرب منذ زمن بعيد اللغة المصرية القديمة وما زالوا يتحدثون ويكتبون بها حتى اليوم.</p>

                <div className="my-10 border-t pt-10">
                    <img 
                        src="/images/articles/how-the-one-universal-language-transformed/universal-writing-modes-cover.jpg" 
                        alt="Ancient Egyptian Universal Writing Modes Book Cover" 
                        className="w-full max-w-[200px] mx-auto block h-auto rounded-lg shadow-lg mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-ewc-blue">
                        مقتطف من كتاب "كشف أنماط الكتابة العالمية المصرية القديمة" لمصطفى جاد الله
                    </p>
                </div>
            </div>
        </article>
    );
}
