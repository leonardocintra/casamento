import Link from "next/link";

type ButtonCasamentoProps = {
  href: string;
  value: string;
  css?: string;
};

export default function ButtonCasamento(props: ButtonCasamentoProps) {
  return (
    <Link
      href={props.href}
      className={`rounded-lg m-2 hover:bg-red-300 hover:text-red-800 py-6 px-6 text-center duration-300 ${props.css}`}
    >
      {props.value}
    </Link>
  );
}
