import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h2 className="text-6xl md:text-8xl font-display font-bold text-[var(--color-brand)] mb-4">404</h2>
      <h3 className="text-2xl md:text-3xl font-display text-[var(--text-primary)] mb-6">Page Not Found</h3>
      <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="magnetic border border-[var(--border-color)] px-6 py-3 rounded-full hover:bg-[var(--color-brand)] hover:text-[var(--surface)] hover:border-transparent transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
