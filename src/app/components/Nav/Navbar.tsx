import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <nav className="flex items-center py-4 text-white">
      <ul className="flex-1 text-center">
        <NavbarLink href="#home" value="Home" />
        <NavbarLink href="#nossa-historia" value="Nossa História" />
        <NavbarLink href="#casamento" value="O Casamento" />
        <NavbarLink href="#lista-presente" value="Lista de presentes" />
      </ul>
    </nav>
  );
}
