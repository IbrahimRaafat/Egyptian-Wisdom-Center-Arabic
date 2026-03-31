import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-fade-in py-0 overflow-hidden" dir="rtl">
      {/* Minimal Hero Section */}
      <section className="flex-grow flex flex-col md:flex-row items-center gap-12 md:gap-20 px-8 py-4 max-w-5xl mx-auto w-full">
        
        {/* Brand Image Area - Left side */}
        <div className="flex-1 w-full max-w-md order-2 md:order-1 flex justify-center h-full max-h-[60vh] md:max-h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/header-background-transparent.webp"
              alt="Egyptian Wisdom Center"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Quotes Area - Right side */}
        <div className="flex-1 space-y-8 md:space-y-12 order-1 md:order-2 py-4">
          {/* Proverb 1 */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-ewc-blue leading-tight tracking-tight">
              "من فات قديمه تاه"
            </h1>
            <p className="text-xl md:text-2xl font-sans text-ewc-gold font-bold">
              — مَثَل مصري
            </p>
          </div>

          {/* Quote 2 */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading text-ewc-blue/90 leading-tight italic">
              "لو لم أكن مصريًا، لوددت أن أكون مصريًا"
            </h2>
            <p className="text-lg md:text-xl font-sans text-ewc-gold font-bold">
               — مصطفى كامل
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
