import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مكتبة الصور - مركز الحكمة المصري',
  description: 'الوصول إلى مكتبة الصور لمركز الحكمة المصري',
};

export default function PhotoLibraryPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-32 min-h-[60vh] text-center" dir="rtl">
      <h1 className="text-xl md:text-2xl font-bold font-sans text-gray-700 mb-10 leading-relaxed">
        اضغط بالأسفل للوصول إلى مكتبة الصور الخاصة بنا
      </h1>
      
      <a 
        href="https://drive.google.com/drive/folders/0BzZobbh-GU6UTlQzWU5XX3k2Tms?resourcekey=0-q34WztACmXTzQx9EJWCNAw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[#2f639d] text-white hover:bg-[#1e4573] px-10 py-4 rounded-xl text-xl font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1"
      >
        مكتبة الصور
      </a>
    </div>
  );
}
