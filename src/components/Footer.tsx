"use client";

export default function Footer() {
    return (
        <footer className="bg-ewc-navy text-white text-center py-6 mt-auto">
            <div className="container mx-auto px-4">
                <p className="font-sans text-sm mb-2">
                    © {new Date().getFullYear()} مركز الحكمة المصري. جميع الحقوق محفوظة.
                </p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-white opacity-70 hover:opacity-100 transition-opacity underline"
                >
                    العودة إلى الأعلى
                </button>
            </div>
        </footer>
    );
}
