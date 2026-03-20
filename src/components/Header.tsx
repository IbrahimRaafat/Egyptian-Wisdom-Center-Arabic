import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#ffffff] shadow-[0_2px_10px_rgba(47,99,157,0.2)] border-b-[5px] border-ewc-blue">
            <div className="flex justify-between items-center px-6 py-4 max-w-[1200px] mx-auto">
                {/* Logo Area */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-heading text-xl md:text-3xl text-ewc-blue tracking-wider">
                        مركز الحكمة المصري
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-5 font-sans text-sm md:text-base text-ewc-blue font-semibold">

                    {/* مقالات - Articles */}
                    <div className="relative group">
                        <Link href="/articles" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            المقالات
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>

                        <div className="absolute top-full right-0 w-[700px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                                <Link href="/articles/category/egyptian-society" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">الآثار والأرض وشعوب مصر</Link>
                                <Link href="/articles/category/the-social-and-political-system" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">النظام الاجتماعي والسياسي</Link>
                                <Link href="/articles/category/egyptian-cosmic-religion" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">الدين الكوني المصري</Link>
                                <Link href="/articles/category/egyptian-architecture-function-and-form-sacred-geometryetc" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">العمارة المصرية [الوظيفة والشكل، الهندسة المقدسة، الخ]</Link>
                                <Link href="/articles/category/egyptian-ideograms-pictorial-representations-and-meanings" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">الكتابة التصويرية المصرية [التمثيلات الصورية والمعاني]</Link>
                                <Link href="/articles/category/learned-ancient-egyptians" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">قدماء المصريين المتعلمين</Link>
                                <Link href="/articles/category/the-egyptian-musical-heritage" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">التراث الموسيقي المصري</Link>
                                <Link href="/articles/category/vibrant-ancient-egyptian-economy" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">الاقتصاد المصري القديم النابض بالحياة</Link>
                                <Link href="/articles/category/ancient-egypt-bible" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">مصر القديمة والكتاب المقدس</Link>
                                <Link href="/articles/category/egypt-and-the-world-past-and-present" className="text-gray-300 hover:text-white text-sm transition-colors leading-relaxed border-b border-gray-600 pb-2">مصر والعالم - الماضي والحاضر</Link>
                            </div>
                        </div>
                    </div>

                    {/* البودكاست - Podcasts */}
                    <div className="relative group">
                        <Link href="/podcasts" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            البودكاست
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full right-0 w-[250px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="flex flex-col p-4 gap-2 relative group/audio">
                                <div className="text-gray-300 hover:text-white text-sm transition-colors py-2 flex justify-between items-center cursor-pointer border-b border-gray-600 pb-2">
                                    البودكاست الصوتي
                                    <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                                {/* 3rd level menu */}
                                <div className="absolute top-0 right-[250px] w-[200px] bg-[#444444] hidden group-hover/audio:block shadow-xl">
                                    <div className="flex flex-col p-4 gap-2">
                                        <Link href="/podcasts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">بودكاست إنجليزي</Link>
                                        <Link href="/podcasts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">بودكاست إسباني</Link>
                                        <Link href="/podcasts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">بودكاست روسي</Link>
                                        <Link href="/podcasts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">بودكاست ألماني</Link>
                                        <Link href="/podcasts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">بودكاست فرنسي</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* كتبنا - Our Books */}
                    <div className="relative group">
                        <Link href="/books" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            كتبنا
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full right-0 w-[400px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-6">
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الإنجليزية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الفرنسية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الإسبانية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الألمانية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الهندية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الإيطالية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الهولندية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الروسية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة البرتغالية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الصينية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة اليابانية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الرومانية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة الفنلندية</Link>
                                <Link href="/books" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النسخة السويدية</Link>
                            </div>
                        </div>
                    </div>

                    {/* الفنون المسرحية - Performing Arts */}
                    <div className="relative group">
                        <Link href="/performing-arts" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            الفنون المسرحية
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full right-0 w-[280px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="flex flex-col p-4 gap-2">

                                {/* Isis Rises */}
                                <div className="relative group/isis">
                                    <div className="text-gray-300 hover:text-white text-sm transition-colors py-2 flex justify-between items-center cursor-pointer border-b border-gray-600 pb-2">
                                        أوبريت إيزيس تنهض
                                        <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                    <div className="absolute top-0 right-[280px] w-[200px] bg-[#444444] hidden group-hover/isis:block shadow-xl z-50">
                                        <div className="flex flex-col p-4 gap-2">
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">عن الأوبريت</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المشاهد الفنية</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">فيديو وكتاب مجاني</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المقطع الترويجي</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">حقوق النشر والترخيص</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Horus */}
                                <div className="relative group/horus">
                                    <div className="text-gray-300 hover:text-white text-sm transition-colors py-2 flex justify-between items-center cursor-pointer border-b border-gray-600 pb-2">
                                        أوبريت حورس المبتدئ
                                        <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                    <div className="absolute top-0 right-[280px] w-[200px] bg-[#444444] hidden group-hover/horus:block shadow-xl z-50">
                                        <div className="flex flex-col p-4 gap-2">
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">عن الأوبريت</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المشاهد الفنية</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">فيديو وكتاب مجاني</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المقطع الترويجي</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Goddesses */}
                                <div className="relative group/goddess">
                                    <div className="text-gray-300 hover:text-white text-sm transition-colors py-2 flex justify-between items-center cursor-pointer border-b border-gray-600 pb-2">
                                        أوبريت الآلهة المصرية
                                        <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                    <div className="absolute top-0 right-[280px] w-[200px] bg-[#444444] hidden group-hover/goddess:block shadow-xl z-50">
                                        <div className="flex flex-col p-4 gap-2">
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">عن الأوبريت</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المشاهد الفنية</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">فيديو وكتاب مجاني</Link>
                                            <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المقطع الترويجي</Link>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2 py-2">أوبريت المزمار الصوفي</Link>
                                <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2 py-2">أوبريت نوتردام دي لا مير</Link>
                                <Link href="/performing-arts" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2 py-2">أوبريت النيل الأزرق</Link>
                            </div>
                        </div>
                    </div>

                    {/* مكتبة الصور - Photo Library */}
                    <Link href="/photos" className="hover:text-ewc-red transition-colors py-4">مكتبة الصور</Link>

                    {/* الأفلام الوثائقية - Documentaries */}
                    <div className="relative group">
                        <Link href="/documentaries" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            الأفلام الوثائقية
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full right-0 w-[240px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="flex flex-col p-4 gap-2">
                                <Link href="/documentaries" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">وثائقي الكنز الموسيقي المصري</Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/forum" className="hover:text-ewc-red transition-colors py-4">منتدى النقاش</Link>
                    <Link href="/contact" className="hover:text-ewc-red transition-colors py-4">اتصل بنا</Link>
                </nav>
            </div>
        </header>
    );
}
