import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="flex items-center py-4 text-white">
      <ul className="flex-1 text-center">
        <NavbarLink href="#" value="Home" />
        <NavbarLink href="#" value="Nossa História" />
        <NavbarLink href="#" value="O Casamento" />
        <NavbarLink href="#" value="Lista de presentes" />
      </ul>
    </nav>
  );
}
