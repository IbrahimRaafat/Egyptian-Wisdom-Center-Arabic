import React from 'react';

export const metadata = {
    title: 'معايير التصميم المتناسق - مركز الحكمة المصري',
    description: 'تعرف على معايير التصميم المتناسق في العمارة المصرية القديمة، من المحاور الفعالة والمتسلسلات الحسابية إلى المثلثات التلسكوبية والمستطيلات الجذرية.',
};

export default function HarmonicDesignPage() {
    return (
        <article className="px-4 md:px-8 py-10 md:py-16 max-w-4xl mx-auto bg-white my-4 md:my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in text-right" dir="rtl">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    معايير التصميم المتناسق
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose prose-p:mb-10 prose-p:mt-0 prose-img:rounded-md prose-img:shadow-sm">
                <p>يُحقَق التصميم المتناسق في العمارة المصرية القديمة من خلال اتحاد نظامين:</p>
                <ol className="list-decimal pr-6 space-y-2 mb-10 font-bold text-ewc-blue">
                    <li>علم الحساب (أرقام هامة).</li>
                    <li>التصميم التخطيطي (مربعات ومستطيلات وبعض المثلثات).</li>
                </ol>

                <p>يعكس اتحاد النظامين العلاقة بين الأجزاء والكل وهو جوهر التصميم المتناسق.</p>
                <p>يتبع الاتحاد بين علم الحساب والتصميم التخطيطي العناصر الموضحة هنا:</p>

                <h2 className="text-xl md:text-2xl font-bold text-ewc-navy mb-6 border-r-4 border-ewc-red pr-4">1. يتكون النظام الحسابي من:</h2>
                
                <h3 className="text-lg md:text-xl font-bold text-ewc-blue mb-4">1-أ. المحاور الفعالة</h3>
                <p>المحور هو خط وهمي مثالي يدور حوله الجسم المتحرك. كذلك في الهندسة فإن المحور أيضًا وهمي – فهو خط بلا سُمك.</p>
                
                <p>كان يُنظر إلى المعبد المصري على أنه وحدة عضوية حية، وأنه في حركة دائمة؛ فتكوين واصطفاف أجزائه المعقدة وتعدد أشكاله غير المتناظرة تجعله يتذبذب حول محاوره. تقع هذه الحركة ضمن إيقاع تحدده "وحدة قياس" أو معامل تحديد الشيء أو الفكرة المراد تعريفها.</p>
                
                <p>يبهرنا التصميم المعماري المصري القديم بتناظره الدقيق حول المحور الطولي، وذلك نتاج معرفة المصريين القدماء بالقوانين الكونية. وقد طبّق المصمم المصري عدم التناظر الكوني الطفيف في تصميم البناء بالتأكد من أن العناصر على جانبي المحور ليسا متطابقين. فبينما يتسمون بالتوازن إلا أن العناصر ليست متناظرة. وفي الصور التالية مثالان على محاور محددة في الرسومات المصرية القديمة.</p>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-harmonic-design-parameters-2/axis.png" 
                        alt="المحاور الفعالة في التصميم المصري القديم" 
                        className="rounded-lg shadow-md max-w-full md:max-w-xl h-auto bg-white p-4" 
                    />
                </div>

                <p>توجد أمثلة لخط المحور في بعض الرسومات أو المخططات المعمارية التي تم العثور عليها على ورق البردي أو الألواح في فترات مختلفة. ويُفترض أنها كانت تدوينات العمال، وعلى الرغم من غرضها العملي إلا أنها لا تزال تُظهر خط المحور مرسومًا بالطريقة التقليدية نفسها المتبعة في الرسومات الحديثة.</p>
                <p>وفي المباني نفسها يتم تحديد المحور بخط محفور على أحجار الطبقة العلوية من بلاطة الأساس كما هو الحال في معبد الأقصر.</p>

                <h3 className="text-lg md:text-xl font-bold text-ewc-blue mb-4">1-ب. النقاط المهمة على امتداد المحور</h3>
                <p>تم تحديد النقاط المهمة على طول محور التصميم، هذه النقاط تحدد تقاطع المحور مع المحاور العرضية، وتحدد توافق المدخل الرئيسي، وموقع المحراب، ومركز المعبد وما إلى ذلك. تتبع هذه النقاط تسلسلًا حسابيًا دقيقًا. وفي العديد من المخططات العظيمة تقع النقاط المهمة على مسافات متوافقة من بعضها، والمسافات من طرف إلى آخر تعبر عن أرقام الأعداد متتالية تسلسل فيبوناتشي Fibonacci (3، 5، 8، 13، 21، 34، 55، 89، 144، 233، 377، 610، ...). يُظهر التحليل التوافقي سلسلة من النقاط المهمة القابلة للقراءة من كلا الجانبين، أي أنه في حالة قلبها فإن نظام من النقاط الهامة يتوافق مع التسلسل ومع النقطة المرجعية التي تبدأ من الطرف المقابل للمخطط.</p>
                
                <p>لقد تجلّت أعداد كبيرة من التسلسل التوافقي في الآثار المصرية منذ عصر الدولة القديمة، ووصل تصميم معبد خفرع الهرمي إلى 233 ذراعًا في طوله الإجمالي -كما تم قياسه -مع متسلسلة متكاملة من عشر نقاط رئيسية.</p>
                <p>يتبع معبد الكرنك أرقام سلسلة التجميع حتى 610 أذرع، أي اثنتي عشرة نقطة هامة. (انظر مخططات كلا المعبدين في مقال آخر).</p>

                <h2 className="text-xl md:text-2xl font-bold text-ewc-navy my-10 border-r-4 border-ewc-red pr-4">2. يتكون نظام التصميم التخطيطي من:</h2>
                
                <h3 className="text-lg md:text-xl font-bold text-ewc-blue mb-4">2-أ. المثلثات التلسكوبية Telescopic</h3>
                <p>إن تصميم المعبد المصري النموذجي يزداد عرضه وارتفاعه من المحراب ونحو اتجاه الواجهة. هذا التحديد الشامل مبني على "نظام تلسكوبي" للتصميم منذ عصر الدولة القديمة. إن الزيادة في العرض تتم باستخدام مثلثات متتالية بنسب 1:2 و1:4 و1:8 من نقطة رئيسية واحدة أو أكثر. (انظر إلى التصميم الجزئي لمعبد الكرنك أدناه.)</p>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-harmonic-design-parameters-2/telescopic-triangles.png" 
                        alt="المثلثات التلسكوبية في تصميم معبد الكرنك" 
                        className="rounded-lg shadow-md max-w-full md:max-w-2xl h-auto bg-white p-4" 
                    />
                </div>

                <p>يُطبَّق نفس التكوين التلسكوبي على البناء الرأسي حيث تنخفض أرضية المعبد وترتفع الأسقف نحو الخارج باتجاه الأعمدة كما هو موضح في العديد من المعابد.</p>

                <h3 className="text-lg md:text-xl font-bold text-ewc-blue mb-4">2-ب. الحدود المستطيلة</h3>
                <p>إن الخطوط الأفقية والرأسية عامة تأخذ شكلاً مستطلاً سواءً لخطة البناء العامة أو المجزئة. ومن أكثر التكوينات شيوعًا ما يلي:</p>
                <ul className="list-disc pr-6 space-y-2 mb-8">
                    <li>مربع بسيط، كما هو الحال في معبد خفرع الهرمي بالجيزة.</li>
                    <li>مربع مزدوج أو مستطيل بنسبة 1:2 كما هو الحال في مجمع زوسر في سقارة والسور الداخلي في الكرنك وقاعة الاحتفالات في توت حمس الثالث.</li>
                    <li>مستطيلات جذرية - أمثلة عديدة موضحة أدناه.</li>
                </ul>

                <div className="my-12 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-harmonic-design-parameters-2/root-rectangles.png" 
                        alt="المستطيلات الجذرية في العمارة المصرية" 
                        className="rounded-lg shadow-md max-w-full md:max-w-xl h-auto bg-white p-4" 
                    />
                </div>

                <ul className="list-disc pr-6 space-y-2 mb-8">
                    <li>المستطيل الذهبي (نب) حيث تساوي النسبة بين ضلعيه: 1.618، وهناك أمثلة عديدة عليه منها معبد خفرع الهرمي في الجيزة (الموضح سابقًا).</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-ewc-navy my-10 border-r-4 border-ewc-red pr-4">المستوى الرأسي</h2>
                <p>أتقن المصريون القدماء المبدأ الرأسي كما أتقنوا الخط الأفقي، فكانت الارتفاعات الرأسية تتبع نفس الزيادة التناسبية للعرض الأفقي مع إضافة أجزاء إلى واجهة المعابد، وهو جانب مميز للمعابد المصرية.</p>
                <p>طبّق المصريون القدماء التناسب التوافقي في الأبعاد الثلاثة مثل الآتي:</p>
                <ul className="list-disc pr-6 space-y-2 mb-10">
                    <li>الأهرامات (قواعد مربعة وشكل مثلث).</li>
                    <li>المثال البارز لـغرفة الملك في هرم خوفو والتي توفر نسب دقيقة للقطر الكبير في الفضاء مع نسب أبعاد الضلع.</li>
                    <li>الأعمدة.</li>
                    <li>المداخل/المنافذ/البوابات.</li>
                </ul>

                <p>يتم عرض تطبيقات متنوعة للتصميم التوافقي في الأعمال المصرية القديمة عبر تاريخها المُكتشف وفي جميع أنحاء البلاد في مقالات أخرى.</p>

                <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center">
                    <img 
                        src="/images/articles/the-harmonic-design-parameters-2/metaphysical-architecture.jpg" 
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
