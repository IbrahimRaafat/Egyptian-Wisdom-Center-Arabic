'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-ewc-blue shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-12 px-8 py-4 md:py-6 max-w-[1200px] mx-auto">
                {/* Logo Area */}
                <div className="flex-shrink-0">
                    <Link href="/" className="font-heading text-2xl md:text-4xl text-ewc-gold tracking-tight hover:brightness-110 transition-all font-black leading-none pb-1">
                        مركز الحكمة المصري
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10 font-sans text-sm md:text-base text-white/95 font-semibold">
                    <div className="relative group">
                        <Link href="/articles" className="hover:text-ewc-gold transition-colors flex items-center gap-1 py-4">
                            المقالات
                            <svg className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] max-w-[calc(100vw-2rem)] bg-[#333333] hidden group-hover:block shadow-2xl z-50 rounded-b-lg border-t-4 border-ewc-gold animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 p-6">
                                <Link href="/articles/category/egyptian-society" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    الآثار والأراضي والشعوب في مصر
                                </Link>
                                <Link href="/articles/category/the-social-and-political-system" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    النظام الاجتماعي والسياسي
                                </Link>
                                <Link href="/articles/category/egyptian-architecture-function-and-form-sacred-geometryetc" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    العمارة المصرية
                                </Link>
                                <Link href="/articles/category/egyptian-ideograms-pictorial-representations-and-meanings" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    التصويرات المصرية
                                </Link>
                                <Link href="/articles/category/learned-ancient-egyptians" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    المصريون القدماء المتعلمون
                                </Link>
                                <Link href="/articles/category/egyptian-cosmic-religion" className="text-gray-300 hover:text-white text-sm transition-colors border-b border-gray-700/50 pb-2 flex items-center gap-2 hover:bg-white/5 p-2 rounded">
                                    <span className="w-1.5 h-1.5 bg-ewc-gold rounded-full"></span>
                                    الديانة الكونية المصرية
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <Link href="/performing-arts" className="hover:text-ewc-gold transition-colors py-4">الفنون المسرحية</Link> */}
                    <Link href="/photo-library" className="hover:text-ewc-gold transition-colors py-4">مكتبة الصور</Link>
                    {/* 
                    <Link href="/forum" className="hover:text-ewc-red transition-colors py-4">منتدى النقاش</Link>
                    <Link href="/contact" className="hover:text-ewc-red transition-colors py-4">اتصل بنا</Link>
                    */}
                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
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
                <div className="lg:hidden bg-ewc-blue border-t border-white/10 shadow-inner px-4 py-8 font-sans">
                    <div className="flex flex-col gap-5 text-white/95 font-semibold">
                        <Link href="/articles" className="py-3 border-b border-white/5 hover:text-ewc-gold" onClick={() => setIsMenuOpen(false)}>المقالات</Link>
                        {/* <Link href="/performing-arts" className="py-3 border-b border-white/5 hover:text-ewc-gold" onClick={() => setIsMenuOpen(false)}>الفنون المسرحية</Link> */}
                        <Link href="/photo-library" className="py-3 border-b border-white/5 hover:text-ewc-gold" onClick={() => setIsMenuOpen(false)}>مكتبة الصور</Link>
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
