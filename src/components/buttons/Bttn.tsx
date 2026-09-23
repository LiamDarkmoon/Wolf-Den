export default function Bttn({
  active,
  children,
  to,
  onClick,
}: {
  active?: boolean
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void | Promise<void>
}) {
  return (
      <a
        href={ to }
        className={`${active ? "bg-primary-hover" : "bg-primary"} size-8 grid place-items-center p-2 rounded-lg text-main-text text-sm bg-primary hover:bg-primary-hover transition-all duration-300 cursor-pointer`}
        onClick={onClick}
      >
        { children }
      </a>
  );
}
