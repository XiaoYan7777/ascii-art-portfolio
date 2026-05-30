export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent text-center">
          <pre className="text-xs md:text-sm">
            {`╔════════════════════════════════════╗
║    用爱打造 by 盐   ║
╚════════════════════════════════════╝`}
          </pre>
          <p className="text-muted-foreground text-xs mt-4">
            © {new Date().getFullYear()} • 使用 Next.js & TailwindCSS 构建
          </p>
        </div>
      </div>
    </footer>
  )
}
