import Link from "next/link";

type ButtonCasamentoProps = {
  href: string;
  value: string;
  css?: string;
};

export default function ButtonCasamento(props: ButtonCasamentoProps) {
  return (
    <Link
      target="_blank"
      href={props.href}
      className={`rounded-lg m-2 py-6 px-6 text-center ${props.css} hover:from-pink-500 hover:to-yellow-500 transition-colors duration-300`}
    >
      {props.value}
    </Link>
  );
}
