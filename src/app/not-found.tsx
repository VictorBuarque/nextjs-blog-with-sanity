import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "@/src/app/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8">{"Oops! The page you're looking for doesn't exist."}</p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

