import React from 'react';

export const metadata = {
    title: 'النسب المقدسة - مركز الحكمة المصري',
    description: 'تعرف على كيفية استخدام المصريين القدماء للنسب المقدسة "باي" و "فاي" في هندستهم المعمارية وفهمهم العميق للتناسب الكوني.',
};

export default function SacredRatiosPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    النسب المقدسة
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-h3:text-xl prose-h3:font-bold prose-h3:text-ewc-red prose-h3:mb-4 prose-h3:mt-12 prose-h3:font-sans
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                <p>عرف المصريون القدماء العددين الفائقين باي pi وفاي phi. وقد تجلى هذا العلم في توافق النسب في مبانيهم وأعمالهم الفنية.</p>
                <br />

                <h2 className="text-ewc-red font-bold">1. النسبة الذهبية (نب)</h2>
                <br />
                <p>النسبة الذهبية وهي تساوي بالأرقام 1.618، وقد خصصت لها الأوساط الأكاديمية الغربية رمزًا من الأحرف اليونانية وهو الحرف فاي φ – ولكن النسبة كانت معروفة ومستخدمة قبل اليونانيين بزمن طويل، بل أن الأسوأ من ذلك هو أنه لا يوجد دليل يثبت أن اليونانيين كانوا على دراية بالنسبة الذهبية أصلًا!</p>
                <br />
                <p>يقتضي الإنصاف والصدق استخدام مصطلح مصري قديم لهذه النسبة: **النسبة نب**، وكلمة "نب" تعني الذهب أو مقدس، وهذه النسبة معروفة في النصوص الغربية تحت اسم "النسبة الذهبية والمقدسة" منذ القرن التاسع عشر.</p>
                <br />
                <p>يمكن اشتقاق النسبة الذهبية (نب) رياضيًا من متسلسلة الجمع التي أظهر المصريون القدماء معرفتهم بها منذ 4500 عام على الأقل. مع تزايد متسلسلة الجمع (2، 3، 5، 8، 13، 21، 34، 55، 89، 144، ...) تقترب النسبة بين الأرقام المتتالية من النسبة الذهبية (نب). النسب 55:34، 89:55، 144:89، إلخ، جميعها لها نفس قيمة 1.618.</p>
                <br />
                <p>وكما ذُكر سابقًا كانت المعابد والأضرحة المصرية القديمة مُقسّمة طبقًا للأرقام المتزايدة لتسلسل الجمع، والمقصود هو النقاط المهمة على محور مخطط المبنى.</p>
                <br />
                <p>يمكن أيضًا استنتاج النسبة الذهبية (نب) بيانيًا بعدة طرق كانت شائعة في المباني المصرية عبر تاريخ السلالات الحاكمة. (انظر تفاصيل الطرق المتعددة في كتاب "العمارة الميتافيزيقية المصرية القديمة The Ancient Egyptian Metaphysical Architecture" لمصطفى جاد الله).</p>
                <br />

                <h2 className="text-ewc-red font-bold">2. الفهرس الدائري (باي)</h2>
                <br />
                <p>الفهرس الدائري هو التمثيل الوظيفي للدائرة، أي النسبة بين محيط الدائرة وقطرها. اشتهرت هذه القيمة في الأوساط الأكاديمية الغربية بالحرف اليوناني باي pi (π)، وقيمتها 3.1415927.</p>
                <br />
                <p>ظهرت معرفة المصريون القدماء بخصائص الدائرة والمنحنيات في أوائل السجلات المكتشفة. فقد ورد في سجلاتهم التاريخية التي تعود إلى الأسرة الثالثة (حوالي 2630 قبل الميلاد) وصفٌ لمنحنى سقف في سقارة باستخدام نظام النظير (موضح أدناه)، وهذا يدل على أن معرفتهم بالدائرة مكّنتهم من حساب وقياس مقدار المنحنى الرأسي، وبناءً على هذا التزم عمال البناء بأبعاد دقيقة لضبط المنحنيات الدائرية.</p>
                
                <div className="my-10">
                    <img 
                        src="/images/articles/sacred-proportions/saqqara-roof-curve.jpg" 
                        alt="Saqqara Roof Curve Definition Diagram" 
                        className="w-full max-w-[250px] mx-auto block h-auto rounded-lg shadow-md mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600">
                        سجل من الأسرة الثالثة يوضح تعريف منحنى سقف في سقارة بنظام الإحداثيات.
                    </p>
                </div>
                <br />

                <p>وقد بنى المصريون تيجان أعمدة مبانيهم بتسعة عناصر وأحيانًا سبعة، وكذلك المضلعات السداسية والثمانية والحادية عشرة والثلاثية عشرة، وذلك لمعرفتهم بخصائص الدائرة وعلاقتها بالنسق العمودي والأشكال الهندسية الأخرى.</p>
                <br />
                <p>كان هذا التطبيق واضحًا في مصر قبل ألفي عام على الأقل من ميلاد أرخميدس Archimedes.</p>
                <br />

                <h2 className="text-ewc-red font-bold">3. المداخل المصرية ودمج النسب</h2>
                <br />
                <p>إن تصميم المداخل المصرية القديمة النموذجية يتضمن النسبتين المقدستين باي وفاي، كما هو موضح أدناه:</p>
                <br />
                <ul className="space-y-4 list-decimal pr-6 marker:text-ewc-red marker:font-bold">
                    <li>الخطوط العريضة للبناء الرأسي عبارة عن مربع مزدوج بنسبة 1:2 (H = 2B).</li>
                    <li>يرتكز عرض الفتحة على مربع محفور داخل نصف دائرة، وهي الطريقة المصرية القديمة الشائعة لتحديد نسبة جذر 5 للمستطيل، وبالتالي فإن سمك قائم الباب يساوي 0.618 من عرض الفتحة.</li>
                    <li>ارتفاع الفتحة (h) = 3.1415 = **باي**.</li>
                </ul>
                
                <div className="my-10">
                    <img 
                        src="/images/articles/sacred-proportions/doorway-phi-pi.jpg" 
                        alt="Ancient Egyptian Doorway Layout Phi and Pi Diagram" 
                        className="w-full max-w-[300px] mx-auto block h-auto rounded-lg shadow-md mb-4 font-bold" 
                    />
                </div>
                <br />

                <div className="my-10 border-t pt-10">
                    <img 
                        src="/images/articles/sacred-proportions/egyptian-culture-revealed-cover.jpg" 
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
