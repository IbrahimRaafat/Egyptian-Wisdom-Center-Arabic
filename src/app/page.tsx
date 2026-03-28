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
            ستندهش حين تكتشف كيف ترتكز الحضارة الحديثة بقوة على أكتاف مصر القديمة.
            يقدم هذا الموقع طريقين رئيسيين للتعلم، بأكثر من 10 لغات:
          </p>
          <ul className="text-lg text-gray-700 leading-relaxed font-sans max-w-2xl list-disc pr-6 space-y-2">
            <li><strong>مجموعة غنية من المقالات المجانية:</strong> بقلم مصطفى جاد الله. يمكنك الوصول إليها عبر رابط "المقالات" (Articles) في القائمة.</li>
            <li><strong>روابط لموقع مكمل:</strong> حيث يمكنك شراء العديد من كتب مصطفى جاد الله، والمتوفرة بعدة لغات. راجع رابط "كتبنا" (Our Books) في القائمة أعلاه.</li>
          </ul>
          <p className="text-xl text-gray-700 leading-relaxed font-sans max-w-2xl">
            استمتع بهذه الرؤية العميقة والشيقة لثقافة وحكمة مصر القديمة.
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


    </div>
  );
}
