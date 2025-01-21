import Social from "../social/Social";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-2">Victor Buarque</h2>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Passionate developer crafting digital experiences
          </p>
        </div>
        <nav className="flex gap-4">
          <Social />
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border">
        <p className="text-sm text-center text-muted-foreground">
          © {new Date().getFullYear()} Victor Buarque. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
