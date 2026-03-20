import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const pagesDir = path.join(process.cwd(), 'src/data/pages');
    if (!fs.existsSync(pagesDir)) return [];
    
    const files = fs.readdirSync(pagesDir);
    return files.filter(f => f.endsWith('.json')).map(file => ({
        slug: file.replace('.json', ''),
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    
    const pagesDir = path.join(process.cwd(), 'src/data/pages');
    const filePath = path.join(pagesDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const pageData = JSON.parse(fileContent);

    return (
        <div className="container mx-auto px-4 py-8 mt-20" dir="rtl">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#dbae89]">{pageData.title}</h1>
            <article className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-xl prose-img:shadow-lg prose-a:text-[#dbae89] hover:prose-a:text-[#c49a75] transition-colors"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
            />
        </div>
    );
}

