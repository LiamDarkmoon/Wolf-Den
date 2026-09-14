export default function Bttn({
  children,
  to,
  onClick,
}: {
  children?: React.ReactNode;
  to?: string;
  onClick?: () => void | Promise<void>
}) {
  return (
      <a
        href={ to }
        className="w-fit grid place-items-center p-2 rounded-lg text-main-text text-sm bg-primary hover:bg-primary-hover transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        { children }
      </a>
  );
}
