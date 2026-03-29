import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'المقالات - مركز الحكمة المصري',
    description: 'تصفح جميع أقسام المقالات',
};

const categories = [
    { slug: "egyptian-society", title: "الآثار والأراضي والشعوب في مصر" },
    { slug: "the-social-and-political-system", title: "النظام الاجتماعي والسياسي" },
    { slug: "egyptian-architecture-function-and-form-sacred-geometryetc", title: "العمارة المصرية" },
    { slug: "egyptian-ideograms-pictorial-representations-and-meanings", title: "التصويرات المصرية" },
    { slug: "learned-ancient-egyptians", title: "المصريون القدماء المتعلمون" },
    { slug: "egyptian-cosmic-religion", title: "الديانة الكونية المصرية" }
];

export default function ArticlesPage() {
    return (
        <div className="px-8 py-16 max-w-6xl mx-auto animate-fade-in" dir="rtl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-12 border-b-[3px] border-gray-100 pb-4 inline-block relative leading-loose text-balance">
                أقسام المقالات
                <div className="absolute -bottom-[3px] right-0 h-[3px] w-1/2 bg-ewc-red"></div>
            </h1>

            <div className="grid gap-6 md:grid-cols-2">
                {categories.map((category) => (
                    <Link key={category.slug} href={`/articles/category/${category.slug}`} className="group block h-full">
                        <div className="bg-white p-8 rounded-xl shadow-[0_2px_10px_rgba(47,99,157,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(47,99,157,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center">
                            <h2 className="text-xl md:text-2xl font-bold font-sans text-ewc-navy group-hover:text-ewc-red transition-colors flex items-center justify-between gap-4">
                                <span className="leading-relaxed">{category.title}</span>
                                <span className="transform group-hover:-translate-x-2 transition-transform text-ewc-blue text-2xl">
                                    &larr;
                                </span>
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
