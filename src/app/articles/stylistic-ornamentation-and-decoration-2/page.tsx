import React from 'react';

export const metadata = {
    title: 'تفاصيل معمارية مصرية أنيقة - مركز الحكمة المصري',
    description: 'استكشف الأبعاد الجمالية والروحية للتفاصيل المعمارية المصرية، من الأعتاب والكورنيش إلى الأنماط النباتية والهندسية والألوان.',
};

export default function StylisticOrnamentationPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    تفاصيل معمارية مصرية أنيقة
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-10 prose-p:mt-0 prose-img:rounded-md prose-img:shadow-sm">
                <p>استُخدمت العديد من السمات المعمارية المميزة في مصر القديمة، منها:</p>
                
                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-12 mb-6 border-b border-gray-100 pb-2">
                    العتبة (Architrave)
                </h2>
                <p>اشتقت العتبة من العوارض الحجرية التي تمتد من عمود إلى آخر في المقابر والمعابد. منذ الأسرة الأولى كانت أصغر المقابر الخاصة (المصاطب) تحتوي على أعتاب مميزة فوق مداخلها. استُخدمت العتبة الحجرية لتوسيع المعابد وإضافة رواق إليها.</p>

                <div className="my-10 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/architrave-general.jpg" 
                            alt="العتبة الحجرية في العمارة المصرية" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/mastaba-lintel.jpg" 
                            alt="عتبة مقبرة خاصة (مصطبة)" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                    </div>
                </div>

                <p>كما استُخدم نقش المربعات فوق العتبة منذ فجر التاريخ المصري، ويمكن رؤية النقوش في واجهة مقبرة بني حسن وعلى سقف إحدى المقابر الصخرية في الأهرامات مُحاكيةً عوارض النخيل.</p>

                <div className="my-10 flex flex-col items-center">
                    <img 
                        src="/images/articles/stylistic-ornamentation-and-decoration-2/square-dentils.jpg" 
                        alt="نقش المربعات محاكاة لعوارض النخيل" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <p>في الصورة التالية تظهر تفاصيل جميلة في مجمع معابد الكرنك بالأقصر:</p>

                <div className="my-10 flex flex-col items-center">
                    <img 
                        src="/images/articles/stylistic-ornamentation-and-decoration-2/karnak-details.jpg" 
                        alt="تفاصيل معمارية في الكرنك" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-12 mb-6 border-b border-gray-100 pb-2">
                    الكورنيش (Cornice)
                </h2>
                <p>استُخدم الكورنيش باستمرار كعنصر أساسي في تصميم ما يُعرف بالأبواب الوهمية التي توجد في كل مقبرة ومعبد في مصر القديمة. لاحظ أيضًا السمات الأخرى.</p>
                <p>في الأسفل صورة مُلوّنة من مقبرة في سقارة يعود تاريخها إلى حوالي 45 قرنًا ماضية.</p>

                <div className="my-10 flex flex-col items-center">
                    <img 
                        src="/images/articles/stylistic-ornamentation-and-decoration-2/saqqara-cornice.jpg" 
                        alt="كورنيش ملون من مقبرة في سقارة" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <p>كان المصريون يختارون أشياءً مثل زهرة اللوتس وغيرها من الزهور لزخرفة مبانيهم، وقد تم توظيف هذه العناصر بالإضافة إلى حيوانات مختلفة أو رؤوسها لتشكيل الكورنيش بالأخص في منازلهم ومقابرهم أو لتزيين قطع الأثاث والملابس الفاخرة.</p>

                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-12 mb-6 border-b border-gray-100 pb-2">
                    الطوروس أو الدوائر المتداخلة (Torus)
                </h2>
                <p>استُخدم الطوروس في مصر منذ أقدم العصور قبل أكثر من 5000 عام، ويظهر هنا كعنصر أساسي في زخرفة ما يُعرف بالأبواب الوهمية في كل مقبرة ومعبد مصري.</p>

                <div className="my-10 flex flex-col items-center">
                    <img 
                        src="/images/articles/stylistic-ornamentation-and-decoration-2/torus-detail.jpg" 
                        alt="تفاصيل الطوروس في الأبواب الوهمية" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-16 mb-8 border-b-2 border-ewc-red w-fit pb-1">
                    أساليب الزخرفة والتزيين الراقية
                </h2>
                <p>يغفل الكثيرون عن المواهب الفنية للمصريين القدماء ويتركزون فقط على الرسوم التصويرية في المباني. يمكن تصنيف أنماط التصميم في مصر عمومًا إلى أنماط نباتية وهندسية وتصويرية أو مزيج من اثنين أو الثلاثة.</p>

                <h3 className="text-lg md:text-xl font-bold text-ewc-navy mt-10 mb-4">الأنماط النباتية (Floral Patterns)</h3>
                <p>يُصوَّر نمط الأزهار مراحل النمو المختلفة للزهور من البرعم المغلق إلى الزهرة المفتوحة. كما كانت أعمدة المعابد في مصر أكثر من مجرد هياكل داعمة، فقد كانت جزءًا لا يتجزأ من المعبد الحيوي النابض بالحياة.</p>

                <div className="my-10 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/palm-column.jpg" 
                            alt="تيجان أعمدة على شكل نخيل" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">محاكاة لأشجار النخيل</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/closed-buds.jpg" 
                            alt="أعمدة ببراعم مغلقة" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">براعم مغلقة</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/open-blossom.jpg" 
                            alt="أعمدة بزهور مفتوحة" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">أزهار مفتوحة</p>
                    </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-ewc-navy mt-10 mb-4">أنماط التصميم الهندسي (Geometric Designs)</h3>
                <p>تنتشر أنماط التصميم الهندسي في كل مكان مثل الأسقف المرصعة بالنجوم. تتميز أسقفهم وأفاريزهم بالعديد من الزخارف الأنيقة مثل الزخرفة المتعرجة والزخرفة الحلزونية.</p>

                <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/starry-ceiling.jpg" 
                            alt="سقف مرصع بالنجوم" 
                            className="rounded-lg shadow-sm w-full max-w-[150px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">سقف النجوم</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/guilloche-ceiling.jpg" 
                            alt="زخرفة الغيوشيه المتشابكة" 
                            className="rounded-lg shadow-sm w-full max-w-[150px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">الزخرفة المتشابكة (غيوشيه)</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/chevron-pattern.jpg" 
                            alt="زخرفة الشيفرون المتعرجة" 
                            className="rounded-lg shadow-sm w-full max-w-[150px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">الزخرفة المتعرجة (شيفرون)</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/spiral-scroll.jpg" 
                            alt="الزخرفة الحلزونية" 
                            className="rounded-lg shadow-sm w-full max-w-[150px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">الزخرفة الحلزونية</p>
                    </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-ewc-navy mt-10 mb-4">الزخارف التصويرية (Figurative Decorations)</h3>
                <p>تُوجد الزخارف التصويرية في أماكن كثيرة، وغالباً ما نراها في مزيج مع الزهور والزخارف الهندسية.</p>

                <div className="my-10 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/egyptian-vulture-color.jpg" 
                            alt="زخرفة النسر الملونة" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">النسر</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/hathor-sistrum.jpg" 
                            alt="هتحور والصنجة" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">هتحور والصنجة</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/cobra.jpg" 
                            alt="زخرفة الكوبرا" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">الكوبرا</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/mixed-motifs.jpg" 
                            alt="مزيج من الزخارف" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">مزيج زخرفي</p>
                    </div>
                </div>

                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-12 mb-6 border-b border-gray-100 pb-2">
                    الألوان (Colors)
                </h2>
                <p>كان اللون عنصرًا أساسيًا في العمارة المصرية. لا يُنكر أي شخص يفهم في تناغم الألوان أن المصريين القدماء كانوا يُدركون جيدًا كيفية توزيع الألوان وتنسيقها تنسيقًا سليمًا. واختيار الألوان يعكس فهم المصريين العميق للدلالة الروحانية لكل لون ولطاقته.</p>

                <div className="my-10 flex flex-wrap justify-center gap-6">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/color-harmony.jpg" 
                            alt="تناغم الألوان في النقوش المصرية" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/egyptian-color-ceiling.jpg" 
                            alt="تناغم الألوان على سقف معبد" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/stylistic-ornamentation-and-decoration-2/egyptian-color-relief.jpg" 
                            alt="ألوان غنية في النقوش" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                    </div>
                </div>

                <p>كانت أسقف المعابد المصرية تُطلى باللون الأزرق وتُرصّع بالنجوم لتمثل السماء، وفوق الممر المركزي كانت تستخدم النسور ورموز أخرى؛ وكان للكرة الأرضية المجنحة مكانها دائمًا فوق المداخل.</p>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center text-center">
                    <img 
                        src="/images/articles/stylistic-ornamentation-and-decoration-2/metaphysical-architecture.jpg" 
                        alt="The Ancient Egyptian Metaphysical Architecture Book Cover" 
                        className="w-full max-w-[180px] h-auto rounded-lg shadow-lg mb-6 border border-gray-50" 
                    />
                    <p className="text-sm font-bold text-ewc-blue">
                        بحث وكتابة: مصطفى جاد الله
                    </p>
                </div>
            </div>
        </article>
    );
}
