import React from 'react';

export const metadata = {
    title: 'شكل كتابة الأبجدية المصرية - مركز الحكمة المصري',
    description: 'استكشف التاريخ العريق للأبجدية المصرية القديمة وكيف سبقت جميع أبجديات العالم بآلاف السنين من خلال البرديات والنقوش المكتشفة.',
};

export default function AlphabeticalFormPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    شكل كتابة الأبجدية المصرية
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                <h2 className="text-ewc-red font-bold">1. قِدَم الأبجدية المصرية</h2>
                <br />
                <p>يؤكد معظم الباحثين الغربيين المعاصرين صراحةً وضمنًا أن الأبجدية واللغة المصرية القديمة هي أقدم لغة في العالم. يُقر عالم المصريات الألماني أدولف إرمان Adolf Erman في كتابه "أدب المصريين القدماء" بما يلي:</p>
                <br />
                <p><strong>"كان المصريون وحدهم مُهيئين لتبني منهجٍ فريد مكّنهم من الوصول إلى أرقى أشكال الكتابة ألا وهو الأبجدية."</strong></p>
                <br />
                <p>كذلك استنتج عالم المصريات البريطاني، دبليو. إم. فليندرز بيتري W.M. Flinders Petrie في كتابه "تكوين الأبجديات" ما يلي:</p>
                <br />
                <p><strong>"منذ فجر عصور ما قبل التاريخ استُخدم في مصر نظام كتابة متصل يتألف من علامات خطية زاخرة بالتنوع والتميز."</strong></p>
                <br />
                <p>ويقول إسحاق تايلور Isaac Taylor أبرز علماء اللغة في كتابه "تاريخ الأبجديات":</p>
                <br />
                <p><strong>"إنّ الزمن المبكر للغاية الذي عُثر فيه على رموز ذات طبيعة أبجدية على الآثار المصرية يُعدّ حقيقةً بالغ الأهمية لأنه يُشكّل نقطة انطلاق في تاريخ الأبجدية مُثبتًا صحة القول بأنّ حروف الأبجدية أقدم من الأهرامات، بل ربما أقدم من أيّ أثر آخر قائم للحضارة الإنسانية."</strong></p>
                <br />
                <p>من الواضح تمامًا أن اللغة والأبجدية المصرية القديمة كانت الأولى في العالم قبل آلاف السنين من «كتابات سيناء». جمع بيتري وجدوّل أشكال الحروف الأبجدية من عصور ما قبل الأسرات في مصر الممتدة إلى العصرين اليوناني والروماني، وأثبت أنها أقدم بآلاف السنين من أي مكان آخر.</p>
                <br />

                <h2 className="text-ewc-red font-bold">2. البرديات الأبجدية المصرية المميزة لما قبل الهكسوس</h2>
                <br />
                <p>كتب عالم المصريات الألماني البارز أدولف إرمان في كتابه "الحياة في مصر القديمة":</p>
                <br />
                <p><strong>"في عهد الدولة القديمة (2575-2040 قبل الميلاد) كان قد تم ابتكار خط كتابة متصل خاص للاستخدام اليومي وهو ما يُعرف بالخط الهيراطيقي."</strong></p>
                <br />
                <p>وأشار إسحاق تايلور إلى ثلاث مخطوطات مصرية قديمة مهمة من عهدي الدولة القديمة والوسطى (2575-1783 قبل الميلاد) تميزت بخطوط أبجدية متصلة أنيقة: مخطوطة في حوزة البروفيسور ليبسيوس، وبردية بريس الشهيرة، وأجزاء من برديات في متحف برلين.</p>
                <br />

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetical-form-of-writing/papyrus-prisse-facsimile.jpg" 
                        alt="Facsimile of Papyrus Prisse" 
                        className="w-full max-w-xl mx-auto block h-auto rounded-lg shadow-md mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600 italic">
                        نسخة طبق الأصل من بردية بريس، حيث تتطابق أشكال الحروف تمامًا مع الحروف في تاريخ مصر القديمة وما يليه.
                    </p>
                </div>
                <br />

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetical-form-of-writing/papyrus-prisse-enlarged.jpg" 
                        alt="Enlarged portion of Papyrus Prisse" 
                        className="w-full max-w-lg mx-auto block h-auto rounded-lg shadow-md mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600 italic">
                        جزء مكبّر من نفس البردية المصرية القديمة جدًا يُظهر أشكال الحروف الأبجدية المميزة.
                    </p>
                </div>
                <br />

                <p>هناك العديد من الكتابات الأبجدية المبكرة الأخرى، مثل رسالة أرملة مكتوبة على قماش من الكتان، وترانيم سنوسرت الثالث، والمذكرات الإدارية في معبد نوبكاورا.</p>
                <br />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div>
                        <img 
                            src="/images/articles/the-egyptian-alphabetical-form-of-writing/widow-letter-linen.jpg" 
                            alt="Letter from a widow on linen" 
                            className="w-full h-auto rounded-lg shadow-md mb-4" 
                        />
                        <p className="text-center text-xs font-bold text-gray-600">رسالة أرملة على قماش الكتان (الدولة القديمة).</p>
                    </div>
                    <div>
                        <img 
                            src="/images/articles/the-egyptian-alphabetical-form-of-writing/hymn-senwosret-iii.jpg" 
                            alt="Hymn to Senwosret III" 
                            className="w-full h-auto rounded-lg shadow-md mb-4" 
                        />
                        <p className="text-center text-xs font-bold text-gray-600">ترنيمة لسنوسرت الثالث (الأسرة الثانية عشرة).</p>
                    </div>
                </div>

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetical-form-of-writing/memorandum-nubkaura.jpg" 
                        alt="Memorandum from Nubkaura Temple" 
                        className="w-full max-w-md mx-auto block h-auto rounded-lg shadow-md mb-4 font-bold" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600 italic">
                        مذكرة من مشرف المعبد بجزيرة اللاهون (1897-1878 ق.م).
                    </p>
                </div>
                <br />

                <h2 className="text-ewc-red font-bold">3. إخفاء آلاف الكتابات الأبجدية المصرية</h2>
                <br />
                <p>إن أكبر عملية تضليل في التاريخ هي إخفاء نظام الكتابة الأبجدية المصرية القديمة، لقد أوهموا الجميع بأن اللغة المصرية القديمة مجرد مجموعة من الرسومات البدائية تُسمى الهيروغليفية، وأخفوا النظام الأبجدي المصري الذي يعتبر أصل جميع لغات العالم.</p>
                <br />
                <p>يبرر آلان غاردينر Alan Gardiner هذا الإخفاء في كتابه "قواعد اللغة المصرية" بزعمه الحاجة لتوحيد الخطوط عن طريق تحويلها جميعًا إلى هيروغليفية! وهو عذر لم يُستخدم مع أي لغة أخرى في العالم.</p>
                <br />

                <h2 className="text-ewc-red font-bold">4. استمرارية اللغة المصرية</h2>
                <br />
                <p>القول بأن المصريين يتحدثون "العربية" هو محض افتراء وغير منطقي. بل العكس هو الصحيح: لقد "تبنى" العرب اللغة المصرية منذ زمن بعيد وما زالوا يتحدثونها. يؤكد آلان غاردينر أن النظام الصوتي والبنية النحوية للغة المصرية القديمة مطابقة تمامًا لتلك الموجودة في العربية الحديثة.</p>
                <br />

                <div className="my-10 border-t pt-10">
                    <img 
                        src="/images/articles/the-original-universal-language/universal-writing-modes-cover.jpg" 
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
