import { useState } from "react";
import Tooltip from "../Tooltip";

export default function Bttn({
  tooltip,
  active,
  children,
  to,
  className,
  onClick,
}: {
  tooltip?: string;
  active?: boolean;
  children?: React.ReactNode;
  to?: string;
  className?: string;
  onClick?: () => void | Promise<void>;
}) {
  const [tt, setTt] = useState(false);

  return (
    <a
      href={to}
      className={`${active ? "bg-primary-hover shadow-md shadow-primary-hover" : "bg-primary"} ${ className} relative size-8 grid place-items-center p-2 rounded-lg text-main-text text-sm bg-primary hover:bg-primary-hover transition-all duration-300 cursor-pointer`}
      onClick={onClick}
      onMouseOver={()=>setTt(true)}
      onMouseLeave={()=>setTt(false)}
    >
      {tt && tooltip && <Tooltip>{tooltip}</Tooltip>}
      {children}
    </a>
  );
}
