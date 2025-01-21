import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"


export default function Header() {
  return (
    <header className="w-full bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-2 capitalize">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
          <Link href="/" className="hover:text-primary transition-colors">
            Victor Buarque
          </Link>
        </h1>
        <p className="text-xl">web development blog</p>
        </div>
        <nav>
          <Button asChild variant="ghost" size="lg" className="text-lg">
            <Link
              href="https://victor-portfolio-2-0.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>victorbuarque.com</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

