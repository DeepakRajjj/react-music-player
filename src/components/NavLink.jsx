export default function NavLink({ href, children, active = false }) {
  return (
    <a
      href={href}
      className={`${
        active ? 'text-white' : 'text-gray-400'
      } hover:text-white transition-colors whitespace-nowrap`}
    >
      {children}
    </a>
  );
}