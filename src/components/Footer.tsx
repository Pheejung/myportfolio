import React from 'react';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Pheejung' },
  { label: 'Blog', href: 'https://velog.io/@gmlwjd2116/posts' },
  { label: 'Email', href: 'mailto:gmlwjd2116@gmail.com' },
];

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-[#eee3dd] bg-white px-6 py-14 text-slate-800 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 text-xs font-semibold text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Park Hee Jung. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-[#d95749]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
