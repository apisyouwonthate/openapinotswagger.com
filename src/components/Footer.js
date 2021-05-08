import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-0 py-8 text-sm">
      <span>A project from the community at </span>
      <a
        className="text-primary-700 hover:underline"
        href="https://apisyouwonthate.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        APIs You Won't Hate
      </a>
      <span>, &copy; 2021</span>
    </footer>
  );
}
