import Link from 'next/link';

const navbar = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
};

export default function Navbar() {
  return (
    <nav style={navbar} className="px-0 py-8">
      <Link passHref href="/">
        <a className="mdnext-nav__item">Home</a>
      </Link>
      <Link passHref href="/about">
        <a className="mdnext-nav__item">About</a>
      </Link>
    </nav>
  );
}
