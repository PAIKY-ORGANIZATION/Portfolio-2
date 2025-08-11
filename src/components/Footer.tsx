import { socialLinks } from "./Social-links";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold">Miguel Mendez</a>
        <nav className="flex space-x-4">
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} aria-label={link.label} className="hover:text-blue-400">
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}