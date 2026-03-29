import React from 'react';

export const metadata = {
    title: 'التناسب الكوني لجسم الإنسان - مركز الحكمة المصري',
    description: 'استكشف معايير التناسب المتناغم لجسم الإنسان في مصر القديمة، والنسبة الذهبية، ونظام الشبكة المكون من 18 مربعاً.',
};

export default function HumanProportionPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    التناسب الكوني لجسم الإنسان
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-10 prose-p:mt-0 prose-img:rounded-md prose-img:shadow-sm">
                <p>التناسب هو اتساق أجزاء الجسم المختلفة مع الكل، ويُعدّ جسم الإنسان مثالًا أساسيًا لهذا التناسب المتناغم، حيثُ يشكّل هيكله بدقة متناهية لتتناسب أجزاؤه المختلفة مع الكل.</p>
                
                <p>كان معيار التناسب المتناغم لأجسام البشر عند المصريين القدماء يختلف بين الأطفال والبالغين. تعكس هذه الاختلافات الفروقات الجسمانية الفعلية في هاتين المرحلتين. فعند الولادة السرة هي النقطة التي ينقسم عندها طول الطفل إلى نصفينـ وعند البلوغ أو النضج يكون ملتقى الساقين (الأعضاء التناسلية) في منتصف طول جسم البالغ، ويقسم موضع السرة هنا الطول إلى جزأين غير متساويين، ويتناسب التوافق هنا بين الأجزاء والكل مع التناسب الذهبي (نب).</p>
                
                <p>تُشير أقدم السجلات المكتشفة من الأسرة الخامسة إلى أن أعلى نقطة مُحددة على المحور الرأسي هي منبت شعر رأس الإنسان عند عرضه في العالم الأرضي.</p>
                
                <p>تُحدد التماثيل المصرية بدقة - باستخدام عصابة رأس أو تاج أو إكليل أو مفصل - خطًا فاصلًا لأعلى جمجمة الإنسان ليفصل بذلك تاج الجمجمة. ويُقاس طول الجسم دون احتساب التاج كما هو موضح في هذه الشبكة المصرية القديمة.</p>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-cosmic-proportion-of-the-human-figure-2/proportion.png" 
                        alt="الشبكة المصرية القديمة وتناسب جسم الإنسان - تحوت" 
                        className="rounded-lg shadow-md max-w-full md:max-w-md h-auto bg-white p-4" 
                    />
                    <p className="text-sm italic text-gray-500 mt-4 text-center">
                        يوضح تحوت أعلاه كلاً من امتداد الذراع الرأسي (18 مربعًا) والأفقي (22 مربعًا)
                    </p>
                </div>

                <p>يُعرض تمثيل النيترو و/أو البشر في العالم الآخر على شبكة مكونة من 18 مربعًا للطول الكامل حتى أعلى الرأس (أي بما في ذلك تاج الرأس).</p>
                <p>يعكس اختلاف الطول بين العالمين فهم المصريين القدماء العميق لفيسيولوجيا الإنسان ودوره على الأرض.</p>
                <p>إن إزالة هذا الجزء من الدماغ البشري (تاج الرأس) تُبقي الإنسان حيًا، ولكن بلا تمييز وبالتالي دون حكم شخصي. يكون الإنسان شبه نائم، يعيش ويتصرف فقط كمنفذٍ لدافعٍ يتلقاه دون اختيارٍ حقيقي، يكون أشبه بشخصٍ في غيبوبة.</p>
                
                <p>تقع السرة على بُعد حوالي 11.1 مربعًا من أسفل الكعب في نظام الشبكة ذات الـ 18 مربعًا (أو نفس النسبة التي تساوي 0.618 في أنظمة الشبكة أو غير الشبكة). يتبع هذا التقسيم قوانين التناغم بين الجزأين أنفسهما وبين الأجزاء والكل وفقًا للعلاقتين التاليتين:</p>
                
                <ol className="list-decimal pr-6 space-y-4 mb-10">
                    <li className="font-bold text-ewc-navy">
                        النسبة بين جزئي الارتفاع الإلهي (العلوي والسفلي) (18 مربعًا) تكون متناغمة:
                        <div className="mt-4 font-mono text-ewc-blue bg-blue-50/50 p-4 rounded-lg inline-block text-left" dir="ltr">
                            أعلى : أسفل = 0.618<br />
                            أسفل : أعلى = 1.618
                        </div>
                    </li>
                </ol>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-cosmic-proportion-of-the-human-figure-2/human-figuration.png" 
                        alt="رسم بشري على شبكة مصرية قديمة أصلية من مقبرة KV22" 
                        className="rounded-lg shadow-md max-w-full md:max-w-lg h-auto bg-white p-4" 
                    />
                    <p className="text-sm italic text-gray-500 mt-4 text-center">
                        رسم بشري على شبكة مصرية قديمة أصلية من مقبرة KV22 التابعة لأمنحتب الثالث
                    </p>
                </div>

                <ol className="list-decimal pr-6 space-y-4 mb-10" start={2}>
                    <li className="font-bold text-ewc-navy">
                        بين الجزأين والوحدة الكلية (الارتفاع المقدس) وباتخاذ الارتفاع الكامل (حتى منبت شعر رأس الإنسان الأرضي) الرقم 1:
                        <p className="mt-4 font-normal text-gray-700 leading-relaxed">
                            طول الجسم من القدمين إلى السرة وفقًا للشريعة المصرية يساوي مقلوب النسبة الذهبية (1/N) أي 0.618. أما الجزء من السرة إلى منبت شعر الرأس فيساوي مقلوب مربع النسبة الذهبية (1/N²) أي 0.382.
                        </p>
                        <div className="mt-4 font-mono text-ewc-blue bg-blue-50/50 p-4 rounded-lg inline-block text-left" dir="ltr">
                            1 / N + 1 / N² = 1<br />
                            0.618 + 0.382 = 1
                        </div>
                        <p className="mt-2 text-sm font-normal text-gray-500 italic">
                            حيث ن (N) = النسبة الذهبية (1.618)
                        </p>
                    </li>
                </ol>

                <p>نظرًا للعلاقة الوثيقة بين متسلسلة الجمع والنسبة الذهبية نجد أن أجزاء الشكل المختلفة تتبع أيضًا متسلسلة الجمع (كما هو موضح في الشبكة الأصلية أعلاه من مقبرة KV22 لأمنحتب الثالث).</p>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-cosmic-proportion-of-the-human-figure-2/metaphysical-architecture.jpg" 
                        alt="The Ancient Egyptian Metaphysical Architecture Book Cover" 
                        className="w-full max-w-[200px] h-auto rounded-lg shadow-lg mb-6 border border-gray-50" 
                    />
                    <p className="text-sm font-bold text-ewc-blue">
                        بحث وكتابة: مصطفى جاد الله
                    </p>
                </div>
            </div>
        </article>
    );
}
