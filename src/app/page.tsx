import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-16 bg-white border-b border-gray-100">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-ewc-blue leading-snug">
            اكتشف أسرار<br /><span className="text-ewc-gold">مصر القديمة</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-sans max-w-2xl">
            مجموعة كبيرة من المقالات المجانية التي كتبها مصطفى جاد الله.
            استمتع بهذه النظرة الثاقبة والرائعة حول الثقافة والحكمة المصرية القديمة بطريقة لم تعهدها من قبل.
          </p>
          <div className="pt-6">
            <Link
              href="/articles"
              className="inline-block bg-ewc-blue text-white px-8 py-4 rounded-md font-sans font-bold text-lg hover:bg-ewc-navy transition-all shadow-[0_4px_14px_0_rgba(47,99,157,0.39)] hover:shadow-[0_6px_20px_rgba(47,99,157,0.23)] hover:-translate-y-1"
            >
              ابدأ القراءة الآن
            </Link>
          </div>
        </div>

        {/* Decorative Image Area */}
        <div className="flex-1 w-full max-w-lg mx-auto flex justify-center">
          <div className="relative w-full aspect-[4/5] flex flex-col items-center justify-center overflow-hidden group">
            <Image
              src="/header-background-transparent.webp"
              alt="Egyptian Wisdom Center"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Grids */}
      <section className="px-8 mt-4 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-ewc-navy mb-4 inline-block relative">
            أقسام الموقع
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-ewc-red rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Articles */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">المقالات</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              تصفح مجموعتنا الشاملة من المقالات حول التاريخ، الروحانية، والعلوم المصرية القديمة.
            </p>
            <Link href="/articles" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              اقرأ المزيد <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>

          {/* Card 2: Podcasts - COMMENTED OUT FOR NOW
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">البودكاست</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              استمع إلى حلقات بودكاست تناقش جوانب متعددة من الحكمة المصرية بأصوات متخصصة.
            </p>
            <Link href="/podcasts" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              استمع الآن <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>
          */}

          {/* Card 3: Books - COMMENTED OUT FOR NOW
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">كتبنا</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              اكتشف مئات الكتب والأبحاث حول التاريخ المصري للكاتب مصطفى جاد الله.
            </p>
            <Link href="/books" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              تصفح الكتب <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>
          */}
          {/* Card 4: Performing Arts */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">الفنون المسرحية</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              اكتشف التناغم وروعة الفنون المصرية القديمة.
            </p>
            <Link href="/performing-arts" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              شاهد التفاصيل <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>

          {/* Card 5: Photo Library */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">مكتبة الصور</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              استكشف معرض الصور الخاص بنا للآثار والمعابد والأعمال الفنية المدهشة.
            </p>
            <Link href="/photo-library" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              عرض الصور <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>

          {/* Card 6: Documentaries */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start gap-4 group translate-y-0 hover:-translate-y-2">
            <div className="bg-ewc-blue/10 p-4 rounded-full text-ewc-blue group-hover:bg-ewc-blue group-hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-ewc-navy font-sans group-hover:text-ewc-red transition-colors">الأفلام الوثائقية</h3>
            <p className="text-gray-600 flex-grow font-sans leading-relaxed">
              أفلام قصيرة ووثائقيات تكشف حقائق وأسرار عن الفراعنة وتاريخهم.
            </p>
            <Link href="/documentaries" className="text-ewc-blue font-bold hover:text-ewc-red flex items-center gap-2 transition-colors mt-2">
              شاهد الأفلام <span className="rtl:rotate-180 inline-block">←</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
