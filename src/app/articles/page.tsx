import Link from 'next/link';

// Mock data
const mockArticles = [
    { slug: "ancient-egypt-spirituality", title: "الروحانية في مصر القديمة", category: "الروحانية", excerpt: "نظرة متعمقة على المعتقدات الروحية لقدماء المصريين وتأثيرها." },
    { slug: "the-musical-wisdom", title: "الحكمة الموسيقية", category: "الفنون", excerpt: "كيف كانت الموسيقى جزءاً لا يتجزأ من الحياة اليومية والدينية." },
    { slug: "antiquities-land-peoples", title: "الآثار والأرض والشعوب", category: "التاريخ", excerpt: "تاريخ الحضارة المصرية وارتباطها الوثيق بنهر النيل." }
];

export default function ArticlesPage() {
    return (
        <div className="px-8 py-12 max-w-5xl mx-auto animate-fade-in">
            <h1 className="text-4xl font-heading text-[#dbae89] mb-10 border-b-2 border-gray-100 pb-4 inline-block">
                المقالات
                <div className="h-1 w-1/2 bg-ewc-red mt-2"></div>
            </h1>

            <div className="grid gap-6">
                {mockArticles.map((article) => (
                    <article key={article.slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                        <span className="text-sm font-bold text-ewc-red mb-2 inline-block bg-red-50 px-2 py-1 rounded">{article.category}</span>
                        <h2 className="text-2xl font-bold text-ewc-navy mb-3 group-hover:text-ewc-blue transition-colors">
                            <Link href={`/articles/${article.slug}`}>
                                {article.title}
                            </Link>
                        </h2>
                        <p className="text-gray-700 font-sans mb-4">{article.excerpt}</p>
                        <div className="mt-4">
                            <Link href={`/articles/${article.slug}`} className="text-ewc-blue font-semibold hover:underline text-sm flex items-center gap-1">
                                اقرأ المقال كاملاً
                                <span className="rtl:rotate-180">←</span>
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
