import React from 'react';

export const metadata = {
    title: 'أنماط كتابة الأبجدية المصرية - مركز الحكمة المصري',
    description: 'تعرف على الفرق بين الخطوط المصرية القديمة: الهيراطيقية، الديموطيقية، والقبطية، وحقيقة أصولها الأبجدية بعيداً عن التصنيفات الغربية المضللة.',
};

export default function WritingStylesPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    أنماط كتابة الأبجدية المصرية
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                <h2 className="text-ewc-red font-bold">1. التصنيف الغربي المضلل للكتابات الأبجدية المصرية</h2>
                <br />
                <p>رغم كل الحقائق، اختلقت الأوساط الأكاديمية الغربية قصةً مفادها أن الكتابة الهيراطيقية تمثل تدهورًا للرموز التصويرية الهيروغليفية، وأن الكتابة الديموطيقية مثلت مزيدًا من التدهور للكتابة الهيراطيقية المتدهورة أصلًا! تتلخص هذه الخطة المضللة في إنكار أن مصر هي منشأ الأبجدية ونسب أبجديات حقيقية إلى دول أوروبية.</p>
                <br />

                <h3 className="text-xl font-bold text-ewc-red mb-4">أ. النصوص الهيراطيقية (المقدسة)</h3>
                <br />
                <p>يزعم الأكاديميون الغربيون أن الكتابة "الهيراطيقية" هي شكل فريد من أشكال الكتابة المتصلة. لكن كلمة "هيراطيقي" تعني مقدس، ومن التناقض تسمية نصوص يومية عادية بـ "الهيراطيقية"! فكثير مما يُصنف هكذا هو مجرد ملصقات أواني أو سجلات عمل يومية.</p>

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetic-writing-styles/mundane-ostraka.jpg" 
                        alt="Mundane Ostraka Examples" 
                        className="w-full max-w-lg mx-auto block h-auto rounded-lg shadow-md mb-4" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600">
                        نماذج من رقائق "الأوستراكا" الفخارية التي تحمل موضوعات عادية وتم تصنيفها خطأً كـ "هيراطيقية".
                    </p>
                </div>
                <br />

                <h3 className="text-xl font-bold text-ewc-red mb-4">ب. النصوص الديموطيقية (الشعبية)</h3>
                <br />
                <p>يزعمون أن الخط الديموطيقي هو شكل فريد يُستخدم فقط في الشؤون الدنيوية. لكن الواقع يثبت استخدامه في النصوص الدينية أيضًا، مما ينفي سمة "الشعبية" المحضة التي أراد الغربيون حصرها فيها.</p>

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetic-writing-styles/calligraphic-demotic.jpg" 
                        alt="Calligraphic Demotic Sample" 
                        className="w-full max-w-md mx-auto block h-auto rounded-lg shadow-md mb-4" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600">
                        نموذج لخط "ديموطيقي" متقن يثبت استخدامه في أغراض فنية ومقدسة.
                    </p>
                </div>
                <br />

                <h3 className="text-xl font-bold text-ewc-red mb-4">ج. النصوص القبطية</h3>
                <br />
                <p>يدعي الغربيون أن "القبطية" طُوّرت بتبني الأبجدية اليونانية. لكن الحقيقة هي أنها شكل من أشكال الكتابة المصرية القديمة بالأحرف الكبيرة، وقد أخذها اليونانيون عن المصريين.</p>

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetic-writing-styles/nag-hammadi-coptic.jpg" 
                        alt="Nag Hammadi Coptic Script" 
                        className="w-full max-w-lg mx-auto block h-auto rounded-lg shadow-md mb-4" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600">
                        نص من مخطوطات نجع حمادي مكتوب بنفس أشكال الحروف المصرية القديمة.
                    </p>
                </div>
                <br />

                <h2 className="text-ewc-red font-bold">2. النصان المصريان الأساسيان (الخط الكبير والخط المتصل)</h2>
                <br />
                <p>حدد كليمنت الإسكندري نمطين أساسيين للكتابة الأبجدية: أحدهما للاستخدام المنزلي/العادي، والآخر خاص بالكهنة حصراً للكتابات الدينية:</p>
                <br />

                <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse border border-gray-200 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="border border-gray-200 p-3 text-ewc-red font-bold">النمط المتصل</th>
                                <th className="border border-gray-200 p-3 text-ewc-red font-bold">النمط الكهنوتي (الديني)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 p-3">خط انسيابي دائري موصول</td>
                                <td className="border border-gray-200 p-3">مربع، غير مائل، أحرف كبيرة منفصلة</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-3">سهل الكتابة (كوفي)</td>
                                <td className="border border-gray-200 p-3">سهل القراءة (بصري)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 p-3">للشؤون المحلية والدنيوية</td>
                                <td className="border border-gray-200 p-3">للشؤون اللاهوتية والدينية</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="my-10">
                    <img 
                        src="/images/articles/the-egyptian-alphabetic-writing-styles/ebers-papyrus-sample.jpg" 
                        alt="Ebers Papyrus Sample" 
                        className="w-full max-w-xl mx-auto block h-auto rounded-lg shadow-md mb-4" 
                    />
                    <p className="text-center text-sm font-bold text-gray-600">
                        نموذج من بردية "إيبرس" يمثل النمط المتصل الأنيق.
                    </p>
                </div>
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
