import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex sm:justify-center space-x-4 p-2">
      {[
        ['Home', '/'],
        ['Battle', '/battle'],
        ['PokeDex', '/pokedex'],
      ].map(([title, url]) => (
        <Link
          href={url}
          className="rounded-lg px-3 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900"
          key={title}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
