import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const articlesDir = path.join(process.cwd(), 'src', 'data', 'articles');
    
    try {
        if (!fs.existsSync(articlesDir)) {
            return [];
        }
        const files = fs.readdirSync(articlesDir);
        return files
            .filter(file => file.endsWith('.json'))
            .map(file => ({
                slug: file.replace('.json', '')
            }));
    } catch (error) {
        console.error("Error reading articles directory", error);
        return [];
    }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const articleFilePath = path.join(process.cwd(), 'src', 'data', 'articles', `${slug}.json`);

    let article: { title: string, content: string, originalUrl: string, slug: string } | null = null;
    try {
        if (fs.existsSync(articleFilePath)) {
            const rawData = fs.readFileSync(articleFilePath, 'utf8');
            article = JSON.parse(rawData);
        } else {
            return notFound();
        }
    } catch (error) {
        console.error(`Error loading article ${slug}`, error);
        return notFound();
    }

    if (!article) return notFound();

    return (
        <article className="px-8 py-16 max-w-4xl mx-auto bg-white my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in">
            <header className="mb-10 text-center">
                <h1 className="text-4xl md:text-5xl font-heading text-[#dbae89] mb-6 leading-tight">
                    {article.title}
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-relaxed 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-4 prose-h2:font-sans
                           prose-a:text-ewc-blue hover:prose-a:text-ewc-navy
                           prose-img:rounded-md prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />
        </article>
    );
}
