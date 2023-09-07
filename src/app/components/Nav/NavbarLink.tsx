import Link from "next/link";

type NavbarLink = {
  href: string;
  value: string;
};

export default function NavbarLink(props: NavbarLink) {
  return (
    <li className="list-none inline-block px-3 py-2 hover:bg-slate-100 rounded-lg hover:text-slate-900 duration-200">
      <Link className="no-underline px-2" href={props.href}>
        {props.value}
      </Link>
    </li>
  );
}
