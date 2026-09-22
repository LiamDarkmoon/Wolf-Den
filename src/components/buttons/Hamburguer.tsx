import { useState } from "react";
import Bttn from "./Bttn";

export default function Hamburger({
  onClick,
  unreadCount,
  className,
}: {
  onClick: () => void;
  unreadCount: number;
  className: string;
}) {
  const [closed, setClosed] = useState(true);

  const handleOpen = () => {
    onClick();
    setClosed(!closed);
  };

  return (
    <div className={className}>
      <Bttn onClick={handleOpen}>
        <i className="fa-solid fa-burger"></i>
      </Bttn>
      {unreadCount > 0 && closed && (
        <span
          className="
  absolute
  -top-1
  -right-1
  min-w-4
  h-4
  px-1
  flex
  items-center
  justify-center
  rounded-full
  bg-red-500
  text-white
  text-[9px]
  font-bold
  leading-none
"
        >
          {unreadCount > 9 ? "9+" : unreadCount}
        </span>
      )}
    </div>
  );
}
