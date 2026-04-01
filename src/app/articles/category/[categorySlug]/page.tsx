import Link from 'next/link';
import categoriesData from '@/data/categories.json';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
    return categoriesData.map((category) => ({
        categorySlug: category.slug,
    }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
    const { categorySlug } = await params;
    const category = categoriesData.find(c => c.slug === categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <div className="px-8 py-16 max-w-4xl mx-auto bg-white my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in">
            <header className="mb-10 text-center">
                {/* 
                  Category titles from the scraper are English since we scraped the English site.
                  Ideally, the user will replace these with Arabic translations in the JSON,
                  but we'll display what we have for now, mimicking the exact style.
                */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    {category.title}
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div className="prose prose-lg rtl:prose-reverse max-w-none font-sans text-gray-800 leading-relaxed">
                {category.sections.length === 0 ? (
                    <p className="text-center text-gray-500 italic">No sub-articles found for this category.</p>
                ) : (
                    category.sections.map((section, idx) => (
                        <div key={idx} className="mb-8">
                            {section.title !== 'General' && section.title !== 'عام' && (
                                <h2 className="text-2xl font-bold text-ewc-red mb-4 font-sans">{section.title}</h2>
                            )}
                            <ul className="list-disc list-inside space-y-3 ps-4">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx} className="text-ewc-navy hover:text-ewc-blue transition-colors group">
                                        <Link href={`/articles/${link.articleSlug}`} className="font-semibold underline decoration-gray-300 group-hover:decoration-ewc-blue underline-offset-4">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <Link href="/articles" className="inline-block px-8 py-3 bg-ewc-brand text-white rounded font-bold hover:brightness-110 transition-colors text-sm">
                    العودة إلى جميع المقالات
                </Link>
            </div>
        </div>
    );
}
