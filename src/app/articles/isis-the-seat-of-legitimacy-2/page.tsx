import React from 'react';

export const metadata = {
    title: 'إيزيس رمز الشرعية - مركز الحكمة المصري',
    description: 'استكشف الرمزية العميقة لإيزيس كعرش للشرعية والسلطة في مصر القديمة، وكيف أسست للنظام الأمومي ونقل الدم الملكي عبر الملكات.',
};

export default function IsisLegitimacyPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    إيزيس رمز الشرعية
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-12 prose-p:mt-0 prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans prose-img:rounded-md prose-img:shadow-sm">
                <p>يرمز العرش في مصر القديمة وفي جميع دول العالم اليوم إلى الشرعية والسلطة. وتُسمى المدينة الرئيسية في الإقليم "مقر الإقليم"، ويُطلق على رئيس الرؤساء لقب "رئيس المجلس"، وهذا هو أحد التأثيرات التي لا حصر لها من مصر القديمة على العالم في الماضي وفي الحاضر.</p>

                <div className="my-12">
                    <img
                        src="/images/articles/isis-the-seat-of-legitimacy-2/isis-throne.jpg"
                        alt="Isis as the Throne of Legitimacy"
                        className="w-full max-w-[150px] mx-auto rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">إيزيس وعلى رأسها رمز العرش</p>
                </div>

                <p>وقد مثّلت أهمية إيزيس كرمز للسلطة والشرعية أساسًا لتبني النظام والنسب الأمومي في المجتمع المصري.</p>
                <p>على مر التاريخ المصري كانت الملكة هي التي تنقل الدم الملكي، فالملكة كانت هي الحاكمة الحقيقية ومالكة الأرض وحافظة العائلة المالكة وحامية نقاء النسب. والرجل الذي يتزوج الأميرة المصرية الكبرى في العائلة الملكية يزعم حقه في العرش. وبالزواج كانت الملكة تنقل التاج إلى زوجها ولكن دوره هو وكيلها التنفيذي. أُدمج هذا القانون الاجتماعي/السياسي في الأسطورة المصرية القديمة، فأصبح أوزيريس هو أول فرعون على مصر بعد زواجه من إيزيس. ثم التزم الفراعنة وكذلك زعماء القبائل بهذا النظام بعد ذلك. وإذا لم يكن للفرعون أو الزعيم بنات انتهت سلالته وبدأت سلالة جديدة مع امرأة جديدة مُبجّلة. وطُبّقت النظرية الأمومية على المجتمع بأسره كما يتضح من شواهد القبور لمختلف فئات الشعب، فقد جرت العادة على تتبع نسب المتوفى من جهة الأم وليس من جهة الأب. تُذكر الأم تحديدًا بينما لا يُذكر الأب أو يُذكر عرضًا، ولا يزال هذا التقليد قائمًا سرًا بين المصريين البلديين.</p>

                <div className="my-10 border-t pt-10 space-y-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                        <div className="text-center">
                            <img
                                src="/images/articles/isis-the-seat-of-legitimacy-2/isis-divine-female.jpg"
                                alt="Isis: The Divine Female Book Cover"
                                className="w-full max-w-[180px] mx-auto block h-auto rounded-lg shadow-lg mb-4"
                            />
                        </div>
                        <div className="text-center">
                            <img
                                src="/images/articles/isis-the-seat-of-legitimacy-2/egyptian-cosmology.jpg"
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
