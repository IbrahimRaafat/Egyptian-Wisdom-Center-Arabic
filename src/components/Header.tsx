'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#ffffff] shadow-[0_2px_10px_rgba(47,99,157,0.2)] border-b-[5px] border-ewc-blue">
            <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-[1200px] mx-auto">
                {/* Logo Area */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-heading text-lg md:text-3xl text-ewc-blue tracking-wider">
                        مركز الحكمة المصري
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-5 font-sans text-sm md:text-base text-ewc-blue font-semibold">
                    <div className="relative group">
                        <Link href="/articles" className="hover:text-ewc-red transition-colors flex items-center gap-1 py-4">
                            المقالات
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full right-0 w-[700px] bg-[#333333] hidden group-hover:block shadow-2xl z-50">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-8">
                                <Link href="/articles/category/egyptian-society" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">الآثار والأراضي والشعوب في مصر</Link>
                                <Link href="/articles/category/the-social-and-political-system" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">النظام الاجتماعي والسياسي</Link>
                                <Link href="/articles/category/egyptian-cosmic-religion" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">الديانة الكونية المصرية</Link>
                                <Link href="/articles/category/egyptian-architecture-function-and-form-sacred-geometryetc" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">العمارة المصرية</Link>
                                <Link href="/articles/category/egyptian-ideograms-pictorial-representations-and-meanings" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">التصويرات المصرية</Link>
                                <Link href="/articles/category/learned-ancient-egyptians" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">المصريون القدماء المتعلمون</Link>
                                <Link href="/articles/category/the-egyptian-musical-heritage" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">التراث الموسيقي المصري</Link>
                                <Link href="/articles/category/vibrant-ancient-egyptian-economy" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-600 pb-2">الاقتصاد المصري القديم النابض بالحياة</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/performing-arts" className="hover:text-ewc-red transition-colors py-4">الفنون المسرحية</Link>
                    <Link href="/photo-library" className="hover:text-ewc-red transition-colors py-4">مكتبة الصور</Link>
                    {/* 
                    <Link href="/forum" className="hover:text-ewc-red transition-colors py-4">منتدى النقاش</Link>
                    <Link href="/contact" className="hover:text-ewc-red transition-colors py-4">اتصل بنا</Link>
                    */}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-ewc-blue hover:bg-gray-100 rounded-md transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-inner px-4 py-6 font-sans">
                    <div className="flex flex-col gap-4 text-ewc-blue font-semibold">
                        <Link href="/articles" className="py-2 border-b border-gray-50 hover:text-ewc-red" onClick={() => setIsMenuOpen(false)}>المقالات</Link>
                        <Link href="/performing-arts" className="py-2 border-b border-gray-50 hover:text-ewc-red" onClick={() => setIsMenuOpen(false)}>الفنون المسرحية</Link>
                        <Link href="/photo-library" className="py-2 border-b border-gray-50 hover:text-ewc-red" onClick={() => setIsMenuOpen(false)}>مكتبة الصور</Link>
                        {/* 
                        <Link href="/forum" className="py-2 border-b border-gray-50 hover:text-ewc-red" onClick={() => setIsMenuOpen(false)}>منتدى النقاش</Link>
                        <Link href="/contact" className="py-2 border-b border-gray-50 hover:text-ewc-red" onClick={() => setIsMenuOpen(false)}>اتصل بنا</Link>
                        */}
                    </div>
                </div>
            )}
        </header>
    );
}
