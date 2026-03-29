import React from 'react';

export const metadata = {
    title: 'تدفق الطاقة والترابط في الأعمال المصرية - مركز الحكمة المصري',
    description: 'استكشف كيف ضمن المصريون القدماء تدفق الطاقة الكونية من خلال تقنيات الترابط والوصلات العضوية في المعابد والتماثيل، بعيداً عن الغرض الإنشائي البسيط.',
};

export default function EnergyFlowConnectivityPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    تدفق الطاقة والترابط في الأعمال المصرية
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-10 prose-p:mt-0 prose-img:rounded-md prose-img:shadow-sm">
                <p>في ترنيمة رع، تُوصف القوة الكونية الخلاقة "رع" بأنها:</p>
                <p className="font-bold text-ewc-navy text-lg md:text-xl italic leading-relaxed my-12 text-center text-balance px-4 border-r-4 border-ewc-red py-2 bg-gray-50/50">
                    "الواحد المتصل ببعضه – الذي يخرج من أجزائه."
                </p>
                <p>هذا هو التعريف الأمثل لوحدة التعددات باعتبارها النموذج الأصلي للكون المخلوق. من أجل ضمان وظيفة المعبد أو التمثال أو ما شابه ككائن حي يجب أن تكون مكوناته متصلة ببعضها لكي تتدفق الطاقة الكونية بحرية.</p>

                <p>من الخطأ تصور أن الربط بين مكونين أو جزأين يقتصر على ضمان استقرار هيكل الجزء أو الأجزاء واستقرار المبنى ككل. يمكننا استلهام بعض التوضيحات من جسم الإنسان (موطن الروح) عند دراسة المعبد المصري (موطن الروح/الطاقة/النتر الكوني).</p>

                <p>تربط العضلات جسم الإنسان ببعضه، والأوردة والأعصاب تمر عند مفاصل العظام في الهيكل العظمي. وقد صُمم المعبد المصري الحي بطريقة مماثلة. إن اتحاد مكونات المعبد ينبغي أن يكون كاتحاد مكونات جسم الإنسان. تتألف جدران المعبد من كتل وزوايا ويتم ربط الكتل معًا بطريقة تسمح بتدفق الطاقة الإلهية تمامًا مثل أجزاء جسم الإنسان.</p>

                <p>تمتد النقوش البارزة بمختلف أحجامها بالإضافة إلى الرموز الهيروغليفية على كتلتين حجريتين متجاورتين بإتقان تام. والهدف هو ربط الكتل المتجاورة أو تلك التي فوق بعضها كما توضح الصورة التالية:</p>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/bas-relief-spanning.jpg" 
                        alt="النقوش البارزة تمتد عبر الكتل الحجرية لضمان الترابط" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <p>الكتل نفسها متصلة ببعضها بنظام يشبه شبكة الأعصاب/الطاقة، ويتطلب استمرار تدفق الطاقة أنماطًا خاصة متشابكة. نرى ترابط الكتل معًا في جميع المعابد المصرية عبر التاريخ المعروف لمصر القديمة، وفيما يلي بعض الأمثلة على تطبيقات الترابط:</p>

                {/* Section 1: Initial Examples */}
                <ol className="list-decimal pr-6 space-y-6 mb-10 font-bold text-ewc-navy">
                    <li>
                        حفر شق سطحي بعمق 2 سم (بوصة واحدة) في كل كتلة حجرية على شكل وصلة تعشيق لربط الحجر بالحجر المجاور. هذه التجاويف تربط كل حجر بالآخر كشبكةٌ عصبيةٌ أو شريانيةٌ تمتد في جميع أنحاء المعبد.
                    </li>
                </ol>

                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/dovetail-notch.jpg" 
                            alt="وصلات التعشيق في معبد أبيدوس" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">وصلة تعشيق في معبد أبيدوس</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/hammer-marks-diagram.jpg" 
                            alt="رسم توضيحي لوصلات التعشيق وعلامات المطرقة" 
                            className="rounded-lg shadow-md w-full max-w-[200px] h-auto bg-white p-2" 
                        />
                        <p className="text-sm italic text-gray-500 mt-2">1. وصلة تعشيق على شكل مفتاح | 2. علامات مطرقة أنيقة</p>
                    </div>
                </div>

                <p>لم يُعثر قط على أي مادةٍ رابطةٍ في هذه التجاويف الضحلة المتداخلة، ولا توجد أي أهميةٍ معماريةٍ أو إنشائيةٍ لهذه التجاويف سواءً كانت مزودةً بوصلاتٍ خشبيةٍ أم لا.</p>

                <ol className="list-decimal pr-6 space-y-6 mb-10 font-bold text-ewc-navy" start={2}>
                    <li>توجد علاماتُ شائعة مستطيلةٌ مقصودة واضحةٌ وأنيقةٌ يدوية الصنع دُقّت بمطرقة أعلى قطع الأجحار.</li>
                    <li>تتصل أجزاءُ الأعمدة الدائريةٍ بعلامات دوائر واضحةٍ دُقّت بطريقة أنيقة بالمطرقة.</li>
                </ol>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/circular-pole-joint.jpg" 
                        alt="تجويف سطحي في الأعمدة المزدوجة" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto bg-white p-2" 
                    />
                    <p className="text-sm italic text-gray-500 mt-2">3. عمود كتلة واحدة | 4. عمود مزدوج الكتلة مع تجويف طاقة</p>
                </div>

                <ol className="list-decimal pr-6 space-y-6 mb-10 font-bold text-ewc-navy" start={4}>
                    <li>وُجد أن الأعمدة المبنية من قطعٍ نصف دائريةٍ (تعبيرًا عن الازدواجية) تحتوي على تجويفٍ سطحيٍّ بعمق ١ بوصة (٢ سم)، وهو شق بين القطعتين النصف دائريتين لا جدوى له من الناحية المعمارية أو الإنشائية.</li>
                    <li>رُصفت بلاطات الأرضية داخل وحول المباني المصرية القديمة على شكل فسيفساء لتجنب الزوايا الحادة وخطوط التشققات المستمرة، كما هو الحال في بلاطات الرصف الضخمة المحيطة بأهرامات الجيزة.</li>
                </ol>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/mosaic-paving-giza.jpg" 
                        alt="بلاطات الرصف بأسلوب الفسيفساء لتجنب التشققات المستمرة" 
                        className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                    />
                </div>

                <h2 className="text-xl md:text-2xl font-heading text-ewc-blue mt-16 mb-8 border-b border-gray-100 pb-2">
                    أمثلة على تطبيقات الترابط والوصلات العضوية:
                </h2>

                <ol className="list-decimal pr-6 space-y-8 mb-10 font-bold text-ewc-navy">
                    <li>في معبد وادي خفرع في الجيزة بالقرب من أبو الهول:
                        <p className="font-normal text-gray-700 mt-2">رُصّت العديد من الأحجار بزوايا مختلفة. هذه الممارسة التي كانت شائعة في المباني المصرية لا تُقدم أي ميزة إنشائية مقارنةً بالرص منتظم. زوايا الأحجار ليست منتظمة أو لها وصلات تعشيق منتظمة، بل هي أحجار بزوايا مقلوبة، وتمتد الوصلات حول الزوايا.</p>
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/khafra-valley-corners.jpg" 
                                alt="زوايا الأحجار في معبد الوادي لخفرع" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>وُجدت هذه الطريقة أيضًا في سقارة من عصر الدولة القديمة عند المدخل عبر الجدار المحيط:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/saqqara-entrance-joint.jpg" 
                                alt="تقنيات توصيل الأحجار عند مدخل سقارة" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>في مجمع معابد الكرنك، نجد نفس التقنية في وصل الأحجار والرسم عليها:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/karnak-depiction-joint.jpg" 
                                alt="وصل الأحجار والرسم عليها في الكرنك" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>في معبد كوم أمبو، نجد رموزاً هيروغليفية حُفرت على حجرين متجاورين بدقة متناهية:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/kom-ombo-hieroglyph.jpg" 
                                alt="رموز هيروغليفية في كوم أمبو تمتد عبر حجرين" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                        <p className="font-normal text-gray-700 mt-4">ونرى في نهاية الجدار الوصلات الداخلية وآثار المطرقة الدقيقة، والتي يوضح المهندس مصطفى جاد الله (بخبرته كمهندس مدني 40 عاماً) أنها لا تحمل أي قيمة إنشائية بل غرضاً عضوياً.</p>
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/kom-ombo-hammer-internal.jpg" 
                                alt="الوصلات الداخلية وآثار المطرقة في كوم أمبو" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>في معبد الأقصر، نجد هذه التقنية في التماثيل الجرانيتية الكبيرة الجالسة (إصلاح شق مائل بوضلتي تعشيق):
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/seated-statue-joint.jpg" 
                                alt="وصلات التماثيل في معبد الأقصر" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>نجد أنواعاً مماثلة في تماثيل الكباش (طريق الكباش) الممتد بين معبدي الأقصر والكرنك:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/sphinx-avenue-joint.jpg" 
                                alt="وصلات تماثيل الكباش" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>على الطريق المرصوف بين معبدي الأقصر والكرنك، نجد تطبيقاً آخر لبلاطات الفسيفساء لتجنب التشققات المتصلة:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/paved-roadway-mosaic.jpg" 
                                alt="أنماط الرصف على الطريق بين الأقصر والكرنك" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>في شمال هضبة الجيزة، على الممر الواصل بين هرم خفرع ومعبد الوادي:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/causeway-giza.jpg" 
                                alt="أنماط الرصف في ممر هرم خفرع" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>بلاطات رصف ضخمة متراصة بدقة حول قاعدة هرم خفرع:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/khafra-base-paving.jpg" 
                                alt="رصف قاعدة هرم خفرع" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>

                    <li>وتنتشر هذه الأنماط في جميع أنحاء هضبة الجيزة لضمان تدفق الطاقة دون عوائق:
                        <div className="mt-8 flex flex-col items-center">
                            <img 
                                src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/giza-plateau-patterns.jpg" 
                                alt="أنماط الترابط في هضبة الجيزة" 
                                className="rounded-lg shadow-md w-full max-w-[200px] h-auto" 
                            />
                        </div>
                    </li>
                </ol>

                <p className="mt-12">لطالما تجنب المصريون القدماء -عبر التاريخ- الوصلات البسيطة والحادة والمتشابكة. إن إنشاء زوايا متصلة ومتواصلة يسمح للطاقة بالتدفق دون عوائق.</p>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center">
                    <img 
                        src="/images/articles/energy-flow-and-connectivity-in-egyptian-works-2/metaphysical-architecture.jpg" 
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
